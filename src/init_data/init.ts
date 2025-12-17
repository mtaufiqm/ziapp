import { client } from "../web/database";


export class InitData {
    static async init(): Promise<void>{
        try {
            //insert default role:
            let adminRole = await client.roles.createMany({
                data:[
                    {
                        description:"SUPERADMIN"
                    },
                    {
                        description:"ADMIN"
                    },
                ],
            });
            //insert user:
            let user = await client.user.create({
                data: {
                 username:"taufiq.mukhtar",
                 pwd:"2b0098825427fad882e711778013460fc5f54cff2ebde3810f0f77172f295b9b",
                 is_active: true   
                }
            });
            //insert user_role_bridge
            let userRole = await client.userRoleBridge.create({
                data: {
                    username: "taufiq.mukhtar",
                    description: "SUPERADMIN"
                }
            });
            //insert status_pegawai
            let statusPegawai = await client.statusPegawai.create({
                data: {
                    description:"AKTIF"
                }
            });
            //insert satker_type
            let satkerType = await client.satkerType.createMany({
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
            let satker = await client.satker.createMany({
                data: [
                    {
                        code:"7300",
                        desc:"BPS Provinsi Sulawesi Selatan",
                        type: 0
                    },
                    {
                        code:"7317",
                        desc:"BPS Kabupaten Luwu",
                        type: 1
                    }
                ]
            });
            //insert pegawai
            let pegawai = await client.pegawai.create({
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
            let listRB = await client.dukunganRB.createMany({
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
            let listRaStatus = await client.rencanaAksiStatus.createMany({
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
            let listProgressStatus = await client.progressStatus.createMany({
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
        } catch(err){
            console.info(`Error in Init Data ${err}`);
        }
    }
}

async function main(): Promise<void> {
    await InitData.init();
}

main();

