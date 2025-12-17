"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramIntervensiService = void 0;
const response_error_1 = require("../error/response_error");
const programintervensi_model_1 = require("../model/programintervensi_model");
const database_1 = require("../web/database");
class ProgramIntervensiService {
    static async create(input) {
        let result = await database_1.client.programIntervensi.create({
            data: input,
            include: {
                intervensiObj: true
            }
        });
        return (0, programintervensi_model_1.toProgranIntervensiResponse)(result);
    }
    static async deleteByUuid(uuid) {
        let result = await database_1.client.programIntervensi.delete({
            where: {
                uuid: uuid
            },
            include: {
                intervensiObj: true
            }
        });
        return (0, programintervensi_model_1.toProgranIntervensiResponse)(result);
    }
    static async updateByUuid(uuid, update) {
        let result = await database_1.client.programIntervensi.update({
            where: {
                uuid: uuid
            },
            data: update,
            include: {
                intervensiObj: true
            }
        });
        return (0, programintervensi_model_1.toProgranIntervensiResponse)(result);
    }
    static async getByUuid(uuid) {
        let result = await database_1.client.programIntervensi.findFirst({
            where: {
                uuid: uuid
            },
            include: {
                intervensiObj: true
            }
        });
        if (!result) {
            throw new response_error_1.ResponseError(404, "Not Found");
        }
        return (0, programintervensi_model_1.toProgranIntervensiResponse)(result);
    }
    static async readAllBySatkerAndTahun(input) {
        let result = [];
        if (!input.satker) {
            result = await database_1.client.programIntervensi.findMany({
                where: {
                    tahun: input.tahun
                },
                orderBy: [
                    { satker: "asc" },
                    { last_updated: "desc" }
                ],
                include: {
                    intervensiObj: true
                }
            });
        }
        else {
            result = await database_1.client.programIntervensi.findMany({
                where: {
                    satker: input.satker,
                    tahun: input.tahun
                },
                include: {
                    intervensiObj: true
                }
            });
        }
        return result.map(el => (0, programintervensi_model_1.toProgranIntervensiResponse)(el));
    }
    static async getStats(input) {
        let result = [];
        if (input.satker) {
            result = await database_1.client.$queryRaw `SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM program_intervensi WHERE tahun = ${input.tahun} AND satker = ${input.satker}`;
        }
        else {
            result = await database_1.client.$queryRaw `SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM program_intervensi WHERE tahun = ${input.tahun}`;
        }
        let resultObj = result.at(0);
        if (!resultObj) {
            throw new response_error_1.ResponseError(404, "Not Found");
        }
        let statResult = {
            draft: Number.parseInt(resultObj.draft.toString()),
            submit: Number.parseInt(resultObj.submit.toString()),
            approve: Number.parseInt(resultObj.approve.toString())
        };
        return statResult;
    }
}
exports.ProgramIntervensiService = ProgramIntervensiService;
//# sourceMappingURL=programintervensi_service.js.map