import { z } from "zod";

export class UserValidation {
    static LOGIN: z.ZodType = z.object({
        username: z.coerce.string().min(6).max(50),
        password: z.coerce.string().min(6).max(50)
    });
}