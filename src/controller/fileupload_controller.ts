import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { RoleHelper } from "../helper/role_helper";
import { RolesSet } from "../model/roles_model";
import { ResponseError } from "../error/response_error";
import { PegawaiService } from "../service/pegawai_service";
import { UploadedFile } from "express-fileupload";
import fs from "fs";
import { CreateFileUpload, FileUploadResponse } from "../model/fileupload_model";
import { FileUploadService } from "../service/fileupload_service";
import { v1, v4 } from "uuid";
import { client } from "../web/database";

let pathLinux: string = process.env.LINUX_UPLOAD!;
let pathWindows: string = process.env.WINDOWS_UPLOAD!;

export class FileUploadController {

    static async uploadFile(req:UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            //========================== Authorization ================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: [...RolesSet.$5, ...[RolesSet.PEGAWAI]]})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================

            let files = req.files;
            if(!files || !files.file){
                throw new ResponseError(404,"Empty File Upload");
            }
            let uploadedFile = files.file as UploadedFile;
            let filename = uploadedFile.name;
            let size = uploadedFile.size;
            let extension = uploadedFile.encoding;
            let data = await uploadedFile.data;
            if(data.byteLength === 0){
                throw new ResponseError(404,"Empty File Upload : 0 Bytes")
            }
            let isWindows = false;
            let isLinux = false;
            if(process.platform === "win32"){
                isWindows = true;
            } 
            if(process.platform === "linux"){
                isLinux = true;
            }
            let uuidForFilePath = v4();
            let path:string | undefined;
            //upload to windows
            if(isWindows){
                path = `${pathWindows}/${uuidForFilePath}`;
                try {
                    let writeFile = await fs.promises.writeFile(path,uploadedFile.data);
                } catch(err2){
                    throw err2;
                }
            }
            if(isLinux){
                path = `${pathLinux}/${uuidForFilePath}`;
                try {
                    let writeFile = await fs.promises.writeFile(path,uploadedFile.data);
                } catch(err2){
                    throw err2;
                }
            }
            if(!path){
                throw new ResponseError(404, "Upload File Not Supported in this Platform/OS");
            }
            let createFileUpload:CreateFileUpload = {
                filename: filename,
                size: size,
                extension: extension,
                is_public: true,
                created_by: user.username,
                path: path
            };
            let uploadedFileResp = await FileUploadService.create(createFileUpload);
            resp.status(200).json(uploadedFileResp);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async downloadFile(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            //========================== Authorization ================
            let user = req.user!;
            let userPegawai = await PegawaiService.getByUsername(user.username);
            if(RoleHelper.isNotContainOne({roles:user.roles, required: [...RolesSet.$5, ...[RolesSet.PEGAWAI]]})){
                throw new ResponseError(403,"Forbidden");
            }
            //========================== Authorization ================
            let uuid = req.params.uuid;
            if(!uuid){
                throw new ResponseError(404,"Empty UUID");
            }
            let data = await client.fileUpload.findUnique({where:{uuid:uuid}});
            if(!data){
                throw new ResponseError(404,"Data Not Found");
            }
            resp.download(data.path,data.filename);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}