import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/response_error";

export const errorMiddleware = async (error: Error, req: Request, resp: Response, next: NextFunction) => {
    if(error instanceof ZodError){
        resp.status(400).json({
            errors: `Validation Error : ${JSON.stringify(error)}`
        });
    } else if(error instanceof ResponseError){
        resp.status(error.status).json({
            errors: error.message
        });
    } else {
        resp.status(500).json({
            errors: error.message
        });
    }
}