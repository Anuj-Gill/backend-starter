"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(env) {
    return {
        port: env.PORT,
        frontEndUrl: env.FRONTEND_URL || `http://localhost:5173`,
    };
}
