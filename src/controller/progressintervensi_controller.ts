import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { CreateProgressIntervensi, UpdateProgressIntervensi } from "../model/progressintervensi_model";
import { ProgressIntervensiValidation } from "../validation/progressintervensi_validation";
import { Validation } from "../validation/validation";
import { PegawaiService } from "../service/pegawai_service";
import { RoleHelper } from "../helper/role_helper";
import { RolesSet } from "../model/roles_model";
import { ResponseError } from "../error/response_error";
import { client } from "../web/database";
import { ProgressIntervensiService } from "../service/progressintervensi_service";
import { uuid } from "zod";


export class ProgressIntervensiController {
        
    //POST
    static async createProgressIntervensi(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody = req.body as CreateProgressIntervensi;
            let validatedObj = Validation.validate(ProgressIntervensiValidation.CREATE,jsonBody);
            //========================== Authorization ================
            validatedObj.created_by = req.user!.username;
            let data = await client.programIntervensi.findFirst({
                where:{
                    uuid: validatedObj.ra
                }
            });
            if(!data){
                throw new ResponseError(404,"Progress Intervensi Not Found");
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
            let result = await ProgressIntervensiService.create(validatedObj);
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
            let data = await client.progressRaIntervensi.findFirst({
                where:{
                    uuid:uuid
                },
                include:{
                    rancananAksi: true
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
                if(data?.rancananAksi.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            let result = await ProgressIntervensiService.getByUuid(uuid);
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
            let data = await client.progressRaIntervensi.findFirst({
                where:{
                    uuid:uuid
                },
                include:{
                    rancananAksi: true
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
                if(data.rancananAksi.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================

            var result = await ProgressIntervensiService.delete(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //DELETE
    static async deleteAllByIntervensiUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"There is no Account");
            }
            //========================== Authorization ================
            let data = await client.programIntervensi.findFirst({
                where:{
                    uuid: uuid
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

            var result = await ProgressIntervensiService.deleteAllByRaUuuid(uuid);
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
            let data = await client.progressRaIntervensi.findFirst({
                where:{
                    uuid:uuid
                },
                include:{
                    rancananAksi: true
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
                if(data.rancananAksi.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //========================== Authorization ================
            var jsonBody = req.body as UpdateProgressIntervensi;
            var dataValidated = Validation.validate(ProgressIntervensiValidation.UPDATE,jsonBody);
            var result = await ProgressIntervensiService.updateByUuid(uuid, dataValidated);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //GET
    static async readProgressByIntervensiUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(400,"There is no uuid");
            }
            //========================== Authorization ================
            let data = await client.programIntervensi.findFirst({
                where:{
                    uuid:uuid
                }
            });
            if(!data){
                throw new ResponseError(404,"Program Intervensi Not Found");
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
            let result = await ProgressIntervensiService.readAllByIntervensiUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}