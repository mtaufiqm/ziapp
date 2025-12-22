import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class StatsController {
    static getStats(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getKabKotStats(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=stats_controller.d.ts.map