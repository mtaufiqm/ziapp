"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const response_error_1 = require("../error/response_error");
const hash_helper_1 = require("../helper/hash_helper");
const user_model_1 = require("../model/user_model");
const database_1 = require("../web/database");
class UserService {
    static async login(req) {
        try {
            let username = req.username;
            let password = req.password;
            let user = await database_1.client.user.findFirst({
                where: { username: username },
                include: {
                    roles: true
                }
            });
            if (!user) {
                throw new response_error_1.ResponseError(401, `Invalid Username/Password`);
            }
            if (user.pwd !== await hash_helper_1.HashHelper.hash(password)) {
                throw new response_error_1.ResponseError(401, "Invalid Username/Password");
            }
            return {
                username: user.username,
                is_active: user.is_active,
                roles: user.roles.map((el) => el.description)
            };
        }
        catch (err) {
            console.info(`Error ${err}`);
            throw new response_error_1.ResponseError(401, "UnAuthorized");
        }
    }
    static async create(req) {
        var username = req.username;
        var pwd = req.password;
        var roles = req.roles ?? [];
        var hashedPwd = await hash_helper_1.HashHelper.hash(pwd);
        var result = await database_1.client.user.create({
            data: {
                username: username,
                pwd: hashedPwd,
                is_active: true,
                roles: {
                    create: roles.map((el) => ({
                        description: el
                    })),
                }
            },
        });
        var listRole = await database_1.client.roles.findMany({
            where: {
                user: {
                    some: {
                        username: username
                    }
                }
            }
        });
        console.info(`List Role ${listRole.map((el) => el.description)}`);
        return (0, user_model_1.toUserResponse)(result, listRole);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user_service.js.map