import { IOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrder = async (order: IOrder) => {
  const data = await Order.create(order)
  return data
}

const getOrders = async () => {
  const data = await Order.find()
  return data
}

const getOrder = async (id: string) => {
  const data = await Order.findById(id)
  return data
}

const updateOrder = async (id: string, order: IOrder) => {
  const data = await Order.findByIdAndUpdate(id, order, { new: true })
  return data
}

const deleteOrder = async (id: string) => {
  const data = await Order.findByIdAndDelete(id)
  return data
}

export const orderService = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
}
