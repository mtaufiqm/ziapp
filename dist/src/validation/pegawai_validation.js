"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PegawaiValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class PegawaiValidation {
    static CREATE = zod_1.default.object({
        fullname: zod_1.default.coerce.string().min(6),
        fullname_with_title: zod_1.default.coerce.string().min(6).optional(),
        nickname: zod_1.default.coerce.string().min(6).optional(),
        date_of_birth: zod_1.default.coerce.string().min(6).optional(),
        city_of_birth: zod_1.default.coerce.string().min(6).optional(),
        nip: zod_1.default.coerce.string().min(6).optional(),
        old_nip: zod_1.default.coerce.string().min(6).optional(),
        age: zod_1.default.coerce.number().int(),
        username: zod_1.default.coerce.string().min(6).optional(),
        status_pegawai: zod_1.default.coerce.string().min(0).optional(),
        phone_number: zod_1.default.coerce.string().min(6).optional(),
        satker: zod_1.default.coerce.string().length(4).optional()
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
exports.PegawaiValidation = PegawaiValidation;
//# sourceMappingURL=pegawai_validation.js.map