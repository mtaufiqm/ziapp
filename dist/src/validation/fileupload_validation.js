"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class FileUploadValidation {
    static CREATE = zod_1.default.object({
        filename: zod_1.default.coerce.string(),
        extension: zod_1.default.coerce.string(),
        size: zod_1.default.coerce.number(),
        is_public: zod_1.default.coerce.boolean().default(false),
        path: zod_1.default.coerce.string().optional(),
        created_by: zod_1.default.coerce.string().optional()
    });
    static UPDATE = zod_1.default.object({
        filename: zod_1.default.coerce.string().optional(),
        extension: zod_1.default.coerce.string().optional(),
        size: zod_1.default.coerce.number().optional(),
        is_public: zod_1.default.coerce.boolean().default(false).optional(),
        path: zod_1.default.coerce.string().optional()
    });
}
exports.FileUploadValidation = FileUploadValidation;
//# sourceMappingURL=fileupload_validation.js.map