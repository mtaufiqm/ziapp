import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { CreateRencanaAksi, UpdateRencanaAksi } from "../model/rencanaaksi_model";
import { RencanaAksiService } from "../service/rencanaaksi_service";
import { ResponseError } from "../error/response_error";
import { Validation } from "../validation/validation";
import { RencanaAksiValidation } from "../validation/rencanaaksi_validation";
import { PegawaiService } from "../service/pegawai_service";
import { RoleHelper } from "../helper/role_helper";
import { RolesSet } from "../model/roles_model";
import z from "zod";


export class RencanaAksiController {
    static async create(req:UserRequest, resp:Response, next: NextFunction) {
        try {
            let jsonBody = req.body as CreateRencanaAksi;
            let data = Validation.validate(RencanaAksiValidation.CREATE, jsonBody);
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
            let result = await RencanaAksiService.create(data);
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
            let result = await RencanaAksiService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }


    static async readAll(req:UserRequest, resp:Response, next: NextFunction) {
        try {
            let queryData = z.object({
                tahun: z.coerce.number().int().optional()
            }).parse(req.query);
            //========================== Authorization
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
                throw new ResponseError(403,"Forbidden");
            }
            //============================ Authorization
            let result = await RencanaAksiService.readAll({tahun: queryData.tahun});
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
                satker: z.coerce.string().max(9999),
                tahun: z.coerce.number().int().max(9999)
            }).parse(req.query);
            let satker = queryData.satker;
            let tahun = queryData.tahun;
            //========================== Authorization
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(satker !== userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
            }
            //============================ Authorization
            let result = await RencanaAksiService.readAllBySatkerAndTahun(satker,tahun);
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
            let data: {satker: string} = await RencanaAksiService.getByUuid(uuid);
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
            let result = await RencanaAksiService.delete(uuid);
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
            let jsonBody = req.body as UpdateRencanaAksi;
            let data = Validation.validate(RencanaAksiValidation.UPDATE,jsonBody);
            //========================== Authorization
            let oldData = await RencanaAksiService.getByUuid(uuid);
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
                        throw new ResponseError(403,"Unauthorized");
                    }
                }
                //from 0: draft to 2: approved, not allowed
                if((data.status! - oldData.status) > 1){
                    throw new ResponseError(403,"");
                }
            }

            let result = await RencanaAksiService.updateByUuid(uuid, data);
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
                "satker":z.coerce.string().length(4).optional()
            }).parse(req.query);
            let satker = data.satker;
            //========================== Authorization
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(!userPegawai.satker){
                    throw new ResponseError(403,"Forbidden");
                }
                satker = userPegawai.satker;
            }
            //============================ Authorization
            let currentYear: number = (new Date()).getFullYear();
            let result = await RencanaAksiService.getStats({satker:satker,tahun:currentYear});
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

}

