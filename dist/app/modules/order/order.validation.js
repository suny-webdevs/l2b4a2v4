"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .nonempty("Email is required")
        .trim()
        .toLowerCase()
        .refine((value) => emailRegex.test(value), {
        message: "Invalid email format",
    }),
    product: zod_1.z.string().nonempty("Product ID is required"),
    quantity: zod_1.z
        .number()
        .min(1, "Quantity must be at least 1")
        .refine((val) => Number.isInteger(val), {
        message: "Quantity must be an integer",
    }),
    totalAmount: zod_1.z.number().min(0, "Total amount must be a positive number"),
});
exports.default = orderValidationSchema;
