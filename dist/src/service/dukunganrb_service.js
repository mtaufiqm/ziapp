"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DukunganRbService = void 0;
const database_1 = require("../web/database");
class DukunganRbService {
    static async getAll() {
        let result = await database_1.client.dukunganRB.findMany({
            orderBy: {
                id: "asc"
            }
        });
        return result;
    }
    static async insert(input) {
        let result = await database_1.client.dukunganRB.create({
            data: input
        });
        return result;
    }
}
exports.DukunganRbService = DukunganRbService;
//# sourceMappingURL=dukunganrb_service.js.map