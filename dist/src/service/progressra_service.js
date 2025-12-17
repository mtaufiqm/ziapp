"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressRaService = void 0;
const response_error_1 = require("../error/response_error");
const progressra_model_1 = require("../model/progressra_model");
const database_1 = require("../web/database");
class ProgressRaService {
    static async readAllByRaUuid(ra) {
        return (await database_1.client.progressRencanaAksi.findMany({
            where: {
                ra: ra
            },
            orderBy: {
                last_updated: "desc"
            }
        })).map((el) => (0, progressra_model_1.toProgressRaResponse)(el));
    }
    static async getByUuid(uuid) {
        let result = (await database_1.client.progressRencanaAksi.findFirst({
            where: {
                uuid: uuid
            }
        }));
        if (!result) {
            throw new response_error_1.ResponseError(404, "There is no Data");
        }
        return (0, progressra_model_1.toProgressRaResponse)(result);
    }
    static async readAll() {
        return (await database_1.client.progressRencanaAksi.findMany()).map((el) => (0, progressra_model_1.toProgressRaResponse)(el));
    }
    static async create(input) {
        let result = await database_1.client.progressRencanaAksi.create({
            data: input
        });
        return (0, progressra_model_1.toProgressRaResponse)(result);
    }
    static async delete(uuid) {
        let result = await database_1.client.progressRencanaAksi.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, progressra_model_1.toProgressRaResponse)(result);
    }
    static async deleteAllByRaUuuid(uuid) {
        let result = await database_1.client.progressRencanaAksi.deleteMany({
            where: {
                ra: uuid
            }
        });
        return result.count;
    }
    static async updateByUuid(uuid, input) {
        let result = await database_1.client.progressRencanaAksi.update({
            data: input,
            where: {
                uuid: uuid
            }
        });
        return (0, progressra_model_1.toProgressRaResponse)(result);
    }
}
exports.ProgressRaService = ProgressRaService;
//# sourceMappingURL=progressra_service.js.map