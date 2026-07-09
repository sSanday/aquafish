import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";
import path from "path";

// ── Config ────────────────────────────────────────────────────
const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || "http://localhost:9000";
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY || "minioadmin";
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY || "minioadmin123";
const MINIO_BUCKET = process.env.MINIO_BUCKET || "aquafish";
const MINIO_PUBLIC_URL = process.env.MINIO_PUBLIC_URL || MINIO_ENDPOINT;

// ── S3 Client (MinIO is S3-compatible) ───────────────────────
export const s3 = new S3Client({
  endpoint: MINIO_ENDPOINT,
  region: "us-east-1", // MinIO ignores region but SDK requires it
  credentials: {
    accessKeyId: MINIO_ACCESS_KEY,
    secretAccessKey: MINIO_SECRET_KEY,
  },
  forcePathStyle: true, // Required for MinIO
});

export { MINIO_BUCKET };

// ── Helpers ───────────────────────────────────────────────────

/** Generate a unique object key, preserving file extension */
export function generateKey(folder: string, originalName: string): string {
  const ext = path.extname(originalName).toLowerCase();
  return `${folder}/${randomUUID()}${ext}`;
}

/** Build the public URL for an object */
export function publicUrl(key: string): string {
  return `${MINIO_PUBLIC_URL}/${MINIO_BUCKET}/${key}`;
}

/** Upload a buffer directly to MinIO */
export async function uploadBuffer(
  key: string,
  buffer: Buffer,
  contentType: string
): Promise<string> {
  await s3.send(
    new PutObjectCommand({
      Bucket: MINIO_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    })
  );
  return publicUrl(key);
}

/** Generate a pre-signed PUT URL (client-side upload) */
export async function presignedPutUrl(
  key: string,
  contentType: string,
  expiresIn = 300 // 5 minutes
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: MINIO_BUCKET,
    Key: key,
    ContentType: contentType,
  });
  return getSignedUrl(s3, command, { expiresIn });
}

/** Generate a pre-signed GET URL (private file access) */
export async function presignedGetUrl(
  key: string,
  expiresIn = 3600 // 1 hour
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: MINIO_BUCKET,
    Key: key,
  });
  return getSignedUrl(s3, command, { expiresIn });
}

/** Delete an object from MinIO */
export async function deleteObject(key: string): Promise<void> {
  await s3.send(
    new DeleteObjectCommand({
      Bucket: MINIO_BUCKET,
      Key: key,
    })
  );
}

/** Check if an object exists */
export async function objectExists(key: string): Promise<boolean> {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: MINIO_BUCKET, Key: key }));
    return true;
  } catch {
    return false;
  }
}
