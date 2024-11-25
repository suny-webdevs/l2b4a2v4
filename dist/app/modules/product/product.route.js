"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const productRouter = (0, express_1.Router)();
productRouter.post("/products", product_controller_1.productController.createProduct);
productRouter.get("/products", product_controller_1.productController.getProducts);
productRouter.get("/products/:id", product_controller_1.productController.getProduct);
productRouter.put("/products/:id", product_controller_1.productController.updateProduct);
productRouter.delete("/products/:id", product_controller_1.productController.deleteProduct);
exports.default = productRouter;
