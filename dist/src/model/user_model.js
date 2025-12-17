"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserResponse = toUserResponse;
;
function toUserResponse(user, roles) {
    return {
        username: user.username,
        is_active: user.is_active,
        roles: roles.map((el) => el.description)
    };
}
//# sourceMappingURL=user_model.js.map