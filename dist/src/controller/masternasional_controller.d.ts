import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class MasterNasionalController {
    static create(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static update(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static delete(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=masternasional_controller.d.ts.map