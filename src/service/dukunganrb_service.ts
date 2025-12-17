import { CreateDukunganRbRequest, DukunganRbResponse } from "../model/dukunganrb_model";
import { client } from "../web/database";


export class DukunganRbService {

    static async getAll(): Promise<DukunganRbResponse[]>{
        let result = await client.dukunganRB.findMany({
            orderBy:{
                id: "asc"
            }
        });
        return result;
    }

    static async insert(input: CreateDukunganRbRequest): Promise<DukunganRbResponse> {
        let result = await client.dukunganRB.create({
            data: input
        });
        return result;
    }
}