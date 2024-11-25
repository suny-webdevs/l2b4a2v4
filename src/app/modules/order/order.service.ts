import { Bicycle } from "../product/product.model"
import { IOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrder = async (order: IOrder) => {
  const { email, product: productId, quantity } = order
  const product = await Bicycle.findById(productId)

  if (!product) {
    throw new Error("Product not found")
  }

  if (!product.inStock || product.quantity < quantity) {
    throw new Error("Insufficient stock available")
  }

  const totalPrice = product.price * quantity

  product.quantity -= quantity

  if (product.quantity === 0) {
    product.inStock = false
  }

  await product.save()

  const data = await Order.create({
    email,
    product,
    quantity,
    totalPrice,
  })
  return data
}

const getOrders = async () => {
  const data = await Order.find()
  return data
}

const getTotalRevenue = async () => {
  const data = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } },
    { $project: { totalRevenue: 1 } },
  ])
  return data.length > 0 ? data : { totalPrice: 0 }
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
  getTotalRevenue,
  getOrder,
  updateOrder,
  deleteOrder,
}
