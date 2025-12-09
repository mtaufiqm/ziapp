"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const zod_1 = require("zod");
const response_error_1 = require("../error/response_error");
const errorMiddleware = async (error, req, resp, next) => {
    if (error instanceof zod_1.ZodError) {
        resp.status(400).json({
            errors: `Validation Error : ${JSON.stringify(error)}`
        });
    }
    else if (error instanceof response_error_1.ResponseError) {
        resp.status(error.status).json({
            errors: error.message
        });
    }
    else {
        resp.status(500).json({
            errors: error.message
        });
    }
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error_middleware.js.map