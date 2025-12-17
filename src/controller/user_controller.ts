import { NextFunction, Response } from "express";
import { UserCreateRequest, UserRequest } from "../model/user_model";
import { UserService } from "../service/user_service";
import { Validation } from "../validation/validation";
import { UserValidation } from "../validation/user_validation";

export class UserController {


    static async create(req: UserRequest, resp: Response, next: NextFunction) {
        try {
            let jsonBody = req.body as UserCreateRequest;
            let dataValidated = Validation.validate(UserValidation.CREATE, jsonBody);
            let result = await UserService.create(dataValidated);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}