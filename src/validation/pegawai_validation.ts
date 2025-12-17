import z from "zod";

export class PegawaiValidation {
    static CREATE: z.ZodType = z.object({
        fullname: z.coerce.string().min(6),
        fullname_with_title: z.coerce.string().min(6).optional(),
        nickname: z.coerce.string().min(6).optional(),
        date_of_birth: z.coerce.string().min(6).optional(),
        city_of_birth:z.coerce.string().min(6).optional(),
        nip: z.coerce.string().min(6).optional(),
        old_nip: z.coerce.string().min(6).optional(),
        age: z.coerce.number().int(),
        username: z.coerce.string().min(6).optional(),
        status_pegawai: z.coerce.string().min(0).optional(),
        phone_number: z.coerce.string().min(6).optional(),
        satker: z.coerce.string().length(4).optional()
    });

    static UPDATE: z.ZodType = z.object({
        fullname: z.coerce.string().min(6).optional(),
        fullname_with_title: z.coerce.string().min(6).optional(),
        nickname: z.coerce.string().min(6).optional(),
        date_of_birth: z.coerce.string().min(6).optional(),
        city_of_birth:z.coerce.string().min(6).optional(),
        nip: z.coerce.string().min(6).optional(),
        old_nip: z.coerce.string().min(6).optional(),
        age: z.coerce.number().int().optional(),
        username: z.coerce.string().min(6).optional(),
        status_pegawai: z.coerce.string().min(0).optional(),
        phone_number: z.coerce.string().min(6).optional(),
        satker: z.coerce.string().min(6).optional()        
    });
}