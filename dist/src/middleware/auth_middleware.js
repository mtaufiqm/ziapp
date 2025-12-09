"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const database_1 = require("../web/database");
const hash_helper_1 = require("../helper/hash_helper");
const authMiddleware = async (req, resp, next) => {
    try {
        var authHeader = req.headers.authorization;
        if (authHeader) {
            var bearerToken = authHeader.trim().split(" ");
            var jwtToken = bearerToken[1];
            var verified = hash_helper_1.HashHelper.verify(jwtToken);
            if (!verified) {
                resp.sendStatus(401);
                return;
            }
            var username = verified.username;
            var roles = verified.roles;
            var isThereUser = await database_1.client.user.count({ where: {
                    username: username.trim()
                } });
            if (isThereUser != 1) {
                resp.sendStatus(401);
                return;
            }
            req.user = {
                username: username,
                roles: roles
            };
            next();
        }
        else {
            resp.sendStatus(401);
            return;
        }
    }
    catch (err) {
        next(err);
        return;
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth_middleware.js.map