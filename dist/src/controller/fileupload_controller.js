"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadController = void 0;
const role_helper_1 = require("../helper/role_helper");
const roles_model_1 = require("../model/roles_model");
const response_error_1 = require("../error/response_error");
const pegawai_service_1 = require("../service/pegawai_service");
const fs_1 = __importDefault(require("fs"));
const fileupload_service_1 = require("../service/fileupload_service");
const uuid_1 = require("uuid");
class FileUploadController {
    static async uploadFile(req, resp, next) {
        try {
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: [...roles_model_1.RolesSet.$5, ...[roles_model_1.RolesSet.PEGAWAI]] })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ================
            let files = req.files;
            if (!files.file) {
                throw new response_error_1.ResponseError(404, "Invalid Request");
            }
            let uploadedFile = files.file;
            let filename = uploadedFile.name;
            let size = uploadedFile.size;
            let extension = uploadedFile.encoding;
            let data = await uploadedFile.data;
            if (data.byteLength === 0) {
                throw new response_error_1.ResponseError(404, "Empty File Upload");
            }
            let isWindows = false;
            let isLinux = false;
            if (process.platform === "win32") {
                isWindows = true;
            }
            if (process.platform === "linux") {
                isLinux = true;
            }
            let uuidForFilePath = (0, uuid_1.v4)();
            let path;
            //upload to windows
            if (isWindows) {
                path = `../upload/${uuidForFilePath}`;
                try {
                    let writeFile = await fs_1.default.promises.writeFile(path, uploadedFile.data);
                }
                catch (err2) {
                    throw err2;
                }
            }
            if (isLinux) {
                path = `/opt/upload/${uuidForFilePath}`;
                try {
                    let writeFile = await fs_1.default.promises.writeFile(path, uploadedFile.data);
                }
                catch (err2) {
                    throw err2;
                }
            }
            if (!path) {
                throw new response_error_1.ResponseError(404, "Upload File Not Supported in this Platform/OS");
            }
            let createFileUpload = {
                filename: filename,
                size: size,
                extension: extension,
                is_public: false,
                created_by: user.username,
                path: path
            };
            let uploadedFileResp = await fileupload_service_1.FileUploadService.create(createFileUpload);
            resp.status(200).json(uploadedFileResp);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.FileUploadController = FileUploadController;
//# sourceMappingURL=fileupload_controller.js.map