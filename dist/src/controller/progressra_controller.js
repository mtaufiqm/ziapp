"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressRaController = void 0;
const validation_1 = require("../validation/validation");
const progressra_validation_1 = require("../validation/progressra_validation");
const response_error_1 = require("../error/response_error");
const progressra_service_1 = require("../service/progressra_service");
const pegawai_service_1 = require("../service/pegawai_service");
const role_helper_1 = require("../helper/role_helper");
const roles_model_1 = require("../model/roles_model");
const database_1 = require("../web/database");
class ProgressRaController {
    //POST
    static async createProgressRa(req, resp, next) {
        try {
            let jsonBody = req.body;
            let validatedObj = validation_1.Validation.validate(progressra_validation_1.ProgressRaValidation.CREATE, jsonBody);
            //========================== Authorization ================
            let data = await database_1.client.rencanaAksi.findFirst({
                where: {
                    uuid: validatedObj.ra
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "RA Not Found");
            }
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
            let result = await progressra_service_1.ProgressRaService.create(validatedObj);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    //GET
    static async getProgressByUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(400, "There is no uuid");
            }
            //========================== Authorization ================
            let data = await database_1.client.progressRencanaAksi.findFirst({
                where: {
                    uuid: uuid
                },
                include: {
                    raObj: true
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (data?.raObj.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await progressra_service_1.ProgressRaService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //DELETE
    static async deleteByUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "There is no Account");
            }
            //========================== Authorization ================
            let data = await database_1.client.progressRencanaAksi.findFirst({
                where: {
                    uuid: uuid
                },
                include: {
                    raObj: true
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (data.raObj.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            var result = await progressra_service_1.ProgressRaService.delete(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //DELETE
    static async deleteAllByRaUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "There is no Account");
            }
            //========================== Authorization ================
            let data = await database_1.client.rencanaAksi.findFirst({
                where: {
                    uuid: uuid
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
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
            var result = await progressra_service_1.ProgressRaService.deleteAllByRaUuuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //PATCH
    static async updateByUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "There is no Account");
            }
            //========================== Authorization ================
            let data = await database_1.client.progressRencanaAksi.findFirst({
                where: {
                    uuid: uuid
                },
                include: {
                    raObj: true
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (data.raObj.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            var jsonBody = req.body;
            var dataValidated = validation_1.Validation.validate(progressra_validation_1.ProgressRaValidation.UPDATE, jsonBody);
            var result = await progressra_service_1.ProgressRaService.updateByUuid(uuid, dataValidated);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //GET
    static async readProgressByRaUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(400, "There is no uuid");
            }
            //========================== Authorization ================
            let data = await database_1.client.rencanaAksi.findFirst({
                where: {
                    uuid: uuid
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
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
            let result = await progressra_service_1.ProgressRaService.readAllByRaUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.ProgressRaController = ProgressRaController;
//# sourceMappingURL=progressra_controller.js.map