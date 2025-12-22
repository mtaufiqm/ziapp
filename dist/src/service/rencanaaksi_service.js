"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RencanaAksiService = void 0;
const rencanaaksi_model_1 = require("../model/rencanaaksi_model");
const database_1 = require("../web/database");
const response_error_1 = require("../error/response_error");
class RencanaAksiService {
    static async readAll(opt) {
        if (!opt.tahun) {
            return (await database_1.client.rencanaAksi.findMany({
                where: {
                    tahun: opt.tahun
                }
            })).map((el) => (0, rencanaaksi_model_1.toRencanaAksiResponse)(el));
        }
        return (await database_1.client.rencanaAksi.findMany()).map((el) => (0, rencanaaksi_model_1.toRencanaAksiResponse)(el));
    }
    static async readAllBySatkerAndTahun(satker, tahun) {
        let returnValue = [];
        if (satker) {
            returnValue = (await database_1.client.rencanaAksi.findMany({
                where: {
                    satker: satker,
                    tahun: tahun
                },
                orderBy: {
                    last_updated: "desc"
                }
            })).map((el) => (0, rencanaaksi_model_1.toRencanaAksiResponse)(el));
        }
        else {
            returnValue = (await database_1.client.rencanaAksi.findMany({
                where: {
                    tahun: tahun
                },
                orderBy: {
                    last_updated: "desc"
                }
            })).map((el) => (0, rencanaaksi_model_1.toRencanaAksiResponse)(el));
        }
        return returnValue;
    }
    static async getByUuid(uuid) {
        let result = await database_1.client.rencanaAksi.findFirstOrThrow({
            where: {
                uuid: uuid
            },
            orderBy: {
                last_updated: "desc"
            }
        });
        return (0, rencanaaksi_model_1.toRencanaAksiResponse)(result);
    }
    static async create(input) {
        let result = await database_1.client.rencanaAksi.create({
            data: input
        });
        return (0, rencanaaksi_model_1.toRencanaAksiResponse)(result);
    }
    static async delete(uuid) {
        let result = await database_1.client.rencanaAksi.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, rencanaaksi_model_1.toRencanaAksiResponse)(result);
    }
    static async updateByUuid(uuid, input) {
        let result = await database_1.client.rencanaAksi.update({
            data: input,
            where: {
                uuid: uuid
            }
        });
        return (0, rencanaaksi_model_1.toRencanaAksiResponse)(result);
    }
    static async getStats(input) {
        let result;
        if (input.satker) {
            result = await database_1.client.$queryRaw `SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM rencana_aksi WHERE tahun = ${input.tahun} AND satker = ${input.satker}`;
        }
        else {
            result = await database_1.client.$queryRaw `SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM rencana_aksi WHERE tahun = ${input.tahun}`;
        }
        // console.info(result);
        if (!result || result.length === 0) {
            throw new response_error_1.ResponseError(404, "Not Found");
        }
        let resultObj = result.at(0);
        let statResult = {
            draft: Number.parseInt(resultObj.draft.toString()),
            submit: Number.parseInt(resultObj.submit.toString()),
            approve: Number.parseInt(resultObj.approve.toString()),
        };
        return statResult;
    }
    static async getKabKotStats(input) {
        let result;
        if (input.satker) {
            result = await database_1.client.$queryRaw `SELECT satker as satker, coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve, COUNT(*) as total FROM rencana_aksi WHERE tahun = ${input.tahun} AND satker = ${input.satker} GROUP BY satker`;
        }
        else {
            result = await database_1.client.$queryRaw `SELECT satker as satker, coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve, COUNT(*) as total FROM rencana_aksi WHERE tahun = ${input.tahun} GROUP BY satker `;
        }
        let returnValue = result.map((el) => {
            let statItem = {
                satker: el.satker,
                draft: Number.parseInt(el.draft.toString()),
                submit: Number.parseInt(el.submit.toString()),
                approve: Number.parseInt(el.approve.toString()),
                total: Number.parseInt(el.total.toString())
            };
            return statItem;
        });
        return returnValue;
    }
    static async search(data) {
        let validatedData = data;
        let skip = (data.page - 1) * data.size;
        let result = [];
        let filters = [];
        if (validatedData.nama_program) {
            filters.push({
                nama_program: {
                    contains: validatedData.nama_program
                }
            });
        }
        if (validatedData.dukungan_rb !== undefined) {
            filters.push({
                dukungan_rb: validatedData.dukungan_rb
            });
        }
        if (validatedData.status !== undefined) {
            filters.push({
                status: validatedData.status
            });
        }
        result = await database_1.client.rencanaAksi.findMany({
            where: {
                AND: filters
            },
            take: data.size,
            skip: skip
        });
        let countTotal = await database_1.client.rencanaAksi.count({
            where: {
                AND: filters
            }
        });
        return {
            data: result.map((el) => (0, rencanaaksi_model_1.toRencanaAksiResponse)(el)),
            paging: {
                current_page: validatedData.page,
                size: validatedData.size,
                total_page: Math.ceil((countTotal / validatedData.size))
            }
        };
    }
}
exports.RencanaAksiService = RencanaAksiService;
//# sourceMappingURL=rencanaaksi_service.js.map