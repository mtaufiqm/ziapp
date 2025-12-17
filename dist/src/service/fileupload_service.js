"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const fileupload_model_1 = require("../model/fileupload_model");
const database_1 = require("../web/database");
class FileUploadService {
    static async create(input) {
        let result = await database_1.client.fileUpload.create({
            data: input
        });
        return (0, fileupload_model_1.toFileUploadResponse)(result);
    }
    static async deleteByUuid(uuid) {
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