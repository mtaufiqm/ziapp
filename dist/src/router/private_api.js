"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRouter = void 0;
const express_1 = __importDefault(require("express"));
const pegawai_controller_1 = require("../controller/pegawai_controller");
const user_controller_1 = require("../controller/user_controller");
const appversion_controller_1 = require("../controller/appversion_controller");
const generatedocx_controller_1 = require("../controller/generatedocx_controller");
const rencanaaksi_controller_1 = require("../controller/rencanaaksi_controller");
const dukunganrb_controller_1 = require("../controller/dukunganrb_controller");
const progressra_controller_1 = require("../controller/progressra_controller");
const uploadfile_middleware_1 = require("../middleware/uploadfile_middleware");
exports.privateRouter = express_1.default.Router();
exports.privateRouter.get("/api/appVersion", appversion_controller_1.AppVersionController.getVersion);
//users
exports.privateRouter.post("/api/users", user_controller_1.UserController.create);
//pegawai
exports.privateRouter.get("/api/pegawai/username/:username", pegawai_controller_1.PegawaiController.getPegawaiByUsername);
exports.privateRouter.post("/api/pegawai", pegawai_controller_1.PegawaiController.createPegawai);
//generate docx
exports.privateRouter.get("/generate_docx", generatedocx_controller_1.GenerateDocxController.generateFile);
//dukungan_rb
exports.privateRouter.get("/api/dukungan_rb", dukunganrb_controller_1.DukunganRbController.getAll);
//rencanaaksi
exports.privateRouter.get("/api/rencana_aksi/biasa", rencanaaksi_controller_1.RencanaAksiController.readAllBySatkerAndTahun);
exports.privateRouter.post("/api/rencana_aksi/biasa", rencanaaksi_controller_1.RencanaAksiController.create);
exports.privateRouter.get("/api/rencana_aksi/biasa/item/:uuid", rencanaaksi_controller_1.RencanaAksiController.getByUuid);
exports.privateRouter.patch("/api/rencana_aksi/biasa/item/:uuid", rencanaaksi_controller_1.RencanaAksiController.update);
exports.privateRouter.delete("/api/rencana_aksi/biasa/item/:uuid", rencanaaksi_controller_1.RencanaAksiController.delete);
exports.privateRouter.get("/api/rencana_aksi/biasa/all", rencanaaksi_controller_1.RencanaAksiController.readAll);
//progress
exports.privateRouter.post("/api/progress/biasa", progressra_controller_1.ProgressRaController.createProgressRa);
exports.privateRouter.get("/api/progress/biasa/item/:uuid", progressra_controller_1.ProgressRaController.getProgressByUuid);
exports.privateRouter.patch("/api/progress/biasa/item/:uuid", progressra_controller_1.ProgressRaController.updateByUuid);
exports.privateRouter.delete("/api/progress/biasa/item/:uuid", progressra_controller_1.ProgressRaController.deleteByUuid);
exports.privateRouter.get("/api/progress/biasa/ra/:uuid", progressra_controller_1.ProgressRaController.readProgressByRaUuid);
exports.privateRouter.delete("/api/progress/biasa/ra/:uuid", progressra_controller_1.ProgressRaController.deleteAllByRaUuid);
//stats
exports.privateRouter.get("/api/stats/rencana_aksi/biasa", rencanaaksi_controller_1.RencanaAksiController.getStats);
//fileupload
exports.privateRouter.use(uploadfile_middleware_1.uploadFileRouter);
//# sourceMappingURL=private_api.js.map