"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const index_1 = __importDefault(require("../routes/index"));
function default_1(app) {
    app.use("/api", index_1.default);
}
