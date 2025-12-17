import z from "zod";

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

export class ProgressRaValidation {
    static CREATE: z.ZodType = z.object({
        ra: z.coerce.string().min(6).max(50),
        desc: z.coerce.string().min(6).max(50).optional(),
        date: z.coerce.string().min(6).max(50).optional(),
        pelaksanaan_pg: z.coerce.number().nonnegative().max(100.0),
        capaian_pg: z.coerce.number().nonnegative().max(100.0),
        bukti: z.coerce.string().min(6).max(50).optional(),
        notes: z.coerce.string().min(6).max(50).optional(),
        status: z.coerce.number().int().nonnegative(),
        created_by: z.coerce.string().min(6).max(50)
    });

    static UPDATE: z.ZodType = z.object({
        ra: z.coerce.string().min(6).max(50).optional(),
        desc: z.coerce.string().min(6).max(50).optional(),
        date: z.coerce.string().min(6).max(50).optional(),
        pelaksanaan_pg: z.coerce.number().nonnegative().max(100.0).optional(),
        capaian_pg: z.coerce.number().nonnegative().max(100.0).optional(),
        bukti: z.coerce.string().min(6).max(50).optional(),
        notes: z.coerce.string().min(6).max(50).optional(),
        status: z.coerce.number().int().nonnegative().optional()    
    });
}