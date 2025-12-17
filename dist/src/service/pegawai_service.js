"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PegawaiService = void 0;
const response_error_1 = require("../error/response_error");
const database_1 = require("../web/database");
const pegawai_model_1 = require("../model/pegawai_model");
class PegawaiService {
    static async getByUsername(username) {
        let result = await database_1.client.pegawai.findFirst({ where: { username: username } });
        if (!result) {
            throw new response_error_1.ResponseError(400, "There is no Pegawai Data");
        }
        return (0, pegawai_model_1.toPegawaiResponse)(result);
    }
    static async create(request) {
        request.status_pegawai = "AKTIF";
        let result = await database_1.client.pegawai.create({ data: request });
        return (0, pegawai_model_1.toPegawaiResponse)(result);
    }
    static async deleteByUsername(username) {
        let result = await database_1.client.pegawai.delete({
            where: {
                username: username
            }
        });
        return (0, pegawai_model_1.toPegawaiResponse)(result);
    }
    static async updateByUsername(username, update) {
        let result = await database_1.client.pegawai.update({
            where: {
                username: username
            },
            data: update
        });
        return (0, pegawai_model_1.toPegawaiResponse)(result);
    }
}
exports.PegawaiService = PegawaiService;
//# sourceMappingURL=pegawai_service.js.map