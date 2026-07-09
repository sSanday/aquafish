import { Router, Request, Response } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

// GET /api/products
router.get("/", async (req: Request, res: Response) => {
  try {
    const { categoryId, search } = req.query;

    const products = await prisma.product.findMany({
      where: {
        ...(categoryId ? { categoryId: String(categoryId) } : {}),
        ...(search
          ? {
              OR: [
                { name: { contains: String(search), mode: "insensitive" } },
                { description: { contains: String(search), mode: "insensitive" } },
              ],
            }
          : {}),
      },
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });

    res.json({ success: true, products });
  } catch (error) {
    console.error("GET /products:", error);
    res.status(500).json({ success: false, error: "Failed to fetch products" });
  }
});

// GET /api/products/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: String(req.params.id) },
      include: { category: true },
    });

    if (!product) {
      res.status(404).json({ success: false, error: "Product not found" });
      return;
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error("GET /products/:id:", error);
    res.status(500).json({ success: false, error: "Failed to fetch product" });
  }
});

// POST /api/products
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description, price, imageUrl, categoryId } = req.body;

    if (!name || price === undefined || !categoryId) {
      res.status(400).json({ success: false, error: "name, price, and categoryId are required" });
      return;
    }

    const product = await prisma.product.create({
      data: { name, description, price: parseFloat(price), imageUrl, categoryId },
      include: { category: true },
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error("POST /products:", error);
    res.status(500).json({ success: false, error: "Failed to create product" });
  }
});

// PUT /api/products/:id
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { name, description, price, imageUrl, categoryId } = req.body;

    const product = await prisma.product.update({
      where: { id: String(req.params.id) },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price: parseFloat(price) }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(categoryId && { categoryId }),
      },
      include: { category: true },
    });

    res.json({ success: true, product });
  } catch (error) {
    console.error("PUT /products/:id:", error);
    res.status(500).json({ success: false, error: "Failed to update product" });
  }
});

// DELETE /api/products/:id
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await prisma.product.delete({ where: { id: String(req.params.id) } });
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("DELETE /products/:id:", error);
    res.status(500).json({ success: false, error: "Failed to delete product" });
  }
});

export default router;
