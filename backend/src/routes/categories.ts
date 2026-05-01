import { Router, Request, Response } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

// GET /api/categories
router.get("/", async (_req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      include: { _count: { select: { products: true } } },
      orderBy: { name: "asc" },
    });
    res.json({ success: true, categories });
  } catch (error) {
    console.error("GET /categories:", error);
    res.status(500).json({ success: false, error: "Failed to fetch categories" });
  }
});

// GET /api/categories/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: req.params.id },
      include: { products: true },
    });

    if (!category) {
      res.status(404).json({ success: false, error: "Category not found" });
      return;
    }

    res.json({ success: true, category });
  } catch (error) {
    console.error("GET /categories/:id:", error);
    res.status(500).json({ success: false, error: "Failed to fetch category" });
  }
});

// POST /api/categories
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      res.status(400).json({ success: false, error: "name is required" });
      return;
    }

    const category = await prisma.category.create({ data: { name, description } });
    res.status(201).json({ success: true, category });
  } catch (error) {
    console.error("POST /categories:", error);
    res.status(500).json({ success: false, error: "Failed to create category" });
  }
});

// PUT /api/categories/:id
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const category = await prisma.category.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
      },
    });

    res.json({ success: true, category });
  } catch (error) {
    console.error("PUT /categories/:id:", error);
    res.status(500).json({ success: false, error: "Failed to update category" });
  }
});

// DELETE /api/categories/:id
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await prisma.category.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: "Category deleted" });
  } catch (error) {
    console.error("DELETE /categories/:id:", error);
    res.status(500).json({ success: false, error: "Failed to delete category" });
  }
});

export default router;
