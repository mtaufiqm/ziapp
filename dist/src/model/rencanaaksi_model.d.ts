import { RencanaAksi } from "../../generated/prisma/client";
export type RencanaAksiResponse = {
    uuid: string;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    dukungan_rb: number;
    output: string | null;
    timeline: string | null;
    ukuran_keberhasilan: string | null;
    outcome: string | null;
    keterangan: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: Date | null;
    created_by: string;
};
export type CreateRencanaAksi = {
    uuid?: string;
    nama_program?: string;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string;
    timeline?: string;
    ukuran_keberhasilan?: string;
    outcome?: string;
    keterangan?: string;
    status: number;
    tahun: number;
    satker: string;
    created_by: string;
};
export type UpdateRencanaAksi = {
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string;
    dukungan_rb: number;
    output?: string;
    timeline?: string;
    ukuran_keberhasilan?: string;
    outcome?: string | null;
    keterangan?: string | null;
    status?: number;
};
export type SearchRencanaAksi = {
    nama_program?: string;
    dukungan_rb?: number;
    status?: number;
    page: number;
    size: number;
};
export type RencanaAksiStats = {
    draft: number;
    submit: number;
    approve: number;
};
export type RencanaAksiKabKotStats = {
    satker: string;
    draft: number;
    submit: number;
    approve: number;
    total: number;
};
export declare function toRencanaAksiResponse(input: RencanaAksi): RencanaAksiResponse;
//# sourceMappingURL=rencanaaksi_model.d.ts.map