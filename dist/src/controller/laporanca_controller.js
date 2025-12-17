"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaporanCaController = void 0;
const roles_model_1 = require("../model/roles_model");
const role_helper_1 = require("../helper/role_helper");
const pegawai_service_1 = require("../service/pegawai_service");
const response_error_1 = require("../error/response_error");
const laporanca_service_1 = require("../service/laporanca_service");
const laporanca_validation_1 = require("../validation/laporanca_validation");
const validation_1 = require("../validation/validation");
const database_1 = require("../web/database");
class LaporanCaController {
    static async readAll(req, resp, next) {
        try {
            //========================== Authorization ================
            let satkerQ = req.query.satker;
            let tahunQ = req.query.tahun;
            let isAll = false;
            let satker = "";
            let tahun = new Date().getFullYear();
            if (!tahunQ) {
                tahun = Number.parseInt(tahunQ);
            }
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (!satkerQ) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
                isAll = false;
                satker = userPegawai.satker;
            }
            else {
                if (!satkerQ) {
                    isAll = true;
                }
                else {
                    isAll = false;
                    satker = userPegawai.satker;
                }
            }
            //========================== Authorization ================
            let result = [];
            if (isAll) {
                result = await laporanca_service_1.LaporanCaService.readAllByTahun(tahun);
            }
            else {
                result = await laporanca_service_1.LaporanCaService.readAllBySatkerAndTahun(satker, tahun);
            }
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async create(req, resp, next) {
        try {
            let jsonBody = req.body;
            let data = validation_1.Validation.validate(laporanca_validation_1.LaporanCaValidation.CREATE, jsonBody);
            data.created_by = req.user.username;
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (data.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await laporanca_service_1.LaporanCaService.create(data);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async update(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "Empty UUID");
            }
            let jsonBody = req.body;
            let data = validation_1.Validation.validate(laporanca_validation_1.LaporanCaValidation.UPDATE, jsonBody);
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (data.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await laporanca_service_1.LaporanCaService.updateByUuid(uuid, data);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async deleteByUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "Empty UUID");
            }
            let data = await database_1.client.laporanCa.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (data.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await laporanca_service_1.LaporanCaService.deleteByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.LaporanCaController = LaporanCaController;
//# sourceMappingURL=laporanca_controller.js.map