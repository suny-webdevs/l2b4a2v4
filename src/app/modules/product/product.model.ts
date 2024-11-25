import { model, Schema } from "mongoose"
import { IProduct } from "./product.interface"

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: [true, "Name is required"] },
    brand: { type: String, required: [true, "Brand is required"] },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    type: {
      type: String,
      enum: {
        values: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
        message: "{VALUE} is not a valid bicycle type",
      },
    },
    description: { type: String, required: [true, "Description is required"] },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    inStock: { type: Boolean, required: [true, "In Stock is required"] },
  },
  { timestamps: true }
)

export const Bicycle = model<IProduct>("Bicycle", productSchema)
