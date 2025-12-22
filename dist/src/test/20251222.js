"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx = __importStar(require("xlsx"));
const zod_1 = __importDefault(require("zod"));
const hash_helper_1 = require("../helper/hash_helper");
const database_1 = require("../web/database");
async function initData() {
    try {
        let workbook = xlsx.readFile("./initData.xlsx");
        let sheet = workbook.Sheets[workbook.SheetNames.at(0)];
        if (!sheet) {
            throw Error("There is no default sheet");
        }
        let data = xlsx.utils.sheet_to_json(sheet);
        //A: Name, B: SATKER, C: 
        for (let i of data) {
            try {
                let validateData = zod_1.default.object({
                    nama: zod_1.default.coerce.string(),
                    code: zod_1.default.coerce.string(),
                    satker: zod_1.default.coerce.string(),
                    nip: zod_1.default.coerce.string(),
                    email: zod_1.default.coerce.string(),
                    password: zod_1.default.coerce.string().optional()
                }).parse(i);
                validateData.password = await hash_helper_1.HashHelper.hash(validateData.email.trim().split("@").at(0));
                // create username first
                let resultCreateUsername = await database_1.client.user.create({
                    data: {
                        username: validateData.email.trim(),
                        pwd: validateData.password,
                        is_active: true
                    }
                });
                // create userrolebridge
                let createUserRoleBridge = await database_1.client.userRoleBridge.create({
                    data: {
                        username: validateData.email,
                        description: "CHANGE_AGENT"
                    }
                });
                // create pegawai
                let createPegawai = await database_1.client.pegawai.create({
                    data: {
                        fullname: validateData.nama,
                        fullname_with_title: validateData.nama,
                        nickname: validateData.email.trim().split("@").at(0),
                        date_of_birth: validateData.nip.substring(0, 9),
                        city_of_birth: "INDONESIA",
                        nip: validateData.nip,
                        username: validateData.email.trim(),
                        status_pegawai: "AKTIF",
                        old_nip: "340123456",
                        satker: validateData.code.trim(),
                        age: (2025 - Number.parseInt(validateData.nip.substring(0, 5))),
                        phone_number: "0812345679"
                    }
                });
                console.info(`SUCCESS MENAMBAHKAN ${validateData.nama}`);
            }
            catch (err2) {
                console.info(`Error Iterate Data ${err2} : ${i.nama}`);
            }
        }
        let statusSuccess = [];
        let result = xlsx.utils.aoa_to_sheet(statusSuccess);
        xlsx.utils.book_append_sheet(workbook, result, "Result");
        xlsx.writeFileXLSX(workbook, "./resultInitData.xlsx");
    }
    catch (err) {
        if (err instanceof Error) {
            console.info(err.message);
        }
        else {
            console.info(err);
        }
    }
}
initData();
console.info("Sukses");
//# sourceMappingURL=20251222.js.map