"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const public_api_1 = require("../router/public_api");
const error_middleware_1 = require("../middleware/error_middleware");
const private_api_1 = require("../router/private_api");
const auth_middleware_1 = require("../middleware/auth_middleware");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ override: true });
let port = Number.parseInt(process.env.SERVER_PORT ?? "8000");
const web = (0, express_1.default)();
web.use((0, cors_1.default)({
    allowedHeaders: "*",
    exposedHeaders: "*"
}));
web.use(express_1.default.json());
web.use(public_api_1.publicRouter);
//private
web.use(auth_middleware_1.authMiddleware);
web.use(private_api_1.privateRouter);
//ERROR
web.use(error_middleware_1.errorMiddleware);
web.listen(port);
//# sourceMappingURL=web.js.map