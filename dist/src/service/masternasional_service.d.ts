import { CreateMasterNasional, MasterNasionalResponse, UpdateMasterNasional } from "../model/masternasional_model";
export declare class MasterNasionalService {
    static createMaster(input: CreateMasterNasional): Promise<MasterNasionalResponse>;
    static deleteMasterByUuid(uuid: string): Promise<MasterNasionalResponse>;
    static updateByUuid(uuid: string, update: UpdateMasterNasional): Promise<MasterNasionalResponse>;
}
//# sourceMappingURL=masternasional_service.d.ts.map