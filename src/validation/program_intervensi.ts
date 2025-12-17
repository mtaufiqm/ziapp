import z from "zod";


export class ProgramIntervensiValidation {
    // intervensi: string;
    // ukuran_keberhasilan: string | null;
    // timeline: string | null;
    // status: number;
    // satker: string;
    // tahun: number;
    // created_by: string;
    static CREATE: z.ZodType = z.object({
        intervensi: z.coerce.string().min(6),
        ukuran_keberhasilan: z.coerce.string().nullable(),
        timeline: z.coerce.string().nullable(),
        status: z.coerce.number().int(),
        satker: z.coerce.string().length(4),
        tahun: z.coerce.number().int().nonnegative().max(9999)
    });

    static UPDATE: z.ZodType = z.object({
        intervensi: z.coerce.string().min(6).optional(),
        ukuran_keberhasilan: z.coerce.string().nullable().optional(),
        timeline: z.coerce.string().nullable().optional(),
        status: z.coerce.number().int().optional()
    });
}