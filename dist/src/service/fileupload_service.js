"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const response_error_1 = require("../error/response_error");
const fileupload_model_1 = require("../model/fileupload_model");
const database_1 = require("../web/database");
const promises_1 = __importDefault(require("fs/promises"));
class FileUploadService {
    static async create(input) {
        let result = await database_1.client.fileUpload.create({
            data: input
        });
        return (0, fileupload_model_1.toFileUploadResponse)(result);
    }
    static async getByUuid(uuid) {
        let result = await database_1.client.fileUpload.findUnique({
            where: {
                uuid: uuid
            }
        });
        if (!result) {
            throw new response_error_1.ResponseError(404, "Data Not Found");
        }
        return (0, fileupload_model_1.toFileUploadResponse)(result);
    }
    static async deleteByUuid(uuid) {
        //delete file in disk
        try {
            let item = await database_1.client.fileUpload.findUnique({
                where: { uuid: uuid }
            });
            if (!item) {
                throw new Error("Not Found");
            }
            let result = await promises_1.default.unlink(item.path);
        }
        catch (err) {
            console.info(`Error Delete Physics File in Disk ${err}`);
        }
        let result = await database_1.client.fileUpload.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, fileupload_model_1.toFileUploadResponse)(result);
    }
    static async updateByUuid(uuid, update) {
        let result = await database_1.client.fileUpload.update({
            where: {
                uuid: uuid
            },
            data: update
        });
        return (0, fileupload_model_1.toFileUploadResponse)(result);
    }
}
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=fileupload_service.js.map