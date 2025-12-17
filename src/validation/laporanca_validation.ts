import z from "zod";


export class LaporanCaValidation {
    static CREATE: z.ZodType = z.object({
        triwulan: z.coerce.number().int().positive().max(4),
        tahun: z.coerce.number().int().positive().max(9999),
        satker: z.coerce.string().length(4),
        bukti: z.coerce.string().min(6),
        created_by: z.coerce.string().optional()
    });

    static UPDATE: z.ZodType = z.object({
        triwulan: z.coerce.number().int().positive().max(4).optional(),
        tahun: z.coerce.number().int().positive().max(9999).optional(),
        satker: z.coerce.string().length(4).optional(),
        bukti: z.coerce.string().min(6).optional()
    });
}