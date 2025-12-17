"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user_service");
const validation_1 = require("../validation/validation");
const user_validation_1 = require("../validation/user_validation");
class UserController {
    static async create(req, resp, next) {
        try {
            let jsonBody = req.body;
            let dataValidated = validation_1.Validation.validate(user_validation_1.UserValidation.CREATE, jsonBody);
            let result = await user_service_1.UserService.create(dataValidated);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user_controller.js.map