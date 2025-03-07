"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeRequestsGauge = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.activeRequestsGauge = new prom_client_1.default.Gauge({
    name: 'active_requests',
    help: 'Number of active requests'
});
