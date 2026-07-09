import { prisma } from "./lib/prisma";

async function seed() {
  console.log("🌱 Seeding database...");

  // Categories
  const saltwater = await prisma.category.upsert({
    where: { id: "cat-saltwater" },
    update: {},
    create: { id: "cat-saltwater", name: "Premium Saltwater", description: "Saltwater fish species" },
  });

  const freshwater = await prisma.category.upsert({
    where: { id: "cat-freshwater" },
    update: {},
    create: { id: "cat-freshwater", name: "Premium Freshwater", description: "Freshwater fish species" },
  });

  const organic = await prisma.category.upsert({
    where: { id: "cat-organic" },
    update: {},
    create: { id: "cat-organic", name: "Organic Premium", description: "Certified organic fish" },
  });

  // Products
  const products = [
    { id: "prod-1", name: "Atlantic Salmon", description: "Premium quality salmon raised in optimal conditions", price: 24.99, categoryId: saltwater.id },
    { id: "prod-2", name: "European Sea Bass", description: "Delicate white fish with firm texture and mild flavor", price: 18.99, categoryId: saltwater.id },
    { id: "prod-3", name: "Mediterranean Sea Bream", description: "Prized for its sweet, delicate flavor and firm texture", price: 16.99, categoryId: saltwater.id },
    { id: "prod-4", name: "Rainbow Trout", description: "Vibrant freshwater species known for its colorful appearance", price: 14.99, categoryId: freshwater.id },
    { id: "prod-5", name: "Arctic Char", description: "Cold-water specialty with salmon-like richness and unique flavor", price: 22.99, categoryId: freshwater.id },
    { id: "prod-6", name: "Organic King Salmon", description: "Premium organic offering featuring the largest salmon species", price: 34.99, categoryId: organic.id },
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { id: p.id },
      update: {},
      create: p,
    });
  }

  console.log(`✅ Seeded ${products.length} products in 3 categories`);
  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});
