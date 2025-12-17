import { Request } from "express"
import { Pegawai, Roles, User } from "../../generated/prisma/client"

export interface UserRequest extends Request {
    user?: {
        username: string,
        roles?: string[]
    };
};

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

export function toUserResponse(user: User, roles: Roles[]): UserResponse {
    return {
        username: user.username,
        is_active: user.is_active,
        roles: roles.map((el) => el.description)
    };
}