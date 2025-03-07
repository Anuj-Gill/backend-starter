"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const config_1 = require("./config");
const logger_utils_1 = __importDefault(require("./utils/logger.utils"));
const middlewares_1 = __importDefault(require("./api/middlewares"));
const router_middleware_1 = __importDefault(require("./api/middlewares/router.middleware"));
const app = (0, server_1.default)();
(0, middlewares_1.default)(app);
(0, router_middleware_1.default)(app);
app.listen(config_1.miscConfig.port, () => {
    logger_utils_1.default.info(`Server started at ${config_1.miscConfig.port}`);
});
