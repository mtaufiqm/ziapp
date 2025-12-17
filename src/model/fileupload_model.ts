import { FileUpload } from "../../generated/prisma/client";

export type CreateFileUpload = {
    filename: string;
    extension: string;
    size: number;
    is_public: boolean;
    path: string;
    created_by: string;
}

export type UpdateFileUpload = {
    filename?: string;
    extension?: string;
    size?: number;
    is_public?: boolean;
    path?: string;
}

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

export function toFileUploadResponse(input: FileUpload): FileUploadResponse {
    return {
        uuid: input.uuid,
        filename: input.filename,
        extension: input.extension,
        size: input.size,
        is_public: input.is_public,
        created_by: input.created_by,
        created_at: input.created_at,
        last_updated: input.last_updated
    };
}