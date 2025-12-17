"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressIntervensiValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class ProgressIntervensiValidation {
    static CREATE = zod_1.default.object({
        ra: zod_1.default.coerce.string().min(6).max(50),
        desc: zod_1.default.coerce.string().min(6).max(50).optional(),
        date: zod_1.default.coerce.string().min(6).max(50).optional(),
        pelaksanaan_pg: zod_1.default.coerce.number().nonnegative().max(100.0),
        capaian_pg: zod_1.default.coerce.number().nonnegative().max(100.0),
        bukti: zod_1.default.coerce.string().min(6).max(50).optional(),
        notes: zod_1.default.coerce.string().min(6).max(50).optional(),
        status: zod_1.default.coerce.number().int().nonnegative(),
        created_by: zod_1.default.coerce.string().min(6).max(50)
    });
    static UPDATE = zod_1.default.object({
        ra: zod_1.default.coerce.string().min(6).max(50).optional(),
        desc: zod_1.default.coerce.string().min(6).max(50).optional(),
        date: zod_1.default.coerce.string().min(6).max(50).optional(),
        pelaksanaan_pg: zod_1.default.coerce.number().nonnegative().max(100.0).optional(),
        capaian_pg: zod_1.default.coerce.number().nonnegative().max(100.0).optional(),
        bukti: zod_1.default.coerce.string().min(6).max(50).optional(),
        notes: zod_1.default.coerce.string().min(6).max(50).optional(),
        status: zod_1.default.coerce.number().int().nonnegative().optional()
    });
}
exports.ProgressIntervensiValidation = ProgressIntervensiValidation;
//# sourceMappingURL=progressintervensi_validation.js.map