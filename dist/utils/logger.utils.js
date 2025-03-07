"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger(config_1.commonConfig.logger);
exports.default = logger;
