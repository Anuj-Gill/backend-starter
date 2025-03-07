"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonConfig = exports.miscConfig = void 0;
const common_config_1 = __importDefault(require("./common.config"));
exports.commonConfig = common_config_1.default;
const miscellaneous_config_1 = __importDefault(require("./miscellaneous.config"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const miscConfig = (0, miscellaneous_config_1.default)(process.env);
exports.miscConfig = miscConfig;
