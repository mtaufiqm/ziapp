import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { CreateProgramIntervensi, ProgramIntervensiResponse, UpdateProgramIntervensi } from "../model/programintervensi_model";
import { Validation } from "../validation/validation";
import { ProgramIntervensiValidation } from "../validation/program_intervensi";
import { PegawaiService } from "../service/pegawai_service";
import { RoleHelper } from "../helper/role_helper";
import { RolesSet } from "../model/roles_model";
import { ProgramIntervensiService } from "../service/programintervensi_service";
import { ResponseError } from "../error/response_error";
import z from "zod";
import { client } from "../web/database";



export class ProgramIntervensiController {

    static async create(req:UserRequest, resp:Response, next: NextFunction) {
        try {
            let jsonBody = req.body as CreateProgramIntervensi;
            let data = Validation.validate(ProgramIntervensiValidation.CREATE, jsonBody);
            data.created_by = req.user!.username
            //========================== Authorization ================
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
            let result = await ProgramIntervensiService.create(data);
            resp.status(200).json(result);
        } catch(err){
            next(err);
            return;
        }
    }

    static async getByUuid(req:UserRequest, resp:Response, next: NextFunction) {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"Empty UUID");
            }
            let data = await client.programIntervensi.findUnique({
                where: {
                    uuid: uuid
                },
            });
            if(!data){
                throw new ResponseError(404,"Not Found");
            }
            //========================== Authorization ================
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
            let result = await ProgramIntervensiService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }


    static async readAllBySatkerAndTahun(req:UserRequest, resp:Response, next: NextFunction) {
        try {
            let queryData = z.object({
                tahun: z.coerce.number().int(),
                satker: z.coerce.string().length(4).optional()
            }).parse(req.query);
            //========================== Authorization
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(!queryData.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //============================ Authorization
            let result: ProgramIntervensiResponse[] = await ProgramIntervensiService.readAllBySatkerAndTahun({
                satker: queryData.satker,
                tahun: queryData.tahun
            })
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async delete(req:UserRequest, resp:Response, next: NextFunction) {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"Empty Uuid");
            }
            //========================== Authorization
            let data: {satker: string} = await ProgramIntervensiService.getByUuid(uuid);
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
            //============================ Authorization
            let result = await ProgramIntervensiService.deleteByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    //PATCH
    static async update(req:UserRequest, resp: Response, next: NextFunction) {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"Empty Uuid");
            }
            let jsonBody = req.body as UpdateProgramIntervensi;
            let data = Validation.validate(ProgramIntervensiValidation.UPDATE,jsonBody);
            //========================== Authorization
            let oldData = await ProgramIntervensiService.getByUuid(uuid);
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(oldData.satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //============================ Authorization

            if((data.status !== undefined) && (data.status !== oldData.status)){
                //0: DRAFT, 1: SUBMIT, 2: SUBMITTED
                if(data.status! < oldData.status){
                    //cannot update to previous status
                    throw new ResponseError(403,"Cannot Update to Previous Status");
                }
                //update to approved
                if(data.status! === 2){
                    if(RoleHelper.isNotContainOne({roles:user.roles,required: RolesSet.$5})){
                        throw new ResponseError(403,"Forbidden");
                    }
                }
                //from 0: draft to 2: approved, not allowed
                if((data.status! - oldData.status) > 1){
                    throw new ResponseError(403,"Forbidden");
                }
            }

            let result = await ProgramIntervensiService.updateByUuid(uuid, data);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async getStats(req:UserRequest, resp:Response, next: NextFunction) {
        try {
            let data = z.object({
                "satker":z.coerce.string().length(4).optional().optional(),
                "tahun":z.coerce.number().int().nonnegative().max(9999)
            }).parse(req.query);
            //========================== Authorization
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(!data.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //============================ Authorization
            let result = await ProgramIntervensiService.getStats({satker:data.satker,tahun: data.tahun});
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}