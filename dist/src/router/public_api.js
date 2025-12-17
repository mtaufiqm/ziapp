"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controller/auth_controller");
const ipdetector_middleware_1 = require("../middleware/ipdetector_middleware");
exports.publicRouter = express_1.default.Router();
exports.publicRouter.post("/authenticate", auth_controller_1.AuthController.login);
//ip_detector
exports.publicRouter.use("/public/file", ipdetector_middleware_1.ipdetectorMiddleware);
exports.publicRouter.use("/public/file", express_1.default.static("../upload/public"));
//# sourceMappingURL=public_api.js.map