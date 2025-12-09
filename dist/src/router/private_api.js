"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRouter = void 0;
const express_1 = __importDefault(require("express"));
const api_version_1 = require("../routes/api_version");
exports.privateRouter = express_1.default.Router();
exports.privateRouter.get("/api/appVersion", api_version_1.appVersion);
//# sourceMappingURL=private_api.js.map