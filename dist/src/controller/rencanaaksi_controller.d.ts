import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class RencanaAksiController {
    static create(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAllBySatkerAndTahun(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static delete(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static update(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getStats(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=rencanaaksi_controller.d.ts.map