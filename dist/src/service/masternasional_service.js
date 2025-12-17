"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterNasionalService = void 0;
const masternasional_model_1 = require("../model/masternasional_model");
const database_1 = require("../web/database");
class MasterNasionalService {
    static async createMaster(input) {
        let result = await database_1.client.masterIntervensiNasional.create({
            data: input
        });
        return (0, masternasional_model_1.toMasterNasionalResponse)(result);
    }
    static async deleteMasterByUuid(uuid) {
        let result = await database_1.client.masterIntervensiNasional.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, masternasional_model_1.toMasterNasionalResponse)(result);
    }
    static async updateByUuid(uuid, update) {
        let result = await database_1.client.masterIntervensiNasional.update({
            where: {
                uuid: uuid
            },
            data: update
        });
        return (0, masternasional_model_1.toMasterNasionalResponse)(result);
    }
}
exports.MasterNasionalService = MasterNasionalService;
//# sourceMappingURL=masternasional_service.js.map