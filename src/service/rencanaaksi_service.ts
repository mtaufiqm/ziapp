import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { CreateRencanaAksi, RencanaAksiKabKotStats, RencanaAksiResponse, RencanaAksiStats, SearchRencanaAksi, toRencanaAksiResponse, UpdateRencanaAksi } from "../model/rencanaaksi_model";
import { client } from "../web/database";
import { ResponseError } from "../error/response_error";
import z, { int, number } from "zod";
import { Pageable } from "../model/page_model";
import { RencanaAksi } from "../../generated/prisma/client";
import { Validation } from "../validation/validation";
import { RencanaAksiValidation } from "../validation/rencanaaksi_validation";
import { RencanaAksiWhereInput } from "../../generated/prisma/models";


export class RencanaAksiService {
    static async readAll(opt:{tahun:number | undefined}): Promise<RencanaAksiResponse[]> {
        if(!opt.tahun){
            return (await client.rencanaAksi.findMany(
                {
                    where: {
                        tahun: opt.tahun!
                    }
                }
            )).map((el) => toRencanaAksiResponse(el));
        }
        return (await client.rencanaAksi.findMany()).map((el) => toRencanaAksiResponse(el));
    }

    static async readAllBySatkerAndTahun(satker: string | undefined, tahun: number): Promise<RencanaAksiResponse[]> {
        let returnValue: RencanaAksiResponse[] = [];
        if(satker){
            returnValue = (await client.rencanaAksi.findMany({
                where: {
                    satker: satker,
                    tahun: tahun
                },
                orderBy: {
                    last_updated: "desc"
                }
            })).map((el) => toRencanaAksiResponse(el));
        } else {
            returnValue = (await client.rencanaAksi.findMany({
                where: {
                    tahun: tahun
                },
                orderBy: {
                    last_updated: "desc"
                }
            })).map((el) => toRencanaAksiResponse(el));   
        }
        return returnValue;
    }

    static async getByUuid(uuid: string): Promise<RencanaAksiResponse> {
        let result = await client.rencanaAksi.findFirstOrThrow({
            where: {
                uuid: uuid
            },
            orderBy: {
                last_updated: "desc"
            }
        });
        return toRencanaAksiResponse(result);
    }

    static async create(input: CreateRencanaAksi): Promise<RencanaAksiResponse> {
        let result = await client.rencanaAksi.create({
            data: input
        });
        return toRencanaAksiResponse(result);
    }

    static async delete(uuid: string): Promise<RencanaAksiResponse> {      
        let result = await client.rencanaAksi.delete({
            where: {
                uuid: uuid
            }
        });
        return toRencanaAksiResponse(result);
    }

    static async updateByUuid(uuid: string, input: UpdateRencanaAksi): Promise<RencanaAksiResponse> {
        let result = await client.rencanaAksi.update({
            data: input,
            where: {
                uuid: uuid
            }
        });
        return toRencanaAksiResponse(result);
    }

    static async getStats(input:{
        satker: string | undefined;
        tahun: number;
    }): Promise<RencanaAksiStats>{
        let result:RencanaAksiStats[];
        if(input.satker) {
            result = await client.$queryRaw<RencanaAksiStats[]>`SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM rencana_aksi WHERE tahun = ${input.tahun} AND satker = ${input.satker}`;
        } else {
            result = await client.$queryRaw<RencanaAksiStats[]>`SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM rencana_aksi WHERE tahun = ${input.tahun}`;
        }
        // console.info(result);
        if(!result || result.length === 0){
            throw new ResponseError(404,"Not Found");
        }
        let resultObj = result.at(0);
        let statResult: RencanaAksiStats = {
            draft: Number.parseInt(resultObj!.draft.toString()),
            submit: Number.parseInt(resultObj!.submit.toString()),
            approve: Number.parseInt(resultObj!.approve.toString()),
        };
        return statResult;
    }

    static async getKabKotStats(input:{
        satker: string | undefined;
        tahun: number;
    }): Promise<RencanaAksiKabKotStats[]>{
        let result:RencanaAksiKabKotStats[];
        if(input.satker) {
            result = await client.$queryRaw<RencanaAksiKabKotStats[]>`SELECT satker as satker, coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve, COUNT(*) as total FROM rencana_aksi WHERE tahun = ${input.tahun} AND satker = ${input.satker} GROUP BY satker`;
        } else {
            result = await client.$queryRaw<RencanaAksiKabKotStats[]>`SELECT satker as satker, coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve, COUNT(*) as total FROM rencana_aksi WHERE tahun = ${input.tahun} GROUP BY satker `;
        }

        let returnValue = result.map((el) => {
            let statItem: RencanaAksiKabKotStats = {
                satker: el.satker,
                draft: Number.parseInt(el.draft.toString()),
                submit: Number.parseInt(el.submit.toString()),
                approve: Number.parseInt(el.approve.toString()),
                total: Number.parseInt(el.total.toString())
            };
            return statItem;
        });
        return returnValue;
    }


    static async search(data: SearchRencanaAksi): Promise<Pageable<RencanaAksiResponse>>{
        let validatedData = data;
        let skip = (data.page-1)*data.size;
        let result: RencanaAksi[] = [];
        let filters: RencanaAksiWhereInput[] = [];
        if(validatedData.nama_program){
            filters.push({
                nama_program: {
                    contains: validatedData.nama_program
                }
            });
        }
        if(validatedData.dukungan_rb !== undefined){
            filters.push({
                dukungan_rb: validatedData.dukungan_rb
            });
        }
        if(validatedData.status !== undefined){
            filters.push({
                status: validatedData.status
            });
        }
        result = await client.rencanaAksi.findMany(
            {
                where: {
                    AND:filters
                },
                take: data.size,
                skip: skip
            }
        );
        let countTotal = await client.rencanaAksi.count({
            where: {
                AND: filters
            }
        });
        return {
            data: result.map((el) => toRencanaAksiResponse(el)),
            paging: {
                current_page: validatedData.page,
                size: validatedData.size,
                total_page: Math.ceil((countTotal/validatedData.size))
            }
        };
    }
}
