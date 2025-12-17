import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";

 

 export class AppVersionController {
    static async getVersion(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        resp.status(200).json({
            appVersion: "1.0.0",
            user: req.user
        });
        return;
    }
 }