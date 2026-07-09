import { Router, Request, Response } from "express";
import multer from "multer";
import {
  generateKey,
  uploadBuffer,
  presignedPutUrl,
  presignedGetUrl,
  deleteObject,
  publicUrl,
} from "../lib/minio";

const router = Router();

// Multer: store files in memory (we forward the buffer to MinIO)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB max
  fileFilter: (_req, file, cb) => {
    const ALLOWED = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "application/pdf",
    ];
    if (ALLOWED.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`File type not allowed: ${file.mimetype}`));
    }
  },
});

// ── POST /api/upload/single ───────────────────────────────────
// Direct server-side upload (multipart/form-data, field: "file")
// Query param ?folder=products  (default: "uploads")
router.post(
  "/single",
  upload.single("file"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        res.status(400).json({ success: false, error: "No file uploaded" });
        return;
      }

      const folder = (req.query.folder as string) || "uploads";
      const key = generateKey(folder, req.file.originalname);

      const url = await uploadBuffer(key, req.file.buffer, req.file.mimetype);

      res.status(201).json({
        success: true,
        data: {
          key,
          url,
          originalName: req.file.originalname,
          size: req.file.size,
          mimetype: req.file.mimetype,
        },
      });
    } catch (err) {
      console.error("[upload/single]", err);
      res.status(500).json({ success: false, error: "Upload failed" });
    }
  }
);

// ── POST /api/upload/multiple ─────────────────────────────────
// Upload up to 10 files at once (field: "files")
router.post(
  "/multiple",
  upload.array("files", 10),
  async (req: Request, res: Response) => {
    try {
      const files = req.files as Express.Multer.File[];
      if (!files || files.length === 0) {
        res.status(400).json({ success: false, error: "No files uploaded" });
        return;
      }

      const folder = (req.query.folder as string) || "uploads";

      const results = await Promise.all(
        files.map(async (file) => {
          const key = generateKey(folder, file.originalname);
          const url = await uploadBuffer(key, file.buffer, file.mimetype);
          return {
            key,
            url,
            originalName: file.originalname,
            size: file.size,
            mimetype: file.mimetype,
          };
        })
      );

      res.status(201).json({ success: true, data: results });
    } catch (err) {
      console.error("[upload/multiple]", err);
      res.status(500).json({ success: false, error: "Upload failed" });
    }
  }
);

// ── POST /api/upload/presign ──────────────────────────────────
// Generate a presigned PUT URL — client uploads directly to MinIO
// Body: { fileName, contentType, folder? }
router.post("/presign", async (req: Request, res: Response) => {
  try {
    const { fileName, contentType, folder = "uploads" } = req.body as {
      fileName: string;
      contentType: string;
      folder?: string;
    };

    if (!fileName || !contentType) {
      res
        .status(400)
        .json({ success: false, error: "fileName and contentType required" });
      return;
    }

    const key = generateKey(folder, fileName);
    const uploadUrl = await presignedPutUrl(key, contentType);
    const fileUrl = publicUrl(key);

    res.json({
      success: true,
      data: {
        key,
        uploadUrl,   // PUT to this URL from the browser
        fileUrl,     // Public URL after upload completes
        expiresIn: 300,
      },
    });
  } catch (err) {
    console.error("[upload/presign]", err);
    res.status(500).json({ success: false, error: "Could not generate presigned URL" });
  }
});

// ── GET /api/upload/presign/* ──────────────────────────────
// Generate a presigned GET URL for private file access
router.get("/presign/*path", async (req: Request, res: Response) => {
  try {
    const key = Array.isArray(req.params.path)
      ? req.params.path.join("/")
      : String(req.params.path);
    const url = await presignedGetUrl(key);
    res.json({ success: true, data: { key, url, expiresIn: 3600 } });
  } catch (err) {
    console.error("[upload/presign GET]", err);
    res.status(500).json({ success: false, error: "Could not generate presigned URL" });
  }
});

// ── DELETE /api/upload/* ────────────────────────────────
// Delete an object by its key
router.delete("/*path", async (req: Request, res: Response) => {
  try {
    const key = Array.isArray(req.params.path)
      ? req.params.path.join("/")
      : String(req.params.path);

    // Validasi key untuk mencegah path traversal
    if (!key || key.includes("..") || key.startsWith("/") || key.includes("\\")) {
      res.status(400).json({ success: false, error: "Invalid key format" });
      return;
    }

    await deleteObject(key);
    res.json({ success: true, message: `Deleted: ${key}` });
  } catch (err) {
    console.error("[upload/delete]", err);
    res.status(500).json({ success: false, error: "Delete failed" });
  }
});

export default router;
