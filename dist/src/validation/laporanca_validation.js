"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaporanCaValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class LaporanCaValidation {
    static CREATE = zod_1.default.object({
        triwulan: zod_1.default.coerce.number().int().positive().max(4),
        tahun: zod_1.default.coerce.number().int().positive().max(9999),
        satker: zod_1.default.coerce.string().length(4),
        bukti: zod_1.default.coerce.string().min(6),
        created_by: zod_1.default.coerce.string().optional()
    });
    static UPDATE = zod_1.default.object({
        triwulan: zod_1.default.coerce.number().int().positive().max(4).optional(),
        tahun: zod_1.default.coerce.number().int().positive().max(9999).optional(),
        satker: zod_1.default.coerce.string().length(4).optional(),
        bukti: zod_1.default.coerce.string().min(6).optional()
    });
}
exports.LaporanCaValidation = LaporanCaValidation;
//# sourceMappingURL=laporanca_validation.js.map