import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class PegawaiController {
    static createPegawai(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getPegawaiByUsername(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteByUsername(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updateByUsername(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=pegawai_controller.d.ts.map