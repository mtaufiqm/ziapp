import { CreateLaporanCa, LaporanCaResponse, toLaporanCaResponse, UpdateLaporanCa } from "../model/laporanca_model";
import { client } from "../web/database";

export class LaporanCaService {

    static async create(input: CreateLaporanCa) : Promise<LaporanCaResponse> {
        let result = await client.laporanCa.create({
            data: input
        });
        return toLaporanCaResponse(result);
    }

    static async deleteByUuid(uuid: string) : Promise<LaporanCaResponse> {
        let result = await client.laporanCa.delete({
            where: {
                uuid: uuid
            }
        });
        return toLaporanCaResponse(result);
    }
    
    static async updateByUuid(uuid: string, update: UpdateLaporanCa): Promise<LaporanCaResponse> {
        let result = await client.laporanCa.update({
            where: {
                uuid: uuid
            },
            data: update
        });
        return toLaporanCaResponse(result);
    }

    static async readAllBySatkerAndTahun(satker: string, tahun: number): Promise<LaporanCaResponse[]>{
        let result = await client.laporanCa.findMany({
            where: {
                satker: satker,
                tahun: tahun
            },
            orderBy: {
                triwulan: "asc"
            }
        });
        return result.map(el => toLaporanCaResponse(el));
    }

    static async readAllByTahun(tahun: number): Promise<LaporanCaResponse[]>{
        let result = await client.laporanCa.findMany({
            where: {
                tahun: tahun
            },
            orderBy: [
                {
                    satker:"asc"
                },
                {
                    triwulan: "asc"
                }
            ] 
        });
        return result.map(el => toLaporanCaResponse(el));
    }
}