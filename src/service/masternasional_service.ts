import { CreateMasterNasional, MasterNasionalResponse, toMasterNasionalResponse, UpdateMasterNasional } from "../model/masternasional_model";
import { client } from "../web/database";


export class MasterNasionalService {

    static async createMaster(input: CreateMasterNasional) : Promise<MasterNasionalResponse> {
        let result = await client.masterIntervensiNasional.create({
            data: input
        });
        return toMasterNasionalResponse(result);
    }

    static async deleteMasterByUuid(uuid: string) : Promise<MasterNasionalResponse> {
        let result = await client.masterIntervensiNasional.delete({
            where: {
                uuid: uuid
            }
        });
        return toMasterNasionalResponse(result);
    }
    
    static async updateByUuid(uuid: string, update: UpdateMasterNasional): Promise<MasterNasionalResponse> {
        let result = await client.masterIntervensiNasional.update({
            where: {
                uuid: uuid
            },
            data: update
        });
        return toMasterNasionalResponse(result);
    }

    static async readAllByTahun(tahun: number): Promise<MasterNasionalResponse[]> {
        let result = await client.masterIntervensiNasional.findMany({
            where: {
                tahun: tahun
            },
            orderBy: {
                last_updated: "desc"
            }
        });
        return result.map(el => toMasterNasionalResponse(el));
    }
}