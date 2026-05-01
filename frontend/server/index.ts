import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";


const app = express();
const PORT = process.env.PORT || 5000;

// Singleton Prisma untuk Express server
const prisma = new PrismaClient();

// Middleware
app.use(cors({ origin: process.env.NEXTAUTH_URL || "http://localhost:3000" }));
app.use(express.json());

// Health check
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Seed dummy data (development only)
app.post("/api/seed", async (_req: Request, res: Response) => {
  if (process.env.NODE_ENV === "production") {
    res.status(403).json({ error: "Forbidden in production" });
    return;
  }

  try {
    // Upsert category agar tidak duplikat
    const category = await prisma.category.upsert({
      where: { id: "seed-category-1" },
      update: {},
      create: {
        id: "seed-category-1",
        name: "Premium Fish",
        description: "High quality premium fish species",
      },
    });

    // Upsert beberapa produk contoh
    const seedProducts = [
      { id: "seed-prod-1", name: "Atlantic Salmon", description: "Premium quality salmon raised in optimal conditions", price: 24.99 },
      { id: "seed-prod-2", name: "European Sea Bass", description: "Delicate white fish with firm texture and mild flavor", price: 18.99 },
      { id: "seed-prod-3", name: "Rainbow Trout", description: "Vibrant freshwater species known for its colorful appearance", price: 14.99 },
    ];

    for (const p of seedProducts) {
      await prisma.product.upsert({
        where: { id: p.id },
        update: {},
        create: { ...p, categoryId: category.id },
      });
    }

    res.json({ success: true, message: "Seed data created", categoryId: category.id });
  } catch (error) {
    console.error("Seed error:", error);
    res.status(500).json({ success: false, error: "Seed failed" });
  }
});

// Stats endpoint
app.get("/api/stats", async (_req: Request, res: Response) => {
  try {
    const [userCount, productCount, orderCount, categoryCount] = await Promise.all([
      prisma.user.count(),
      prisma.product.count(),
      prisma.order.count(),
      prisma.category.count(),
    ]);

    res.json({
      success: true,
      stats: { users: userCount, products: productCount, orders: orderCount, categories: categoryCount },
    });
  } catch (error) {
    console.error("Stats error:", error);
    res.status(500).json({ success: false, error: "Failed to fetch stats" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Express server running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Stats:  http://localhost:${PORT}/api/stats`);
});
