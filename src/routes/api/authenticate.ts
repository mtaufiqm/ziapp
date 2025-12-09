import { Response, Request, NextFunction } from "express";
import { UserService } from "../../service/user_service";
import { UserLoginRequest } from "../../model/user_model";
import { JWTHelper } from "../../helper/jwt_helper";
import { UserValidation } from "../../validation/user_validation";
import { Validation } from "../../validation/validation";

export const authenticateApi = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
    try {   
        var jsonRequest = await req.body as UserLoginRequest;
        var data = Validation.validate(UserValidation.LOGIN, jsonRequest);
        var response = await UserService.login(jsonRequest);
        var token = await JWTHelper.create(response);
        resp.status(200).send({
            token:token
        });
        return;
    } catch(err) {
        next(err);
    }
}