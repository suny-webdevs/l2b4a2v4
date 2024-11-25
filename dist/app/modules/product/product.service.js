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
exports.productService = void 0;
const product_model_1 = require("./product.model");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Bicycle.create(product);
    return data;
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Bicycle.find();
    return data;
});
const getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Bicycle.findById(id);
    return data;
});
const updateProduct = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Bicycle.findByIdAndUpdate(id, product, { new: true });
    return data;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Bicycle.findByIdAndDelete(id);
    return data;
});
exports.productService = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
