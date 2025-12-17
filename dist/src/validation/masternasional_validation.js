"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterNasionalValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class MasterNasionalValidation {
    static CREATE = zod_1.default.object({
        nama_program: zod_1.default.coerce.string().min(6).max(100),
        uraian_kegiatan: zod_1.default.coerce.string().min(6).max(100),
        isu_strategis: zod_1.default.coerce.string().min(6).max(100),
        output: zod_1.default.coerce.string().min(6).max(100),
        timeline: zod_1.default.coerce.string().min(6).max(100),
        ukuran_keberhasilan: zod_1.default.coerce.string().min(6).max(100),
        outcome: zod_1.default.coerce.string().min(6).max(100),
        keterangan: zod_1.default.coerce.string().min(6).max(100),
        tahun: zod_1.default.coerce.number().int().min(1000).max(9999),
        created_by: zod_1.default.coerce.string().min(6).max(100)
    });
    static UPDATE = zod_1.default.object({
        nama_program: zod_1.default.coerce.string().min(6).max(100).optional(),
        uraian_kegiatan: zod_1.default.coerce.string().min(6).max(100).optional(),
        isu_strategis: zod_1.default.coerce.string().min(6).max(100).optional(),
        output: zod_1.default.coerce.string().min(6).max(100).optional(),
        timeline: zod_1.default.coerce.string().min(6).max(100).optional(),
        ukuran_keberhasilan: zod_1.default.coerce.string().min(6).max(100).optional(),
        outcome: zod_1.default.coerce.string().min(6).max(100).optional(),
        keterangan: zod_1.default.coerce.string().min(6).max(100).optional(),
        tahun: zod_1.default.coerce.number().int().min(1000).max(9999).optional(),
        created_by: zod_1.default.coerce.string().min(6).max(100).optional()
    });
}
exports.MasterNasionalValidation = MasterNasionalValidation;
//# sourceMappingURL=masternasional_validation.js.map