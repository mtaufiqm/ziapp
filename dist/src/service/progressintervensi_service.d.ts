import { CreateProgressIntervensi, ProgressIntervensiResponse, UpdateProgressIntervensi } from "../model/progressintervensi_model";
export declare class ProgressIntervensiService {
    static readAllByIntervensiUuid(uuid: string): Promise<ProgressIntervensiResponse[]>;
    static getByUuid(uuid: string): Promise<ProgressIntervensiResponse>;
    static readAll(): Promise<ProgressIntervensiResponse[]>;
    static create(input: CreateProgressIntervensi): Promise<ProgressIntervensiResponse>;
    static delete(uuid: string): Promise<ProgressIntervensiResponse>;
    static deleteAllByRaUuuid(uuid: string): Promise<number>;
    static updateByUuid(uuid: string, input: UpdateProgressIntervensi): Promise<ProgressIntervensiResponse>;
}
//# sourceMappingURL=progressintervensi_service.d.ts.map