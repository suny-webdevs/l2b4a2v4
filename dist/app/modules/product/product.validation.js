"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleValidationSchema = void 0;
const zod_1 = require("zod");
exports.BicycleValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: "Name is required" }),
    brand: zod_1.z.string().nonempty({ message: "Brand is required" }),
    price: zod_1.z.number().min(0, { message: "Price must be a positive number" }),
    type: zod_1.z.enum(["Mountain", "Road", "Hybrid", "BMX", "Electric"], {
        required_error: "Type is required",
        invalid_type_error: "Invalid bicycle type",
    }),
    description: zod_1.z.string().nonempty({ message: "Description is required" }),
    quantity: zod_1.z.number().min(0, { message: "Quantity must be at least 1" }),
    inStock: zod_1.z.boolean({ required_error: "InStock field is required" }),
});
exports.default = exports.BicycleValidationSchema;
