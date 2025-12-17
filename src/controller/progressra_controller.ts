import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { CreateProgressRaRequest, UpdateProgressRaRequest } from "../model/progressra_model";
import { Validation } from "../validation/validation";
import { ProgressRaValidation } from "../validation/progressra_validation";
import { ResponseError } from "../error/response_error";
import { ProgressRaService } from "../service/progressra_service";
import { PegawaiService } from "../service/pegawai_service";
import { RoleHelper } from "../helper/role_helper";
import { RolesSet } from "../model/roles_model";
import { client } from "../web/database";


export class ProgressRaController {
    
    //POST
    static async createProgressRa(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody = req.body as CreateProgressRaRequest;
            let validatedObj = Validation.validate(ProgressRaValidation.CREATE,jsonBody);
            //========================== Authorization ================
            validatedObj.created_by = req.user!.username;
            let data = await client.rencanaAksi.findFirst({
                where:{
                    uuid: validatedObj.ra
                }
            });
            if(!data){
                throw new ResponseError(404,"RA Not Found");
            }
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(data.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await ProgressRaService.create(validatedObj);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    //GET
    static async getProgressByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(400,"There is no uuid");
            }
            //========================== Authorization ================
            let data = await client.progressRencanaAksi.findFirst({
                where:{
                    uuid:uuid
                },
                include:{
                    raObj:true
                }
            });
            if(!data){
                throw new ResponseError(404,"Not Found");
            }
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(data?.raObj.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await ProgressRaService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //DELETE
    static async deleteByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"There is no Account");
            }
            //========================== Authorization ================
            let data = await client.progressRencanaAksi.findFirst({
                where:{
                    uuid:uuid
                },
                include:{
                    raObj:true
                }
            });
            if(!data){
                throw new ResponseError(404,"Not Found");
            }
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(data.raObj.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            var result = await ProgressRaService.delete(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    
    //DELETE
    static async deleteAllByRaUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"There is no Account");
            }
            //========================== Authorization ================
            let data = await client.rencanaAksi.findFirst({
                where:{
                    uuid:uuid
                }
            });
            if(!data){
                throw new ResponseError(404,"Not Found");
            }
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(data.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================

            var result = await ProgressRaService.deleteAllByRaUuuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //PATCH
    static async updateByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"There is no Account");
            }
            //========================== Authorization ================
            let data = await client.progressRencanaAksi.findFirst({
                where:{
                    uuid:uuid
                },
                include:{
                    raObj:true
                }
            });
            if(!data){
                throw new ResponseError(404,"Not Found");
            }
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(data.raObj.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            var jsonBody = req.body as UpdateProgressRaRequest;
            var dataValidated = Validation.validate(ProgressRaValidation.UPDATE,jsonBody);
            var result = await ProgressRaService.updateByUuid(uuid, dataValidated);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //GET
    static async readProgressByRaUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(400,"There is no uuid");
            }
            //========================== Authorization ================
            let data = await client.rencanaAksi.findFirst({
                where:{
                    uuid:uuid
                }
            });
            if(!data){
                throw new ResponseError(404,"Not Found");
            }
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(data.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await ProgressRaService.readAllByRaUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}