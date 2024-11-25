import { NextFunction, Request, Response } from "express"
import { orderService } from "./order.service"

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body
    const data = await orderService.createOrder(order)
    res.json({ success: true, message: "Order created successfully", data })
  } catch (error) {
    next(error)
  }
}

const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await orderService.getOrders()
    res.json({ success: true, message: "Orders get successfully", data })
  } catch (error) {
    next(error)
  }
}

const getTotalRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await orderService.getTotalRevenue()
    res.json({ success: true, message: "Total revenue successfully get", data })
  } catch (error) {
    next(error)
  }
}

const getOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const data = await orderService.getOrder(id)
    res.json({ success: true, message: "Order get successfully", data })
  } catch (error) {
    next(error)
  }
}

const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body
    const id = req.params.id
    const data = await orderService.updateOrder(id, order)
    res.json({ success: true, message: "Order updated successfully", data })
  } catch (error) {
    next(error)
  }
}

const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const data = await orderService.deleteOrder(id)
    res.json({ success: true, message: "Order deleted successfully", data })
  } catch (error) {
    next(error)
  }
}

export const orderController = {
  createOrder,
  getOrders,
  getTotalRevenue,
  getOrder,
  updateOrder,
  deleteOrder,
}
