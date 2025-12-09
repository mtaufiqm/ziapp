import { Request } from "express";
export interface UserRequest extends Request {
    user?: {
        username: string;
        roles?: string[];
    };
}
//# sourceMappingURL=user_model.d.ts.map