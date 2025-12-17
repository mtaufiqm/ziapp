import { FileUpload } from "../../generated/prisma/client";
import { ResponseError } from "../error/response_error";
import { CreateFileUpload, FileUploadResponse, toFileUploadResponse, UpdateFileUpload } from "../model/fileupload_model";
import { client } from "../web/database";
import fs from "fs/promises";

export class FileUploadService{ 
    
        static async create(input: CreateFileUpload) : Promise<FileUploadResponse> {
            let result = await client.fileUpload.create({
                data: input
            });
            return toFileUploadResponse(result);
        }

        static async getByUuid(uuid: string) : Promise<FileUploadResponse> {
            let result = await client.fileUpload.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if(!result){
                throw new ResponseError(404,"Data Not Found");
            }
            return toFileUploadResponse(result);
        }
    
        static async deleteByUuid(uuid: string) : Promise<FileUploadResponse> {
            //delete file in disk
            try {
                let item = await client.fileUpload.findUnique({
                    where: {uuid: uuid}
                }); 
                if(!item){
                    throw new Error("Not Found");
                }
                let result = await fs.unlink(item.path);
            } catch(err){
                console.info(`Error Delete Physics File in Disk ${err}`);
            }
            let result = await client.fileUpload.delete({
                where: {
                    uuid: uuid
                }
            });
            return toFileUploadResponse(result);
        }
        
        static async updateByUuid(uuid: string, update: UpdateFileUpload): Promise<FileUploadResponse> {
            let result = await client.fileUpload.update({
                where: {
                    uuid: uuid
                },
                data: update
            });
            return toFileUploadResponse(result);
        }
}