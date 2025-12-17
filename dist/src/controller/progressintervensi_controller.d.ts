import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class ProgressIntervensiController {
    static createProgressIntervensi(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getProgressByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteAllByIntervensiUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updateByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readProgressByIntervensiUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=progressintervensi_controller.d.ts.map