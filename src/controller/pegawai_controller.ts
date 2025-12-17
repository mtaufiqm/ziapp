import { NextFunction, Response } from "express";
import { CreatePegawaiRequest, UpdatePegawaiRequest } from "../model/pegawai_model";
import { UserRequest } from "../model/user_model";
import { PegawaiService } from "../service/pegawai_service";
import { ResponseError } from "../error/response_error";
import { client } from "../web/database";
import { Validation } from "../validation/validation";
import { PegawaiValidation } from "../validation/pegawai_validation";
import { RoleHelper } from "../helper/role_helper";
import { RolesSet } from "../model/roles_model";

export class PegawaiController {

    //POST
    static async createPegawai(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody = req.body as CreatePegawaiRequest;
            let validatedObj = Validation.validate(PegawaiValidation.CREATE,jsonBody);
            // console.info("Validate Obj "+ JSON.stringify(validatedObj));
            //========================== Authorization ================
            let user = req.user!;
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================
            let result = await PegawaiService.create(validatedObj);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    //GET
    static async getPegawaiByUsername(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let username = req.params.username;
            if(!username){
                throw new ResponseError(400,"There is no Username");
            }
            //========================== Authorization ================
            let user = req.user!;
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(username !== user.username){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await PegawaiService.getByUsername(username);
            resp.json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //DELETE
    static async deleteByUsername(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let username = req.params.username;
            if(!username){
                throw new ResponseError(404,"There is no Account");
            }
            //========================== Authorization ================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================
            var result = await PegawaiService.deleteByUsername(username);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //PATCH
    static async updateByUsername(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let username = req.params.username;
            if(!username){
                throw new ResponseError(404,"There is no Account");
            }
            var jsonBody = req.body as UpdatePegawaiRequest;
            var dataValidated = Validation.validate(PegawaiValidation.UPDATE,jsonBody);
            //========================== Authorization ================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(username !== user.username){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            var result = await PegawaiService.updateByUsername(username, dataValidated);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}