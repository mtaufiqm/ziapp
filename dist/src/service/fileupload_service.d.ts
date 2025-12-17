import { CreateFileUpload, FileUploadResponse, UpdateFileUpload } from "../model/fileupload_model";
export declare class FileUploadService {
    static create(input: CreateFileUpload): Promise<FileUploadResponse>;
    static getByUuid(uuid: string): Promise<FileUploadResponse>;
    static deleteByUuid(uuid: string): Promise<FileUploadResponse>;
    static updateByUuid(uuid: string, update: UpdateFileUpload): Promise<FileUploadResponse>;
}
//# sourceMappingURL=fileupload_service.d.ts.map