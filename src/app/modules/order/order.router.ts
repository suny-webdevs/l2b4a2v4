import { Router } from "express"
import { orderController } from "./order.controller"

const orderRouter = Router()

orderRouter.post("/orders", orderController.createOrder)
orderRouter.get("/orders", orderController.getOrders)
orderRouter.get("/orders/:id", orderController.getOrder)
orderRouter.put("/orders/:id", orderController.updateOrder)
orderRouter.delete("/orders/:id", orderController.deleteOrder)

export default orderRouter
