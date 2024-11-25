"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_route_1 = __importDefault(require("./app/modules/product/product.route"));
const order_router_1 = __importDefault(require("./app/modules/order/order.router"));
const app = (0, express_1.default)();
//* Parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//* App routes
app.use("/api", product_route_1.default);
app.use("/api", order_router_1.default);
app.get("/", (req, res) => {
    res.json({ success: true, message: "Hello Assignment-2 World!" });
});
exports.default = app;
