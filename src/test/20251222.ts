import * as xlsx from "xlsx";
import z from "zod";
import { HashHelper } from "../helper/hash_helper";
import { client } from "../web/database";

async function initData(): Promise<void> {
    try {
        let workbook = xlsx.readFile("./initData.xlsx");
        let sheet = workbook.Sheets[workbook.SheetNames.at(0)!];
        if(!sheet){
            throw Error("There is no default sheet");
        }
        let data: {
            nama: string;
            code: string;
            satker: string;
            nip: string;
            email: string;
            password?: string; 
        }[] = xlsx.utils.sheet_to_json(sheet);
        //A: Name, B: SATKER, C: 
        for(let i of data){
            try {
                let validateData = z.object({
                    nama: z.coerce.string(),
                    code: z.coerce.string(),
                    satker: z.coerce.string(),
                    nip: z.coerce.string(),
                    email: z.coerce.string(),
                    password: z.coerce.string().optional()
                }).parse(i);
                validateData.password = await HashHelper.hash(validateData.email.trim().split("@").at(0)!);
                // create username first
                let resultCreateUsername = await client.user.create({
                    data: {
                        username: validateData.email.trim(),
                        pwd: validateData.password!,
                        is_active: true
                    }
                });
                // create userrolebridge
                let createUserRoleBridge = await client.userRoleBridge.create({
                    data: {
                        username: validateData.email,
                        description: "CHANGE_AGENT"
                    }
                });
                // create pegawai
                let createPegawai = await client.pegawai.create({
                    data: {
                        fullname: validateData.nama, 
                        fullname_with_title: validateData.nama,
                        nickname: validateData.email.trim().split("@").at(0)!,
                        date_of_birth: validateData.nip.substring(0,9),
                        city_of_birth: "INDONESIA",
                        nip: validateData.nip,
                        username: validateData.email.trim(),
                        status_pegawai: "AKTIF",
                        old_nip: "340123456",
                        satker: validateData.code.trim(),
                        age: (2025 - Number.parseInt(validateData.nip.substring(0,5))),
                        phone_number: "0812345679"
                    }
                });
                console.info(`SUCCESS MENAMBAHKAN ${validateData.nama}`);
            } catch(err2){
                console.info(`Error Iterate Data ${err2} : ${i.nama}`);
            }
        }
        let statusSuccess: string[][] = [];
        let result = xlsx.utils.aoa_to_sheet(statusSuccess);
        xlsx.utils.book_append_sheet(workbook,result,"Result");
        xlsx.writeFileXLSX(workbook,"./resultInitData.xlsx");
    } catch(err){
        if(err instanceof Error){
            console.info(err.message);
        } else {
            console.info(err);
        }
    }
}

initData();
console.info("Sukses");