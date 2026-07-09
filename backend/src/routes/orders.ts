import { Router, Request, Response } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

// GET /api/orders
router.get("/", async (req: Request, res: Response) => {
  try {
    const { userId, status } = req.query;

    const orders = await prisma.order.findMany({
      where: {
        ...(userId ? { userId: String(userId) } : {}),
        ...(status ? { status: String(status) } : {}),
      },
      include: { user: { select: { id: true, name: true, email: true } } },
      orderBy: { createdAt: "desc" },
    });

    res.json({ success: true, orders });
  } catch (error) {
    console.error("GET /orders:", error);
    res.status(500).json({ success: false, error: "Failed to fetch orders" });
  }
});

// GET /api/orders/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: String(req.params.id) },
      include: { user: { select: { id: true, name: true, email: true } } },
    });

    if (!order) {
      res.status(404).json({ success: false, error: "Order not found" });
      return;
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error("GET /orders/:id:", error);
    res.status(500).json({ success: false, error: "Failed to fetch order" });
  }
});

// POST /api/orders
router.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, total } = req.body;

    if (!userId || total === undefined) {
      res.status(400).json({ success: false, error: "userId and total are required" });
      return;
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
      return;
    }

    const order = await prisma.order.create({
      data: { userId, total: parseFloat(total), status: "pending" },
      include: { user: { select: { id: true, name: true, email: true } } },
    });

    res.status(201).json({ success: true, order });
  } catch (error) {
    console.error("POST /orders:", error);
    res.status(500).json({ success: false, error: "Failed to create order" });
  }
});

// PATCH /api/orders/:id/status
router.patch("/:id/status", async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const validStatuses = ["pending", "confirmed", "shipped", "delivered", "cancelled"];

    if (!status || !validStatuses.includes(status)) {
      res.status(400).json({ success: false, error: `status must be one of: ${validStatuses.join(", ")}` });
      return;
    }

    const order = await prisma.order.update({
      where: { id: String(req.params.id) },
      data: { status },
    });

    res.json({ success: true, order });
  } catch (error) {
    console.error("PATCH /orders/:id/status:", error);
    res.status(500).json({ success: false, error: "Failed to update order status" });
  }
});

export default router;
