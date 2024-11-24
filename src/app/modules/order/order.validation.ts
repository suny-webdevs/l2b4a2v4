import { z } from "zod"

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const orderValidationSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .trim()
    .toLowerCase()
    .refine((value) => emailRegex.test(value), {
      message: "Invalid email format",
    }),
  product: z.string().nonempty("Product ID is required"),
  quantity: z
    .number()
    .min(1, "Quantity must be at least 1")
    .refine((val) => Number.isInteger(val), {
      message: "Quantity must be an integer",
    }),
  totalAmount: z.number().min(0, "Total amount must be a positive number"),
})

export default orderValidationSchema
