"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileRouter = void 0;
const express_1 = require("express");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const fileupload_controller_1 = require("../controller/fileupload_controller");
exports.uploadFileRouter = (0, express_1.Router)();
exports.uploadFileRouter.use((0, express_fileupload_1.default)());
exports.uploadFileRouter.post("/api/files/upload", fileupload_controller_1.FileUploadController.uploadFile);
exports.uploadFileRouter.get("/api/files/item/:uuid", fileupload_controller_1.FileUploadController.downloadFile);
//# sourceMappingURL=uploadfile_router.js.map