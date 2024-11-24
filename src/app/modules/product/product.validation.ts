import { z } from "zod"

export const BicycleValidationSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  brand: z.string().nonempty({ message: "Brand is required" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
  type: z.enum(["Mountain", "Road", "Hybrid", "BMX", "Electric"], {
    required_error: "Type is required",
    invalid_type_error: "Invalid bicycle type",
  }),
  description: z.string().nonempty({ message: "Description is required" }),
  quantity: z.number().min(0, { message: "Quantity must be at least 1" }),
  inStock: z.boolean({ required_error: "InStock field is required" }),
})

export default BicycleValidationSchema
