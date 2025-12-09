import { error } from "console";
import {z } from "zod";

export class Validation {
    static validate<T>(schema: z.ZodType, data: T): T {
        var result = schema.safeParse(data);
        if(result.error){
            throw new Error(`Error Validation ${error}`);
        }
        return result as T;
    }
}