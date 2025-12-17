"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
class UserValidation {
    static LOGIN = zod_1.z.object({
        username: zod_1.z.coerce.string().min(6).max(50),
        password: zod_1.z.coerce.string().min(6).max(50)
    });
    static CREATE = zod_1.z.object({
        username: zod_1.z.coerce.string().min(6).max(50),
        password: zod_1.z.coerce.string().min(6).max(50),
        roles: zod_1.z.array(zod_1.z.string()).optional()
    });
    static UPDATE = zod_1.z.object({
        username: zod_1.z.coerce.string().min(6).max(50).optional(),
        password: zod_1.z.coerce.string().min(6).max(50).optional(),
    });
}
exports.UserValidation = UserValidation;
//# sourceMappingURL=user_validation.js.map