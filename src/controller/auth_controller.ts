import { NextFunction, Request, Response } from "express";
import { UserLoginRequest } from "../model/user_model";
import { Validation } from "../validation/validation";
import { UserService } from "../service/user_service";
import { JWTHelper } from "../helper/jwt_helper";
import { UserValidation } from "../validation/user_validation";

export class AuthController {
    static async login(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {   
            const jsonRequest = await req.body as UserLoginRequest;
            const data = Validation.validate(UserValidation.LOGIN, jsonRequest);
            const response = await UserService.login(jsonRequest);
            const token = await JWTHelper.create(response);
            resp.status(200).json({
                token:token
            });
            return;
        } catch(err) {
            next(err);
        }
    }
}