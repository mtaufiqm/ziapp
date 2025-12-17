import { ResponseError } from "../error/response_error";
import { CreateProgressRaRequest, ProgressRaResponse, toProgressRaResponse, UpdateProgressRaRequest } from "../model/progressra_model";
import { client } from "../web/database";

export class ProgressRaService {
    static async readAllByRaUuid(ra: string): Promise<ProgressRaResponse[]> {
        return (await client.progressRencanaAksi.findMany({
            where: {
                ra: ra
            },
            orderBy: {
                last_updated: "desc"
            }
        })).map((el) => toProgressRaResponse(el));
    }

    static async getByUuid(uuid: string): Promise<ProgressRaResponse> {
        let result = (await client.progressRencanaAksi.findFirst({
            where: {
                uuid: uuid
            }
        }));
        if(!result){
            throw new ResponseError(404,"There is no Data");
        }
        return toProgressRaResponse(result);
    }

    static async readAll(): Promise<ProgressRaResponse[]> {
        return (await client.progressRencanaAksi.findMany()).map((el) => toProgressRaResponse(el));
    }

    static async create(input: CreateProgressRaRequest): Promise<ProgressRaResponse> {
        let result = await client.progressRencanaAksi.create({
            data: input
        });
        return toProgressRaResponse(result);
    }

    static async delete(uuid: string): Promise<ProgressRaResponse> {      
        let result = await client.progressRencanaAksi.delete({
            where: {
                uuid: uuid
            }
        });
        return toProgressRaResponse(result);
    }

    static async deleteAllByRaUuuid(uuid: string): Promise<number> {      
        let result = await client.progressRencanaAksi.deleteMany({
            where: {
                ra: uuid
            }
        });
        return result.count;
        
    }

    static async updateByUuid(uuid: string, input: UpdateProgressRaRequest): Promise<ProgressRaResponse> {
        let result = await client.progressRencanaAksi.update({
            data: input,
            where: {
                uuid: uuid
            }
        });
        return toProgressRaResponse(result);
    }
}