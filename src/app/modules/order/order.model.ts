import { model, Schema } from "mongoose"
import { IOrder } from "./order.interface"

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: (value: string) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      },
    },
  },
  product: { type: String, required: [true, "Product ID is required"] },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
  },
  totalAmount: {
    type: Number,
    required: [true, "Total amount is required"],
    min: [0, "Total price must be positive number"],
  },
})

export const Order = model<IOrder>("Orders", orderSchema)
