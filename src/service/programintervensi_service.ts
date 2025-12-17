import { ProgramIntervensi } from "../../generated/prisma/client";
import { ResponseError } from "../error/response_error";
import { CreateProgramIntervensi, ProgramIntervensiResponse, ProgramIntervensiStats, toProgranIntervensiResponse, UpdateProgramIntervensi } from "../model/programintervensi_model";
import { client } from "../web/database";


export class ProgramIntervensiService {
    static async create(input: CreateProgramIntervensi) : Promise<ProgramIntervensiResponse> {
        let result = await client.programIntervensi.create({
            data: input,
            include:{
                intervensiObj: true
            }
        });
        return toProgranIntervensiResponse(result);
    }

    static async deleteByUuid(uuid: string) : Promise<ProgramIntervensiResponse> {
        let result = await client.programIntervensi.delete({
            where: {
                uuid: uuid
            },
            include: {
                intervensiObj: true
            }
        });
        return toProgranIntervensiResponse(result);
    }
    
    static async updateByUuid(uuid: string, update: UpdateProgramIntervensi): Promise<ProgramIntervensiResponse> {
        let result = await client.programIntervensi.update({
            where: {
                uuid: uuid
            },
            data: update,
            include: {
                intervensiObj: true
            }
        });
        return toProgranIntervensiResponse(result);
    }

    static async getByUuid(uuid: string): Promise<ProgramIntervensiResponse> {
        let result = await client.programIntervensi.findFirst({
            where: {
                uuid: uuid
            },
            include: {
                intervensiObj: true
            }
        });
        if(!result){
            throw new ResponseError(404,"Not Found");
        }
        return toProgranIntervensiResponse(result);
    }

    static async readAllBySatkerAndTahun(input: {
        satker: string | undefined; 
        tahun: number;
    }): Promise<ProgramIntervensiResponse[]> {
        let result: ProgramIntervensiResponse[] = [];
        if(!input.satker){
            result = await client.programIntervensi.findMany({
            where: {
                tahun: input.tahun
            },
            orderBy: [
                {satker: "asc"},
                {last_updated: "desc"}
            ],
            include: {
                intervensiObj: true
            }
        });
        } else {
            result = await client.programIntervensi.findMany({
                where: {
                    satker: input.satker!,
                    tahun: input.tahun
                },
                include: {
                    intervensiObj: true
                }
            });
        }
        return result.map(el => toProgranIntervensiResponse(el));
    }

    static async getStats(input:{satker: string|undefined; tahun:number}): Promise<ProgramIntervensiStats> {
        let result: ProgramIntervensiStats[] = [];
        if(input.satker) {
            result = await client.$queryRaw<ProgramIntervensiStats[]>`SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM program_intervensi WHERE tahun = ${input.tahun} AND satker = ${input.satker}`;
        } else {
            result = await client.$queryRaw<ProgramIntervensiStats[]>`SELECT coalesce(SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END),0) AS draft, coalesce(SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END),0) AS submit, coalesce(SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END),0) AS approve FROM program_intervensi WHERE tahun = ${input.tahun}`;
        }
        let resultObj = result.at(0);
        if(!resultObj){
            throw new ResponseError(404,"Not Found");
        }
        let statResult: ProgramIntervensiStats = {
            draft: Number.parseInt(resultObj.draft.toString()),
            submit: Number.parseInt(resultObj.submit.toString()),
            approve: Number.parseInt(resultObj.approve.toString())
        };
        return statResult
    }
}