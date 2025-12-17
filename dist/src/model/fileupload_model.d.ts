import { FileUpload } from "../../generated/prisma/client";
export type CreateFileUpload = {
    filename: string;
    extension: string;
    size: number;
    is_public: boolean;
    path: string;
    created_by: string;
};
export type UpdateFileUpload = {
    filename?: string;
    extension?: string;
    size?: number;
    is_public?: boolean;
    path?: string;
};
export type FileUploadResponse = {
    uuid: string;
    filename: string;
    extension: string;
    size: number;
    is_public: boolean;
    created_by: string;
    created_at: Date;
    last_updated: Date;
};
export declare function toFileUploadResponse(input: FileUpload): FileUploadResponse;
//# sourceMappingURL=fileupload_model.d.ts.map