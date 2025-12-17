import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { GenerateDocxService } from "../service/generatedocx_service";
import * as docx from "docx";


export class GenerateDocxController {
    
    static async generateFile(req: UserRequest, resp: Response, next: NextFunction) {
        try {
            let result = await GenerateDocxService.generateDocx();
            resp.contentType("application/octet-stream");
            resp.set("Content-Disposition", "attachment; filename=output.docx");
            let bufferResp = await (docx.Packer.toBuffer(result));
            resp.send(bufferResp);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}