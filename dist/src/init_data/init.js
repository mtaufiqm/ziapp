"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitData = void 0;
const database_1 = require("../web/database");
class InitData {
    static async init() {
        try {
            //insert default role:
            let adminRole = await database_1.client.roles.createMany({
                data: [
                    {
                        description: "SUPERADMIN"
                    },
                    {
                        description: "ADMIN"
                    },
                ],
            });
            //insert user:
            let user = await database_1.client.user.create({
                data: {
                    username: "taufiq.mukhtar",
                    pwd: "2b0098825427fad882e711778013460fc5f54cff2ebde3810f0f77172f295b9b",
                    is_active: true
                }
            });
            //insert user_role_bridge
            let userRole = await database_1.client.userRoleBridge.create({
                data: {
                    username: "taufiq.mukhtar",
                    description: "SUPERADMIN"
                }
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
            let pegawai = await database_1.client.pegawai.create({
                data: {
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
                }
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