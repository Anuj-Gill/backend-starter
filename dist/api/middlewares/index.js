"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("../../config");
const metrics_middleware_1 = require("./metrics.middleware");
var cookieParser = require("cookie-parser");
function default_1(app) {
    app.use((0, cors_1.default)(config_1.commonConfig.corsOptions));
    app.use(cookieParser());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(metrics_middleware_1.metricsMiddleware);
}
