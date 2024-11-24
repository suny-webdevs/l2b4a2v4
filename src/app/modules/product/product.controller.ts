import { Request, Response } from "express"
import { productService } from "./product.service"

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body
    const data = await productService.createProduct(product)
    res.json({
      success: true,
      message: "Product created successfully",
      data,
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error,
    })
  }
}

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await productService.getProducts()
    res.json({
      success: true,
      message: "Get products successfully",
      data,
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error,
    })
  }
}

const getProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await productService.getProduct(id)
    res.json({
      success: true,
      message: "Get product successfully",
      data,
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error,
    })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body
    const id = req.params.id
    const data = await productService.updateProduct(id, product)
    res.json({
      success: true,
      message: "Update product successfully",
      data,
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error,
    })
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await productService.deleteProduct(id)
    res.json({
      success: true,
      message: "Delete product successfully",
      data,
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error,
    })
  }
}

export const productController = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
}
