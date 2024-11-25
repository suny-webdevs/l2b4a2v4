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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const data = yield order_service_1.orderService.createOrder(order);
        res.json({ success: true, message: "Order created successfully", data });
    }
    catch (error) {
        next(error);
    }
});
const getOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield order_service_1.orderService.getOrders();
        res.json({ success: true, message: "Orders get successfully", data });
    }
    catch (error) {
        next(error);
    }
});
const getTotalRevenue = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield order_service_1.orderService.getTotalRevenue();
        res.json({ success: true, message: "Total revenue successfully get", data });
    }
    catch (error) {
        next(error);
    }
});
const getOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield order_service_1.orderService.getOrder(id);
        res.json({ success: true, message: "Order get successfully", data });
    }
    catch (error) {
        next(error);
    }
});
const updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const id = req.params.id;
        const data = yield order_service_1.orderService.updateOrder(id, order);
        res.json({ success: true, message: "Order updated successfully", data });
    }
    catch (error) {
        next(error);
    }
});
const deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield order_service_1.orderService.deleteOrder(id);
        res.json({ success: true, message: "Order deleted successfully", data });
    }
    catch (error) {
        next(error);
    }
});
exports.orderController = {
    createOrder,
    getOrders,
    getTotalRevenue,
    getOrder,
    updateOrder,
    deleteOrder,
};
