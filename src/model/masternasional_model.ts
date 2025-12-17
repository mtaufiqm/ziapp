import { MasterIntervensiNasional } from "../../generated/prisma/client";

export type MasterNasionalResponse = {
    uuid: string | null;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    output: string | null;
    timeline: string | null; 
    ukuran_keberhasilan: string | null; 
    outcome: string | null; 
    keterangan: string | null; 
    tahun: number;
    last_updated: Date | null;
    created_by: string;
};

export type CreateMasterNasional = {
    nama_program: string;
    uraian_kegiatan: string;
    isu_strategis: string;
    output: string;
    timeline: string; 
    ukuran_keberhasilan: string; 
    outcome: string; 
    keterangan: string; 
    tahun: number;
    created_by: string;
};

export type UpdateMasterNasional = {
    nama_program?: string;
    uraian_kegiatan?: string;
    isu_strategis?: string;
    output?: string;
    timeline?: string; 
    ukuran_keberhasilan?: string; 
    outcome?: string; 
    keterangan?: string; 
    tahun?: number;
    created_by?: string;
};

export function toMasterNasionalResponse(input: MasterIntervensiNasional) {
    return input as MasterNasionalResponse;
}