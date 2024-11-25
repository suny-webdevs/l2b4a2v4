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
exports.orderService = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { product } = order;
    const productId = yield product_model_1.Bicycle.findById(product);
    const data = yield order_model_1.Order.create(order);
    return data;
});
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield order_model_1.Order.find();
    return data;
});
const getTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield order_model_1.Order.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } },
        { $project: { totalRevenue: 1 } },
    ]);
    return data;
});
const getOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield order_model_1.Order.findById(id);
    return data;
});
const updateOrder = (id, order) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield order_model_1.Order.findByIdAndUpdate(id, order, { new: true });
    return data;
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield order_model_1.Order.findByIdAndDelete(id);
    return data;
});
exports.orderService = {
    createOrder,
    getOrders,
    getTotalRevenue,
    getOrder,
    updateOrder,
    deleteOrder,
};
