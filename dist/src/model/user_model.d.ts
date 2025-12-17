import { Request } from "express";
import { Roles, User } from "../../generated/prisma/client";
export interface UserRequest extends Request {
    user?: {
        username: string;
        roles?: string[];
    };
}
export type UserLoginRequest = {
    username: string;
    password: string;
};
export type UserCreateRequest = {
    username: string;
    password: string;
    roles?: string[];
};
export type UserResponse = {
    username: string;
    is_active: boolean;
    roles: string[];
};
export declare function toUserResponse(user: User, roles: Roles[]): UserResponse;
//# sourceMappingURL=user_model.d.ts.map