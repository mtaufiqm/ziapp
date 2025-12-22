"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitData = void 0;
const database_1 = require("../web/database");
const hash_helper_1 = require("../helper/hash_helper");
class InitData {
    static async init() {
        try {
            let adminRole = await database_1.client.roles.createMany({
                data: [
                    {
                        description: "SUPERADMIN"
                    },
                    {
                        description: "ADMIN"
                    },
                    {
                        description: "CHANGE_CHAMPION"
                    },
                    {
                        description: "CHANGE_AGENT"
                    },
                    {
                        description: "CHANGE_LEADER"
                    },
                    {
                        description: "PEGAWAI"
                    },
                ],
            });
            //insert user:
            let user = await database_1.client.user.createManyAndReturn({
                data: [
                    {
                        username: "taufiq.mukhtar",
                        pwd: await hash_helper_1.HashHelper.hash("taufiq1729"),
                        is_active: true
                    },
                    {
                        username: "abdullah3@bps.go.id",
                        pwd: await hash_helper_1.HashHelper.hash("abdullah3"),
                        is_active: true
                    },
                    {
                        username: "sintyadwil@bps.go.id",
                        pwd: await hash_helper_1.HashHelper.hash("sintyadwil"),
                        is_active: true
                    },
                ]
            });
            //insert user_role_bridge
            let userRole = await database_1.client.userRoleBridge.createManyAndReturn({
                data: [
                    {
                        username: "taufiq.mukhtar",
                        description: "SUPERADMIN"
                    },
                    {
                        username: "abdullah3@bps.go.id",
                        description: "SUPERADMIN"
                    },
                    {
                        username: "abdullah3@bps.go.id",
                        description: "CHANGE_CHAMPION"
                    },
                    {
                        username: "sintyadwil@bps.go.id",
                        description: "CHANGE_AGENT"
                    },
                ]
            });
            //insert status_pegawai
            let statusPegawai = await database_1.client.statusPegawai.create({
                data: {
                    description: "AKTIF"
                }
            });
            //insert satker_type
            let satkerType = await database_1.client.satkerType.createMany({
                data: [
                    {
                        id: 0,
                        desc: "PROVINSI"
                    },
                    {
                        id: 1,
                        desc: "KABUPATEN/KOTA"
                    }
                ]
            });
            //insert satker
            let satker = await database_1.client.satker.createMany({
                data: [
                    {
                        code: "7300",
                        desc: "BPS Provinsi Sulawesi Selatan",
                        type: 0
                    },
                    {
                        code: "7317",
                        desc: "BPS Kabupaten Luwu",
                        type: 1
                    }
                ]
            });
            //insert pegawai
            let pegawai = await database_1.client.pegawai.createMany({
                data: [
                    {
                        fullname: "Muh. Taufiq Mukhtar",
                        fullname_with_title: "Muh. Taufiq Mukhtar",
                        nickname: "taufiq",
                        date_of_birth: "29092000",
                        city_of_birth: "Pinrang",
                        nip: "200009292022011004",
                        old_nip: "340061012",
                        age: 25,
                        username: "taufiq.mukhtar",
                        status_pegawai: "AKTIF",
                        phone_number: "089123456789",
                        satker: "7317"
                    },
                    {
                        fullname: "Abdullah Pannu",
                        fullname_with_title: "Abdullah Pannu",
                        nickname: "abdullah",
                        date_of_birth: "",
                        city_of_birth: "Luwu",
                        nip: "200009292022011004",
                        old_nip: "340061012",
                        age: 25,
                        username: "abdullah3@bps.go.id",
                        status_pegawai: "AKTIF",
                        phone_number: "-",
                        satker: "7300"
                    }
                ]
            });
            //insert list_rb
            let listRB = await database_1.client.dukunganRB.createMany({
                data: [
                    {
                        id: 0,
                        desc: "Test1"
                    },
                    {
                        id: 1,
                        desc: "Test2"
                    },
                    {
                        id: 2,
                        desc: "Test3"
                    },
                    {
                        id: 3,
                        desc: "Test4"
                    },
                ]
            });
            let listRaStatus = await database_1.client.rencanaAksiStatus.createMany({
                data: [
                    {
                        id: 0,
                        desc: "DRAFT"
                    },
                    {
                        id: 1,
                        desc: "SUBMIT"
                    },
                    {
                        id: 2,
                        desc: "APPROVE"
                    }
                ]
            });
            let listProgressStatus = await database_1.client.progressStatus.createMany({
                data: [
                    {
                        id: 0,
                        desc: "DRAFT"
                    },
                    {
                        id: 1,
                        desc: "SUBMIT"
                    },
                    {
                        id: 2,
                        desc: "APPROVE"
                    }
                ]
            });
        }
        catch (err) {
            console.info(`Error in Init Data ${err}`);
        }
    }
}
exports.InitData = InitData;
async function main() {
    await InitData.init();
}
main();
//# sourceMappingURL=init.js.map