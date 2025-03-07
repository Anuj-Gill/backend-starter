"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsMiddleware = void 0;
const requestCount_monitoring_1 = require("../../monitoring/requestCount.monitoring");
const activeRequests_monitoring_1 = require("../../monitoring/activeRequests.monitoring");
const requestTime_monitoring_1 = require("../../monitoring/requestTime.monitoring");
const metricsMiddleware = (req, res, next) => {
    const startTime = Date.now();
    activeRequests_monitoring_1.activeRequestsGauge.inc();
    res.on('finish', function () {
        const endTime = Date.now();
        const duration = endTime - startTime;
        // Increment request counter
        requestCount_monitoring_1.requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });
        requestTime_monitoring_1.httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, duration);
        activeRequests_monitoring_1.activeRequestsGauge.dec();
    });
    next();
};
exports.metricsMiddleware = metricsMiddleware;
