import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { CreateRencanaAksi, RencanaAksiResponse, RencanaAksiStats, toRencanaAksiResponse, UpdateRencanaAksi } from "../model/rencanaaksi_model";
import { client } from "../web/database";
import { ResponseError } from "../error/response_error";
import { int, number } from "zod";


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

    static async readAllBySatkerAndTahun(satker: string, tahun: number): Promise<RencanaAksiResponse[]> {
        return (await client.rencanaAksi.findMany({
            where: {
                satker: satker,
                tahun: tahun
            },
            orderBy: {
                last_updated: "desc"
            }
        })).map((el) => toRencanaAksiResponse(el));
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
}
