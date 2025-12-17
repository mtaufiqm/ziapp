import z from "zod";


export class FileUploadValidation {

    static CREATE: z.ZodType = z.object({
            filename: z.coerce.string(),
            extension: z.coerce.string(),
            size: z.coerce.number(),
            is_public: z.coerce.boolean().default(false),
            path: z.coerce.string().optional(),
            created_by: z.coerce.string().optional()
    });

    static UPDATE: z.ZodType = z.object({
            filename: z.coerce.string().optional(),
            extension: z.coerce.string().optional(),
            size: z.coerce.number().optional(),
            is_public: z.coerce.boolean().default(false).optional(),
            path: z.coerce.string().optional()
    });
}