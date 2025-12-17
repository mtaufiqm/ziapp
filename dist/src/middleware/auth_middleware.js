"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const database_1 = require("../web/database");
const jwt_helper_1 = require("../helper/jwt_helper");
const authMiddleware = async (req, resp, next) => {
    try {
        let authHeader = req.headers.authorization;
        if (authHeader) {
            let bearerToken = authHeader.trim().split(" ");
            let jwtToken = bearerToken[1];
            let verified = jwt_helper_1.JWTHelper.verify(jwtToken);
            if (!verified) {
                resp.sendStatus(401);
                return;
            }
            let username = verified.username;
            let roles = verified.roles;
            let isThereUser = await database_1.client.user.count({ where: {
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