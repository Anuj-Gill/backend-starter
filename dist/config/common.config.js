"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const miscellaneous_config_1 = __importDefault(require("./miscellaneous.config"));
const commonConfig = {
    logger: {
        level: "info",
        format: winston_1.default.format.json(),
        transports: [new winston_1.default.transports.Console()],
    },
    corsOptions: {
        origin: [(0, miscellaneous_config_1.default)(process.env).frontEndUrl, "*"],
        credentials: true,
    }
};
exports.default = commonConfig;
