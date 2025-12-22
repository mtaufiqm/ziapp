import { MasterIntervensiNasional, ProgramIntervensi } from "../../generated/prisma/client";
export type CreateProgramIntervensi = {
    intervensi: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    status: number;
    satker: string;
    tahun: number;
    created_by: string;
};
export type UpdateProgramIntervensi = {
    intervensi?: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    status?: number;
    satker?: string;
    tahun?: number;
};
export type ProgramIntervensiResponse = {
    uuid: string;
    intervensi: string;
    ukuran_keberhasilan: string | null;
    timeline: string | null;
    status: number;
    satker: string;
    tahun: number;
    last_updated: Date;
    created_by: string;
    intervensiObj: MasterIntervensiNasional;
};
export type ProgramIntervensiStats = {
    draft: number;
    submit: number;
    approve: number;
};
export type ProgramIntervensiKabKotStats = {
    satker: string;
    draft: number;
    submit: number;
    approve: number;
    total: number;
};
export declare function toProgranIntervensiResponse(input: ProgramIntervensi & {
    intervensiObj: MasterIntervensiNasional;
}): ProgramIntervensiResponse;
//# sourceMappingURL=programintervensi_model.d.ts.map