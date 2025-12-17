import { CreatePegawaiRequest, PegawaiResponse, UpdatePegawaiRequest } from "../model/pegawai_model";
export declare class PegawaiService {
    static getByUsername(username: string): Promise<PegawaiResponse>;
    static create(request: CreatePegawaiRequest): Promise<PegawaiResponse>;
    static deleteByUsername(username: string): Promise<PegawaiResponse>;
    static updateByUsername(username: string, update: UpdatePegawaiRequest): Promise<PegawaiResponse>;
}
//# sourceMappingURL=pegawai_service.d.ts.map