"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DukunganRbController = void 0;
const dukunganrb_service_1 = require("../service/dukunganrb_service");
const roles_model_1 = require("../model/roles_model");
const response_error_1 = require("../error/response_error");
const role_helper_1 = require("../helper/role_helper");
const pegawai_service_1 = require("../service/pegawai_service");
class DukunganRbController {
    static async getAll(req, resp, next) {
        try {
            //========================== Authorization ================
            let user = req.user;
            let userPegawai = await pegawai_service_1.PegawaiService.getByUsername(user.username);
            if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$4 })) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            //========================== Authorization ================
            let result = await dukunganrb_service_1.DukunganRbService.getAll();
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.DukunganRbController = DukunganRbController;
//# sourceMappingURL=dukunganrb_controller.js.map