"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressRaValidation = void 0;
const zod_1 = __importDefault(require("zod"));
// uuid: string;
// ra: string;
// desc: string | null;
// date: string | null;
// pelaksanaan_pg: number;
// capaian_pg: number;
// bukti: string | null;
// notes: string | null;
// status: number;
// created_by: string;
// last_updated: string;
class ProgressRaValidation {
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
        fullname: zod_1.default.coerce.string().min(6).optional(),
        fullname_with_title: zod_1.default.coerce.string().min(6).optional(),
        nickname: zod_1.default.coerce.string().min(6).optional(),
        date_of_birth: zod_1.default.coerce.string().min(6).optional(),
        city_of_birth: zod_1.default.coerce.string().min(6).optional(),
        nip: zod_1.default.coerce.string().min(6).optional(),
        old_nip: zod_1.default.coerce.string().min(6).optional(),
        age: zod_1.default.coerce.number().int().optional(),
        username: zod_1.default.coerce.string().min(6).optional(),
        status_pegawai: zod_1.default.coerce.string().min(0).optional(),
        phone_number: zod_1.default.coerce.string().min(6).optional(),
        satker: zod_1.default.coerce.string().min(6).optional()
    });
}
exports.ProgressRaValidation = ProgressRaValidation;
//# sourceMappingURL=progressra_validation.js.map