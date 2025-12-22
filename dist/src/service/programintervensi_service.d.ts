import { CreateProgramIntervensi, ProgramIntervensiKabKotStats, ProgramIntervensiResponse, ProgramIntervensiStats, UpdateProgramIntervensi } from "../model/programintervensi_model";
export declare class ProgramIntervensiService {
    static create(input: CreateProgramIntervensi): Promise<ProgramIntervensiResponse>;
    static deleteByUuid(uuid: string): Promise<ProgramIntervensiResponse>;
    static updateByUuid(uuid: string, update: UpdateProgramIntervensi): Promise<ProgramIntervensiResponse>;
    static getByUuid(uuid: string): Promise<ProgramIntervensiResponse>;
    static readAllBySatkerAndTahun(input: {
        satker: string | undefined;
        tahun: number;
    }): Promise<ProgramIntervensiResponse[]>;
    static getStats(input: {
        satker: string | undefined;
        tahun: number;
    }): Promise<ProgramIntervensiStats>;
    static getKabKotStats(input: {
        satker: string | undefined;
        tahun: number;
    }): Promise<ProgramIntervensiKabKotStats[]>;
}
//# sourceMappingURL=programintervensi_service.d.ts.map