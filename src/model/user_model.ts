import { Request } from "express"
import { Roles, User } from "../../generated/prisma/client"

export interface UserRequest extends Request {
    user?: {
        username: string,
        roles?: string[]
    }
}

export type UserLoginRequest = {
    username: string;
    password: string;
}

export type UserResponse = {
    username: string;
    is_active: boolean;
    roles: string[];
}