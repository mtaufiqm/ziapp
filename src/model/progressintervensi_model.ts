import { ProgressRaIntervensi } from "../../generated/prisma/client"



export type CreateProgressIntervensi = {
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
}

export type UpdateProgressIntervensi = {
    ra?: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg?: number;
    capaian_pg?: number;
    bukti?: string | null;
    notes?: string | null;
    status?: number;
}

export type ProgressIntervensiResponse = {
    uuid: string;
    ra: string;
    desc: string | null;
    date: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti: string | null;
    notes: string | null;
    status: number;
    created_by: string;
    last_updated: Date;
}

export function toProgressIntervensiResponse(input: ProgressRaIntervensi): ProgressIntervensiResponse{
    return input as ProgressIntervensiResponse;
}