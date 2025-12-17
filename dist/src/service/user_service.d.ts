import { UserCreateRequest, UserLoginRequest, UserResponse } from "../model/user_model";
export declare class UserService {
    static login(req: UserLoginRequest): Promise<UserResponse>;
    static create(req: UserCreateRequest): Promise<UserResponse>;
}
//# sourceMappingURL=user_service.d.ts.map