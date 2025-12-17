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
            let currentYear = (new Date()).getFullYear()
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
}