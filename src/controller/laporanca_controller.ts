import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { RolesSet } from "../model/roles_model";
import { RoleHelper } from "../helper/role_helper";
import { PegawaiService } from "../service/pegawai_service";
import { ResponseError } from "../error/response_error";
import { CreateLaporanCa, LaporanCaResponse, UpdateLaporanCa } from "../model/laporanca_model";
import { LaporanCaService } from "../service/laporanca_service";
import { LaporanCaValidation } from "../validation/laporanca_validation";
import { Validation } from "../validation/validation";
import { client } from "../web/database";


export class LaporanCaController {
    static async readAll(req: UserRequest, resp: Response, next: NextFunction){
        try {
            //========================== Authorization ================
            let satkerQ = req.query.satker as string | undefined;
            let tahunQ = req.query.tahun as string | undefined;
            let isAll: boolean = false;
            let satker: string = "";
            let tahun: number = new Date().getFullYear();
            if(!tahunQ){
                tahun = Number.parseInt(tahunQ!);
            }
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            if(RoleHelper.isContainOne({roles:user.roles,required: RolesSet.$6})){
                if(!satkerQ){
                    throw new ResponseError(403,"Forbidden");
                }
                isAll = false;
                satker = userPegawai.satker!;
            } else {
                if(!satkerQ){
                    isAll = true;
                } else {
                    isAll = false;
                    satker = userPegawai.satker!;
                }
            }
            //========================== Authorization ================
            let result: LaporanCaResponse[] = []; 
            if(isAll){
                result = await LaporanCaService.readAllByTahun(tahun);
            } else {
                result = await LaporanCaService.readAllBySatkerAndTahun(satker,tahun);
            }
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async create(req: UserRequest, resp: Response, next: NextFunction){
        try {
            let jsonBody = req.body as CreateLaporanCa;
            let data = Validation.validate(LaporanCaValidation.CREATE,jsonBody); 
            data.created_by = req.user!.username;
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
            let result = await LaporanCaService.create(data);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async update(req: UserRequest, resp: Response, next: NextFunction){
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"Empty UUID");
            }
            let jsonBody = req.body as UpdateLaporanCa;
            let data = Validation.validate(LaporanCaValidation.UPDATE,jsonBody); 
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
            let result = await LaporanCaService.updateByUuid(uuid, data);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async deleteByUuid(req: UserRequest, resp: Response, next: NextFunction){
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"Empty UUID");
            }
            let data = await client.laporanCa.findUnique({
                where:{
                    uuid: uuid
                }
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
            let result = await LaporanCaService.deleteByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}