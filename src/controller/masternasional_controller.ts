import { NextFunction, Response } from "express";
import { CreateMasterNasional, MasterNasionalResponse, UpdateMasterNasional } from "../model/masternasional_model";
import { UserRequest } from "../model/user_model";
import { MasterNasionalService } from "../service/masternasional_service";
import { ResponseError } from "../error/response_error";
import { Validation } from "../validation/validation";
import { MasterNasionalValidation } from "../validation/masternasional_validation";
import { RolesSet } from "../model/roles_model";
import { PegawaiService } from "../service/pegawai_service";
import { RoleHelper } from "../helper/role_helper";
import z from "zod";

export class MasterNasionalController {
    static async create(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody = req.body as CreateMasterNasional;
            let data = Validation.validate(MasterNasionalValidation.CREATE,jsonBody);
            //========================== Authorization ================
            data.created_by = req.user!.username;
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================
            let result = await MasterNasionalService.createMaster(data);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async update(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(400,"Empty Uuid");
            }
            let jsonBody = req.body as UpdateMasterNasional;
            let data = Validation.validate(MasterNasionalValidation.UPDATE,jsonBody);
            //========================== Authorization ================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================
            let result = await MasterNasionalService.updateByUuid(uuid,data);
            resp.status(400).json(result);
            return;
        } catch(err) {
            next(err);
            return;
        }
    }

    static async delete(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(400,"Empty UUID");
            }
            //========================== Authorization ================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================
            let result = await MasterNasionalService.deleteMasterByUuid(uuid);
            resp.status(400).json(result);
        } catch(err){
            next(err);
            return;
        }
    }

    static async readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            let data = z.object({
                tahun: z.coerce.number().int().nonnegative().max(9999).optional()
            }).parse(req.query)
            let tahun = new Date().getFullYear();
            if(data.tahun){
                tahun = data.tahun;
            }
            //========================== Authorization ==================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$4})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ==================
            let result = await MasterNasionalService.readAllByTahun(tahun);
            resp.status(200).json(result);
        } catch(err){
            next(err);
            return;
        }
    }
}