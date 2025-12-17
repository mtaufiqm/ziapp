import z from "zod";



export class MasterNasionalValidation {
    static CREATE: z.ZodType = z.object({
        nama_program: z.coerce.string().min(6).max(100),
        uraian_kegiatan: z.coerce.string().min(6).max(100),
        isu_strategis: z.coerce.string().min(6).max(100),
        output: z.coerce.string().min(6).max(100),
        timeline: z.coerce.string().min(6).max(100),
        ukuran_keberhasilan: z.coerce.string().min(6).max(100),
        outcome: z.coerce.string().min(6).max(100),
        keterangan: z.coerce.string().min(6).max(100),
        tahun: z.coerce.number().int().min(1000).max(9999),
        created_by: z.coerce.string().min(6).max(100)
    });

    static UPDATE: z.ZodType = z.object({
        nama_program: z.coerce.string().min(6).max(100).optional(),
        uraian_kegiatan: z.coerce.string().min(6).max(100).optional(),
        isu_strategis: z.coerce.string().min(6).max(100).optional(),
        output: z.coerce.string().min(6).max(100).optional(),
        timeline: z.coerce.string().min(6).max(100).optional(),
        ukuran_keberhasilan: z.coerce.string().min(6).max(100).optional(),
        outcome: z.coerce.string().min(6).max(100).optional(),
        keterangan: z.coerce.string().min(6).max(100).optional(),
        tahun: z.coerce.number().int().min(1000).max(9999).optional(),
        created_by: z.coerce.string().min(6).max(100).optional()   
    });
}