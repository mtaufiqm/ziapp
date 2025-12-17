"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const validation_1 = require("../validation/validation");
const user_service_1 = require("../service/user_service");
const jwt_helper_1 = require("../helper/jwt_helper");
const user_validation_1 = require("../validation/user_validation");
class AuthController {
    static async login(req, resp, next) {
        try {
            const jsonRequest = await req.body;
            const data = validation_1.Validation.validate(user_validation_1.UserValidation.LOGIN, jsonRequest);
            const response = await user_service_1.UserService.login(jsonRequest);
            const token = await jwt_helper_1.JWTHelper.create(response);
            resp.status(200).json({
                token: token
            });
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth_controller.js.map