"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramIntervensiValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class ProgramIntervensiValidation {
    // intervensi: string;
    // ukuran_keberhasilan: string | null;
    // timeline: string | null;
    // status: number;
    // satker: string;
    // tahun: number;
    // created_by: string;
    static CREATE = zod_1.default.object({
        intervensi: zod_1.default.coerce.string().min(6),
        ukuran_keberhasilan: zod_1.default.coerce.string().nullable(),
        timeline: zod_1.default.coerce.string().nullable(),
        status: zod_1.default.coerce.number().int(),
        satker: zod_1.default.coerce.string().length(4),
        tahun: zod_1.default.coerce.number().int().nonnegative().max(9999)
    });
    static UPDATE = zod_1.default.object({
        intervensi: zod_1.default.coerce.string().min(6).optional(),
        ukuran_keberhasilan: zod_1.default.coerce.string().nullable().optional(),
        timeline: zod_1.default.coerce.string().nullable().optional(),
        status: zod_1.default.coerce.number().int().optional()
    });
}
exports.ProgramIntervensiValidation = ProgramIntervensiValidation;
//# sourceMappingURL=program_intervensi.js.map