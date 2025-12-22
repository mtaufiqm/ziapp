"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterNasionalController = void 0;
const masternasional_service_1 = require("../service/masternasional_service");
const response_error_1 = require("../error/response_error");
const validation_1 = require("../validation/validation");
const masternasional_validation_1 = require("../validation/masternasional_validation");
const roles_model_1 = require("../model/roles_model");
const pegawai_service_1 = require("../service/pegawai_service");
const role_helper_1 = require("../helper/role_helper");
const zod_1 = __importDefault(require("zod"));
class MasterNasionalController {
    static async create(req, resp, next) {
        try {
            let jsonBody = req.body;
            let data = validation_1.Validation.validate(masternasional_validation_1.MasterNasionalValidation.CREATE, jsonBody);
            //========================== Authorization ================
            data.created_by = req.user.username;
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ================
            let result = await masternasional_service_1.MasterNasionalService.createMaster(data);
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
                throw new response_error_1.ResponseError(400, "Empty Uuid");
            }
            let jsonBody = req.body;
            let data = validation_1.Validation.validate(masternasional_validation_1.MasterNasionalValidation.UPDATE, jsonBody);
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ================
            let result = await masternasional_service_1.MasterNasionalService.updateByUuid(uuid, data);
            resp.status(400).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async delete(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(400, "Empty UUID");
            }
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ================
            let result = await masternasional_service_1.MasterNasionalService.deleteMasterByUuid(uuid);
            resp.status(200).json(result);
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async readAll(req, resp, next) {
        try {
            let data = zod_1.default.object({
                tahun: zod_1.default.coerce.number().int().nonnegative().max(9999).optional()
            }).parse(req.query);
            let tahun = new Date().getFullYear();
            if (data.tahun) {
                tahun = data.tahun;
            }
            //========================== Authorization ==================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ==================
            let result = await masternasional_service_1.MasterNasionalService.readAllByTahun(tahun);
            resp.status(200).json(result);
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.MasterNasionalController = MasterNasionalController;
//# sourceMappingURL=masternasional_controller.js.map