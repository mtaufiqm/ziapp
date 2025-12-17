import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class LaporanCaController {
    static readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static create(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static update(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=laporanca_controller.d.ts.map