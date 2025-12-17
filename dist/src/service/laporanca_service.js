"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaporanCaService = void 0;
const laporanca_model_1 = require("../model/laporanca_model");
const database_1 = require("../web/database");
class LaporanCaService {
    static async create(input) {
        let result = await database_1.client.laporanCa.create({
            data: input
        });
        return (0, laporanca_model_1.toLaporanCaResponse)(result);
    }
    static async deleteByUuid(uuid) {
        let result = await database_1.client.laporanCa.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, laporanca_model_1.toLaporanCaResponse)(result);
    }
    static async updateByUuid(uuid, update) {
        let result = await database_1.client.laporanCa.update({
            where: {
                uuid: uuid
            },
            data: update
        });
        return (0, laporanca_model_1.toLaporanCaResponse)(result);
    }
    static async readAllBySatkerAndTahun(satker, tahun) {
        let result = await database_1.client.laporanCa.findMany({
            where: {
                satker: satker,
                tahun: tahun
            },
            orderBy: {
                triwulan: "asc"
            }
        });
        return result.map(el => (0, laporanca_model_1.toLaporanCaResponse)(el));
    }
    static async readAllByTahun(tahun) {
        let result = await database_1.client.laporanCa.findMany({
            where: {
                tahun: tahun
            },
            orderBy: [
                {
                    satker: "asc"
                },
                {
                    triwulan: "asc"
                }
            ]
        });
        return result.map(el => (0, laporanca_model_1.toLaporanCaResponse)(el));
    }
}
exports.LaporanCaService = LaporanCaService;
//# sourceMappingURL=laporanca_service.js.map