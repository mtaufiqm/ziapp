"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFileUploadResponse = toFileUploadResponse;
function toFileUploadResponse(input) {
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
//# sourceMappingURL=fileupload_model.js.map