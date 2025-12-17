import z from "zod";


export class RencanaAksiValidation {

    static CREATE: z.ZodType = z.object({
        nama_program: z.coerce.string().min(6).max(100),
        uraian_kegiatan: z.coerce.string().min(6).max(100).optional().nullable(),
        isu_strategis: z.coerce.string().min(6).max(100).optional().nullable(),
        dukungan_rb: z.coerce.number().int(),
        output: z.coerce.string().min(6).max(100).optional(),
        timeline: z.coerce.string().min(6).max(100).optional(),
        ukuran_keberhasilan: z.coerce.string().min(6).max(100).optional(),
        outcome: z.coerce.string().min(6).max(100).optional(),
        keterangan: z.coerce.string().min(6).max(100).optional(),
        status: z.coerce.number().int().nonnegative(),
        tahun: z.coerce.number().int().min(1000),
        satker: z.coerce.string().length(4),
        created_by: z.coerce.string()
    });

    static UPDATE: z.ZodType = z.object({
        nama_program: z.coerce.string().min(6).max(100).optional(),
        uraian_kegiatan: z.coerce.string().min(6).max(100).optional().nullable(),
        isu_strategis: z.coerce.string().min(6).max(100).optional().nullable(),
        dukungan_rb: z.coerce.number().int().optional(),
        output: z.coerce.string().min(6).max(100).optional(),
        timeline: z.coerce.string().min(6).max(100).optional(),
        ukuran_keberhasilan: z.coerce.string().min(6).max(100).optional(),
        outcome: z.coerce.string().min(6).max(100).optional(),
        keterangan: z.coerce.string().min(6).max(100).optional(),
        status: z.coerce.number().int().nonnegative().optional(),
    });
}