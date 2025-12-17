"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RencanaAksiValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class RencanaAksiValidation {
    static CREATE = zod_1.default.object({
        nama_program: zod_1.default.coerce.string().min(6).max(100),
        uraian_kegiatan: zod_1.default.coerce.string().min(6).max(100).optional().nullable(),
        isu_strategis: zod_1.default.coerce.string().min(6).max(100).optional().nullable(),
        dukungan_rb: zod_1.default.coerce.number().int(),
        output: zod_1.default.coerce.string().min(6).max(100).optional(),
        timeline: zod_1.default.coerce.string().min(6).max(100).optional(),
        ukuran_keberhasilan: zod_1.default.coerce.string().min(6).max(100).optional(),
        outcome: zod_1.default.coerce.string().min(6).max(100).optional(),
        keterangan: zod_1.default.coerce.string().min(6).max(100).optional(),
        status: zod_1.default.coerce.number().int().nonnegative(),
        tahun: zod_1.default.coerce.number().int().min(1000),
        satker: zod_1.default.coerce.string().length(4),
        created_by: zod_1.default.coerce.string()
    });
    static UPDATE = zod_1.default.object({
        nama_program: zod_1.default.coerce.string().min(6).max(100).optional(),
        uraian_kegiatan: zod_1.default.coerce.string().min(6).max(100).optional().nullable(),
        isu_strategis: zod_1.default.coerce.string().min(6).max(100).optional().nullable(),
        dukungan_rb: zod_1.default.coerce.number().int().optional(),
        output: zod_1.default.coerce.string().min(6).max(100).optional(),
        timeline: zod_1.default.coerce.string().min(6).max(100).optional(),
        ukuran_keberhasilan: zod_1.default.coerce.string().min(6).max(100).optional(),
        outcome: zod_1.default.coerce.string().min(6).max(100).optional(),
        keterangan: zod_1.default.coerce.string().min(6).max(100).optional(),
        status: zod_1.default.coerce.number().int().nonnegative().optional(),
    });
}
exports.RencanaAksiValidation = RencanaAksiValidation;
//# sourceMappingURL=rencanaaksi_validation.js.map