"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressIntervensiService = void 0;
const response_error_1 = require("../error/response_error");
const progressintervensi_model_1 = require("../model/progressintervensi_model");
const database_1 = require("../web/database");
class ProgressIntervensiService {
    static async readAllByIntervensiUuid(uuid) {
        let result = await database_1.client.progressRaIntervensi.findMany({
            where: {
                ra: uuid
            }
        });
        return result.map((el) => (0, progressintervensi_model_1.toProgressIntervensiResponse)(el));
    }
    static async getByUuid(uuid) {
        let result = (await database_1.client.progressRaIntervensi.findFirst({
            where: {
                uuid: uuid
            }
        }));
        if (!result) {
            throw new response_error_1.ResponseError(404, "There is no Data");
        }
        return (0, progressintervensi_model_1.toProgressIntervensiResponse)(result);
    }
    static async readAll() {
        return (await database_1.client.progressRaIntervensi.findMany()).map((el) => (0, progressintervensi_model_1.toProgressIntervensiResponse)(el));
    }
    static async create(input) {
        let result = await database_1.client.progressRaIntervensi.create({
            data: input
        });
        return (0, progressintervensi_model_1.toProgressIntervensiResponse)(result);
    }
    static async delete(uuid) {
        let result = await database_1.client.progressRaIntervensi.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, progressintervensi_model_1.toProgressIntervensiResponse)(result);
    }
    static async deleteAllByRaUuuid(uuid) {
        let result = await database_1.client.progressRaIntervensi.deleteMany({
            where: {
                ra: uuid
            }
        });
        return result.count;
    }
    static async updateByUuid(uuid, input) {
        let result = await database_1.client.progressRaIntervensi.update({
            data: input,
            where: {
                uuid: uuid
            }
        });
        return (0, progressintervensi_model_1.toProgressIntervensiResponse)(result);
    }
}
exports.ProgressIntervensiService = ProgressIntervensiService;
//# sourceMappingURL=progressintervensi_service.js.map