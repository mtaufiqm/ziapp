import { DukunganRB } from "../../generated/prisma/client";

export type DukunganRbResponse = {
    id: number;
    desc: string;
}

export type CreateDukunganRbRequest = {
    id: number;
    desc: string;   
}

export type UpdateDukunganRbRequest = {
    id?: number;
    desc?: string;   
}

export function toDukunganRbResponse(input: DukunganRB): DukunganRbResponse {
    return input as DukunganRbResponse;  
} 