"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressIntervensiController = void 0;
const progressintervensi_validation_1 = require("../validation/progressintervensi_validation");
const validation_1 = require("../validation/validation");
const pegawai_service_1 = require("../service/pegawai_service");
const role_helper_1 = require("../helper/role_helper");
const roles_model_1 = require("../model/roles_model");
const response_error_1 = require("../error/response_error");
const database_1 = require("../web/database");
const progressintervensi_service_1 = require("../service/progressintervensi_service");
class ProgressIntervensiController {
    //POST
    static async createProgressIntervensi(req, resp, next) {
        try {
            let jsonBody = req.body;
            let validatedObj = validation_1.Validation.validate(progressintervensi_validation_1.ProgressIntervensiValidation.CREATE, jsonBody);
            //========================== Authorization ================
            validatedObj.created_by = req.user.username;
            let data = await database_1.client.programIntervensi.findFirst({
                where: {
                    uuid: validatedObj.ra
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Progress Intervensi Not Found");
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
            let result = await progressintervensi_service_1.ProgressIntervensiService.create(validatedObj);
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
            let data = await database_1.client.progressRaIntervensi.findFirst({
                where: {
                    uuid: uuid
                },
                include: {
                    rancananAksi: true
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
                if (data?.rancananAksi.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await progressintervensi_service_1.ProgressIntervensiService.getByUuid(uuid);
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
            let data = await database_1.client.progressRaIntervensi.findFirst({
                where: {
                    uuid: uuid
                },
                include: {
                    rancananAksi: true
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
                if (data.rancananAksi.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            var result = await progressintervensi_service_1.ProgressIntervensiService.delete(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //DELETE
    static async deleteAllByIntervensiUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(404, "There is no Account");
            }
            //========================== Authorization ================
            let data = await database_1.client.programIntervensi.findFirst({
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
            var result = await progressintervensi_service_1.ProgressIntervensiService.deleteAllByRaUuuid(uuid);
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
            let data = await database_1.client.progressRaIntervensi.findFirst({
                where: {
                    uuid: uuid
                },
                include: {
                    rancananAksi: true
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
                if (data.rancananAksi.satker !== userPegawai.satker) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            var jsonBody = req.body;
            var dataValidated = validation_1.Validation.validate(progressintervensi_validation_1.ProgressIntervensiValidation.UPDATE, jsonBody);
            var result = await progressintervensi_service_1.ProgressIntervensiService.updateByUuid(uuid, dataValidated);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //GET
    static async readProgressByIntervensiUuid(req, resp, next) {
        try {
            let uuid = req.params.uuid;
            if (!uuid) {
                throw new response_error_1.ResponseError(400, "There is no uuid");
            }
            //========================== Authorization ================
            let data = await database_1.client.programIntervensi.findFirst({
                where: {
                    uuid: uuid
                }
            });
            if (!data) {
                throw new response_error_1.ResponseError(404, "Program Intervensi Not Found");
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
            let result = await progressintervensi_service_1.ProgressIntervensiService.readAllByIntervensiUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.ProgressIntervensiController = ProgressIntervensiController;
//# sourceMappingURL=progressintervensi_controller.js.map