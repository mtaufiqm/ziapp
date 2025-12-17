"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RencanaAksiController = void 0;
const rencanaaksi_service_1 = require("../service/rencanaaksi_service");
const response_error_1 = require("../error/response_error");
const validation_1 = require("../validation/validation");
const rencanaaksi_validation_1 = require("../validation/rencanaaksi_validation");
const pegawai_service_1 = require("../service/pegawai_service");
const role_helper_1 = require("../helper/role_helper");
const roles_model_1 = require("../model/roles_model");
const zod_1 = __importDefault(require("zod"));
class RencanaAksiController {
    static async create(req, resp, next) {
        try {
            let jsonBody = req.body;
            let data = validation_1.Validation.validate(rencanaaksi_validation_1.RencanaAksiValidation.CREATE, jsonBody);
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
            let result = await rencanaaksi_service_1.RencanaAksiService.create(data);
            resp.status(200).json(result);
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async getByUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "Empty UUID");
            }
            let result = await rencanaaksi_service_1.RencanaAksiService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async readAll(req, resp, next) {
        try {
            let queryData = zod_1.default.object({
                tahun: zod_1.default.coerce.number().int().optional()
            }).parse(req.query);
            //========================== Authorization
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //============================ Authorization
            let result = await rencanaaksi_service_1.RencanaAksiService.readAll({ tahun: queryData.tahun });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async readAllBySatkerAndTahun(req, resp, next) {
        try {
            let queryData = zod_1.default.object({
                satker: zod_1.default.coerce.string().max(9999),
                tahun: zod_1.default.coerce.number().int().max(9999)
            }).parse(req.query);
            let satker = queryData.satker;
            let tahun = queryData.tahun;
            //========================== Authorization
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //============================ Authorization
            let result = await rencanaaksi_service_1.RencanaAksiService.readAllBySatkerAndTahun(satker, tahun);
            resp.status(200).json(result);
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
                throw new response_error_1.ResponseError(404, "Empty Uuid");
            }
            //========================== Authorization
            let data = await rencanaaksi_service_1.RencanaAksiService.getByUuid(uuid);
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
            //============================ Authorization
            let result = await rencanaaksi_service_1.RencanaAksiService.delete(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //PATCH
    static async update(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "Empty Uuid");
            }
            let jsonBody = req.body;
            let data = validation_1.Validation.validate(rencanaaksi_validation_1.RencanaAksiValidation.UPDATE, jsonBody);
            //========================== Authorization
            let oldData = await rencanaaksi_service_1.RencanaAksiService.getByUuid(uuid);
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (oldData.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //============================ Authorization
            if ((!data.status) && (data.status !== oldData.status)) {
                //0: DRAFT, 1: SUBMIT, 2: SUBMITTED
                if (data.status < oldData.status) {
                    //cannot update to previous status
                    throw new response_error_1.ResponseError(403, "Cannot Update to Previous Status");
                }
                //update to approved
                if (data.status === 2) {
                    if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$5 })) {
                        throw new response_error_1.ResponseError(403, "Unauthorized");
                    }
                }
                //from 0: draft to 2: approved, not allowed
                if ((data.status - oldData.status) > 1) {
                    throw new response_error_1.ResponseError(403, "");
                }
            }
            let result = await rencanaaksi_service_1.RencanaAksiService.updateByUuid(uuid, data);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
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
                if (satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
                satker = userPegawai.satker;
            }
            //============================ Authorization
            let result = await rencanaaksi_service_1.RencanaAksiService.getStats({ satker: satker });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.RencanaAksiController = RencanaAksiController;
//# sourceMappingURL=rencanaaksi_controller.js.map