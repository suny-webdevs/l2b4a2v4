"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
        },
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Product ID is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"],
    },
    totalPrice: {
        type: Number,
        required: [true, "Total price is required"],
        min: [0, "Total price must be positive number"],
    },
}, { timestamps: true });
exports.Order = (0, mongoose_1.model)("Orders", orderSchema);
