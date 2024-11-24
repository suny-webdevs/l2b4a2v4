import { Router } from "express"
import { productController } from "./product.controller"

const productRouter = Router()

productRouter.post("/products", productController.createProduct)
productRouter.get("/products", productController.getProducts)
productRouter.get("/products/:id", productController.getProduct)
productRouter.put("/products/:id", productController.updateProduct)
productRouter.delete("/products/:id", productController.deleteProduct)

export default productRouter
