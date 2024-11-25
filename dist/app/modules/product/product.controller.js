"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const data = yield product_service_1.productService.createProduct(product);
        res.json({
            success: true,
            message: "Product created successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield product_service_1.productService.getProducts();
        res.json({
            success: true,
            message: "Get products successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
const getProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield product_service_1.productService.getProduct(id);
        res.json({
            success: true,
            message: "Get product successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const id = req.params.id;
        const data = yield product_service_1.productService.updateProduct(id, product);
        res.json({
            success: true,
            message: "Update product successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield product_service_1.productService.deleteProduct(id);
        res.json({
            success: true,
            message: "Delete product successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.productController = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
