import { Pegawai } from "../../generated/prisma/client";




export type PegawaiResponse = {
  fullname: string | null;
  fullname_with_title: string | null;
  nickname: string | null;
  date_of_birth: string | null;
  city_of_birth: string | null;
  nip: string | null;
  old_nip: string | null;
  age: number;
  username: string | null;
  status_pegawai: string | null;
  phone_number: string | null;
  satker: string | null;
};

export type CreatePegawaiRequest = {
    fullname?: string;
    fullname_with_title?: string;
    nickname?: string;
    date_of_birth?: string;
    city_of_birth?: string;
    nip?: string;
    old_nip?: string;
    age: number;
    username?: string;
    status_pegawai?: string;
    phone_number?: string;
    satker?: string;
}

export type UpdatePegawaiRequest = {
    fullname?: string;
    fullname_with_title?: string;
    nickname?: string;
    date_of_birth?: string;
    city_of_birth?: string;
    nip?: string;
    old_nip?: string;
    age?: number;
    status_pegawai?: string;
    phone_number?: string;
    satker?: string;
};

export function toPegawaiResponse(pegawai: Pegawai): PegawaiResponse {
    return pegawai as PegawaiResponse;
}

