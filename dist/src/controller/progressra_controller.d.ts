import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class ProgressRaController {
    static createProgressRa(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getProgressByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteAllByRaUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updateByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readProgressByRaUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=progressra_controller.d.ts.map