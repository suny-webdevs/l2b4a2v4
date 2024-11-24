import { Request, Response } from "express"
import { orderService } from "./order.service"

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body
    const data = await orderService.createOrder(order)
    res.json({ success: true, message: "Order created successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Failed to create order", error })
  }
}

const getOrders = async (req: Request, res: Response) => {
  try {
    const data = await orderService.getOrders()
    res.json({ success: true, message: "Orders get successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Failed to get orders", error })
  }
}

const getOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await orderService.getOrder(id)
    res.json({ success: true, message: "Order get successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Failed to get order", error })
  }
}

const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body
    const id = req.params.id
    const data = await orderService.updateOrder(id, order)
    res.json({ success: true, message: "Order updated successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Failed to update order", error })
  }
}

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await orderService.deleteOrder(id)
    res.json({ success: true, message: "Order deleted successfully", data })
  } catch (error) {
    res.json({ success: false, message: "Failed to delete order", error })
  }
}

export const orderController = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
}
