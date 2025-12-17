import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { client } from "../web/database";
import { DukunganRbService } from "../service/dukunganrb_service";
import { RolesSet } from "../model/roles_model";
import { ResponseError } from "../error/response_error";
import { RoleHelper } from "../helper/role_helper";
import { PegawaiService } from "../service/pegawai_service";


export class DukunganRbController {

    static async getAll(req: UserRequest, resp: Response, next: NextFunction) {
        try {
            //========================== Authorization ================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================
            let result = await DukunganRbService.getAll();
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}