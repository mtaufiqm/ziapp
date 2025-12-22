"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsController = void 0;
const zod_1 = __importDefault(require("zod"));
const pegawai_service_1 = require("../service/pegawai_service");
const role_helper_1 = require("../helper/role_helper");
const roles_model_1 = require("../model/roles_model");
const response_error_1 = require("../error/response_error");
const rencanaaksi_service_1 = require("../service/rencanaaksi_service");
const programintervensi_service_1 = require("../service/programintervensi_service");
class StatsController {
    static async getStats(req, resp, next) {
        try {
            let data = zod_1.default.object({
                "satker": zod_1.default.coerce.string().length(4).optional()
            }).parse(req.query);
            let satker = data.satker;
            //========================== Authorization
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (!userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
                satker = userPegawai.satker;
            }
            //============================ Authorization
            let currentYear = (new Date()).getFullYear();
            let result = await rencanaaksi_service_1.RencanaAksiService.getStats({ satker: satker, tahun: currentYear });
            let result2 = await programintervensi_service_1.ProgramIntervensiService.getStats({ satker: satker, tahun: currentYear });
            let total = {
                draft: result.draft + result2.draft,
                submit: result.submit + result2.submit,
                approve: result.approve + result2.approve
            };
            resp.status(200).json(total);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async getKabKotStats(req, resp, next) {
        try {
            let data = zod_1.default.object({
                "satker": zod_1.default.coerce.string().length(4).optional()
            }).parse(req.query);
            let satker = data.satker;
            //========================== Authorization
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (!userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
                satker = userPegawai.satker;
            }
            //============================ Authorization
            let currentYear = (new Date()).getFullYear();
            let result = await rencanaaksi_service_1.RencanaAksiService.getKabKotStats({ satker: satker, tahun: currentYear });
            let result2 = await programintervensi_service_1.ProgramIntervensiService.getKabKotStats({ satker: satker, tahun: currentYear });
            let returnValue = [];
            let satkerDone = [];
            for (let item of result) {
                for (let item2 of result2) {
                    if (item.satker === item2.satker) {
                        returnValue.push({
                            satker: item2.satker,
                            draft: item.draft + item2.draft,
                            submit: item.submit + item2.submit,
                            approve: item.approve + item2.approve,
                            total: item.draft + item2.draft + item.submit + item2.submit + item.approve + item2.approve
                        });
                        satkerDone.push(item2.satker);
                        break;
                    }
                    continue;
                }
            }
            for (let item of result) {
                if (!satkerDone.includes(item.satker)) {
                    returnValue.push(item);
                    satkerDone.push(item.satker);
                }
            }
            for (let item of result2) {
                if (!satkerDone.includes(item.satker)) {
                    returnValue.push(item);
                    satkerDone.push(item.satker);
                }
            }
            resp.status(200).json(returnValue);
            return;
        }
        catch (err) {
            console.info(`Error ${err}`);
            next(err);
            return;
        }
    }
}
exports.StatsController = StatsController;
//# sourceMappingURL=stats_controller.js.map