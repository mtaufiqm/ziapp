import { NextFunction, Request, Response } from "express";
import { UserRequest } from "../model/user_model";



export async function appVersion(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
    resp.status(200).send({
        appVersion: "1.0.0",
        user: req.user
    });
}