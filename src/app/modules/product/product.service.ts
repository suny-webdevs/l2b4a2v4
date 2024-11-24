import { IProduct } from "./product.interface"
import { Bicycle } from "./product.model"

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const data = await Bicycle.create(product)
  return data
}

const getProducts = async () => {
  const data = await Bicycle.find()
  return data
}

const getProduct = async (id: string) => {
  const data = await Bicycle.findById(id)
  return data
}

const updateProduct = async (id: string, product: IProduct) => {
  const data = await Bicycle.findByIdAndUpdate(id, product, { new: true })
  return data
}

const deleteProduct = async (id: string) => {
  const data = await Bicycle.findByIdAndDelete(id)
  return data
}

export const productService = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
}
