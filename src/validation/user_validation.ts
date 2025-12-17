import { z } from "zod";

export class UserValidation {
    static LOGIN: z.ZodType = z.object({
        username: z.coerce.string().min(6).max(50),
        password: z.coerce.string().min(6).max(50)
    });

    static CREATE: z.ZodType = z.object({
        username: z.coerce.string().min(6).max(50),
        password: z.coerce.string().min(6).max(50),
        roles: z.array(z.string()).optional()
    });

    static UPDATE: z.ZodType = z.object({
        username: z.coerce.string().min(6).max(50).optional(),
        password: z.coerce.string().min(6).max(50).optional(),
    });
}