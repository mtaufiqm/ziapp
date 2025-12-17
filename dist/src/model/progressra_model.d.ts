import { ProgressRencanaAksi } from "../../generated/prisma/client";
export type ProgressRaResponse = {
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
    last_updated: Date | null;
};
export type CreateProgressRaRequest = {
    ra: string;
    desc: string | null;
    date: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti: string | null;
    notes: string | null;
    status: number;
    created_by: string;
};
export type UpdateProgressRaRequest = {
    ra?: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg?: number;
    capaian_pg?: number;
    bukti?: string | null;
    notes?: string | null;
    status?: number;
    created_by?: string;
};
export declare function toProgressRaResponse(input: ProgressRencanaAksi): ProgressRaResponse;
//# sourceMappingURL=progressra_model.d.ts.map