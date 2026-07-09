"use server";

import { prisma } from "@/lib/prisma";


export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return { success: true, products };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { success: false, error: "Failed to fetch products" };
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    return { success: true, product };
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return { success: false, error: "Failed to fetch product" };
  }
}

export async function createDummyData() {
  try {
    const category = await prisma.category.create({
      data: {
        name: "Premium Fish",
        description: "High quality premium fish species",
      },
    });

    await prisma.product.create({
      data: {
        name: "Atlantic Salmon",
        description: "Premium quality salmon raised in optimal conditions",
        price: 24.99,
        categoryId: category.id,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating dummy data:", error);
    return { success: false, error: "Failed to create dummy data" };
  }
}
