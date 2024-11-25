"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong",
        success: false,
        error: err,
        stack: err.stack || undefined,
    });
};
