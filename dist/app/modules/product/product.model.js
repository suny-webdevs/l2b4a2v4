"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycle = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.Bicycle = (0, mongoose_1.model)("Bicycle", productSchema);
