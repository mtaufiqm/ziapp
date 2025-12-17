import { ResponseError } from "../error/response_error";
import { CreateProgressIntervensi, ProgressIntervensiResponse, toProgressIntervensiResponse, UpdateProgressIntervensi } from "../model/progressintervensi_model";
import { client } from "../web/database";


export class ProgressIntervensiService {

    static async readAllByIntervensiUuid(uuid: string): Promise<ProgressIntervensiResponse[]>{
        let result = await client.progressRaIntervensi.findMany({
            where: {
                ra: uuid
            }
        });
        return result.map((el) => toProgressIntervensiResponse(el));
    }

    static async getByUuid(uuid: string): Promise<ProgressIntervensiResponse> {
        let result = (await client.progressRaIntervensi.findFirst({
            where: {
                uuid: uuid
            }
        }));
        if(!result){
            throw new ResponseError(404,"There is no Data");
        }
        return toProgressIntervensiResponse(result);
    }

    static async readAll(): Promise<ProgressIntervensiResponse[]> {
        return (await client.progressRaIntervensi.findMany()).map((el) => toProgressIntervensiResponse(el));
    }

    static async create(input: CreateProgressIntervensi): Promise<ProgressIntervensiResponse> {
        let result = await client.progressRaIntervensi.create({
            data: input
        });
        return toProgressIntervensiResponse(result);
    }

    static async delete(uuid: string): Promise<ProgressIntervensiResponse> {      
        let result = await client.progressRaIntervensi.delete({
            where: {
                uuid: uuid
            }
        });
        return toProgressIntervensiResponse(result);
    }

    static async deleteAllByRaUuuid(uuid: string): Promise<number> {      
        let result = await client.progressRaIntervensi.deleteMany({
            where: {
                ra: uuid
            }
        });
        return result.count;
        
    }

    static async updateByUuid(uuid: string, input: UpdateProgressIntervensi): Promise<ProgressIntervensiResponse> {
        let result = await client.progressRaIntervensi.update({
            data: input,
            where: {
                uuid: uuid
            }
        });
        return toProgressIntervensiResponse(result);
    }
}