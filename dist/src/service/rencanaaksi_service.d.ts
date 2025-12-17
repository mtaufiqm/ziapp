import { CreateRencanaAksi, RencanaAksiResponse, RencanaAksiStats, UpdateRencanaAksi } from "../model/rencanaaksi_model";
export declare class RencanaAksiService {
    static readAll(opt: {
        tahun: number | undefined;
    }): Promise<RencanaAksiResponse[]>;
    static readAllBySatkerAndTahun(satker: string, tahun: number): Promise<RencanaAksiResponse[]>;
    static getByUuid(uuid: string): Promise<RencanaAksiResponse>;
    static create(input: CreateRencanaAksi): Promise<RencanaAksiResponse>;
    static delete(uuid: string): Promise<RencanaAksiResponse>;
    static updateByUuid(uuid: string, input: UpdateRencanaAksi): Promise<RencanaAksiResponse>;
    static getStats(input: {
        satker: string | undefined;
        tahun: number;
    }): Promise<RencanaAksiStats>;
}
//# sourceMappingURL=rencanaaksi_service.d.ts.map