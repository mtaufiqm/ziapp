import { CreateProgressRaRequest, ProgressRaResponse, UpdateProgressRaRequest } from "../model/progressra_model";
export declare class ProgressRaService {
    static readAllByRaUuid(ra: string): Promise<ProgressRaResponse[]>;
    static getByUuid(uuid: string): Promise<ProgressRaResponse>;
    static readAll(): Promise<ProgressRaResponse[]>;
    static create(input: CreateProgressRaRequest): Promise<ProgressRaResponse>;
    static delete(uuid: string): Promise<ProgressRaResponse>;
    static deleteAllByRaUuuid(uuid: string): Promise<number>;
    static updateByUuid(uuid: string, input: UpdateProgressRaRequest): Promise<ProgressRaResponse>;
}
//# sourceMappingURL=progressra_service.d.ts.map