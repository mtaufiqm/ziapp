import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import z from "zod";
import { PegawaiService } from "../service/pegawai_service";
import { RoleHelper } from "../helper/role_helper";
import { RolesSet } from "../model/roles_model";
import { ResponseError } from "../error/response_error";
import { RencanaAksiService } from "../service/rencanaaksi_service";
import { ProgramIntervensiService } from "../service/programintervensi_service";



export class StatsController {

    static async getStats(req: UserRequest, resp: Response, next: NextFunction):Promise<void>{
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
            let currentYear = (new Date()).getFullYear();
            let result = await RencanaAksiService.getStats({satker:satker,tahun: currentYear});
            let result2 = await ProgramIntervensiService.getStats({satker: satker,tahun:currentYear});
            let total = {
                draft: result.draft+result2.draft,
                submit: result.submit+result2.submit,
                approve: result.approve+result2.approve
            };
            resp.status(200).json(total);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async getKabKotStats(req: UserRequest, resp:Response, next: NextFunction): Promise<void>{
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
            let currentYear = (new Date()).getFullYear();
            let result = await RencanaAksiService.getKabKotStats({satker:satker,tahun: currentYear});
            let result2 = await ProgramIntervensiService.getKabKotStats({satker: satker,tahun:currentYear});
            let returnValue: {satker: string; draft: number; submit: number; approve: number; total: number}[] = [];
            let satkerDone: string[] = [];
            for(let item of result){
                for(let item2 of result2){
                    if(item.satker === item2.satker){
                        returnValue.push({
                            satker:item2.satker,
                            draft: item.draft+item2.draft,
                            submit: item.submit+item2.submit,
                            approve: item.approve+item2.approve,
                            total: item.draft+item2.draft+item.submit+item2.submit+item.approve+item2.approve
                        });
                        satkerDone.push(item2.satker);
                        break;
                    }
                    continue;
                }
            }
            for(let item of result){
                if(!satkerDone.includes(item.satker)){
                    returnValue.push(item);
                    satkerDone.push(item.satker);
                }
            }
            for(let item of result2){
                if(!satkerDone.includes(item.satker)){
                    returnValue.push(item);
                    satkerDone.push(item.satker);
                }
            }
            resp.status(200).json(returnValue);
            return;
        } catch(err){
            console.info(`Error ${err}`);
            next(err);
            return;
        }
    }
}