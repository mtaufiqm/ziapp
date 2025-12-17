import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { ResponseError } from "../error/response_error";
import { client } from "../web/database";
import { CreatePegawaiRequest, PegawaiResponse, toPegawaiResponse, UpdatePegawaiRequest } from "../model/pegawai_model";
import { Validation } from "../validation/validation";
import {v1} from "uuid"; 
import { Pegawai } from "../../generated/prisma/client";
import { PegawaiValidation } from "../validation/pegawai_validation";

export class PegawaiService {
    static async getByUsername(username: string): Promise<PegawaiResponse> {
        let result = await client.pegawai.findFirst({where: {username: username}});
        if(!result){
            throw new ResponseError(400,"There is no Pegawai Data");
        }
        return toPegawaiResponse(result);
    }

    static async create(request: CreatePegawaiRequest): Promise<PegawaiResponse> {
        request.status_pegawai = "AKTIF";
        let result = await client.pegawai.create({data:request});
        return toPegawaiResponse(result);
    }

    static async deleteByUsername(username: string): Promise<PegawaiResponse> {
        let result = await client.pegawai.delete({
            where: {
                username: username
            }
        });
        return toPegawaiResponse(result);
    }

    
    static async updateByUsername(username: string, update: UpdatePegawaiRequest): Promise<PegawaiResponse> {
        let result = await client.pegawai.update({
            where: {
                username: username
            },
            data: update
        });
        return toPegawaiResponse(result);
    }
}