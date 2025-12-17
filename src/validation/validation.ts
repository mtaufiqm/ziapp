import { error } from "console";
import {z, ZodError } from "zod";
import { ResponseError } from "../error/response_error";

export class Validation {
    static validate<T>(schema: z.ZodType, data: T): T {
        let result = schema.safeParse(data);
        if(result.error){
            throw new ResponseError(400,`Error Validation ${result.error}`);
        }
        return result.data as T;
    }
}