import { CreateLaporanCa, LaporanCaResponse, UpdateLaporanCa } from "../model/laporanca_model";
export declare class LaporanCaService {
    static create(input: CreateLaporanCa): Promise<LaporanCaResponse>;
    static deleteByUuid(uuid: string): Promise<LaporanCaResponse>;
    static updateByUuid(uuid: string, update: UpdateLaporanCa): Promise<LaporanCaResponse>;
    static readAllBySatkerAndTahun(satker: string, tahun: number): Promise<LaporanCaResponse[]>;
    static readAllByTahun(tahun: number): Promise<LaporanCaResponse[]>;
}
//# sourceMappingURL=laporanca_service.d.ts.map