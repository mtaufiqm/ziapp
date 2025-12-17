"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PegawaiController = void 0;
const pegawai_service_1 = require("../service/pegawai_service");
const response_error_1 = require("../error/response_error");
const validation_1 = require("../validation/validation");
const pegawai_validation_1 = require("../validation/pegawai_validation");
const role_helper_1 = require("../helper/role_helper");
const roles_model_1 = require("../model/roles_model");
class PegawaiController {
    //POST
    static async createPegawai(req, resp, next) {
        try {
            let jsonBody = req.body;
            let validatedObj = validation_1.Validation.validate(pegawai_validation_1.PegawaiValidation.CREATE, jsonBody);
            // console.info("Validate Obj "+ JSON.stringify(validatedObj));
            //========================== Authorization ================
            let user = req.user;
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ================
            let result = await pegawai_service_1.PegawaiService.create(validatedObj);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    //GET
    static async getPegawaiByUsername(req, resp, next) {
        try {
            let username = req.params.username;
            if (!username) {
                throw new response_error_1.ResponseError(400, "There is no Username");
            }
            //========================== Authorization ================
            let user = req.user;
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (username !== user.username) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await pegawai_service_1.PegawaiService.getByUsername(username);
            resp.json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //DELETE
    static async deleteByUsername(req, resp, next) {
        try {
            let username = req.params.username;
            if (!username) {
                throw new response_error_1.ResponseError(404, "There is no Account");
            }
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ================
            var result = await pegawai_service_1.PegawaiService.deleteByUsername(username);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    //PATCH
    static async updateByUsername(req, resp, next) {
        try {
            let username = req.params.username;
            if (!username) {
                throw new response_error_1.ResponseError(404, "There is no Account");
            }
            var jsonBody = req.body;
            var dataValidated = validation_1.Validation.validate(pegawai_validation_1.PegawaiValidation.UPDATE, jsonBody);
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (role_helper_1.RoleHelper.isContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$6 })) {
                if (username !== user.username) {
                    throw new response_error_1.ResponseError(403, "Forbidden");
                }
            }
            //========================== Authorization ================
            var result = await pegawai_service_1.PegawaiService.updateByUsername(username, dataValidated);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.PegawaiController = PegawaiController;
//# sourceMappingURL=pegawai_controller.js.map