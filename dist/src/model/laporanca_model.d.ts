import { LaporanCa } from "../../generated/prisma/client";
export type CreateLaporanCa = {
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
    created_by: string;
};
export type UpdateLaporanCa = {
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
};
export type LaporanCaResponse = {
    uuid: string;
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
    created_by: string;
    created_at: Date;
    last_updated: Date;
};
export declare function toLaporanCaResponse(data: LaporanCa): LaporanCaResponse;
//# sourceMappingURL=laporanca_model.d.ts.map