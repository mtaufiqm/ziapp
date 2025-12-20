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
const uploadfile_router_1 = require("./uploadfile_router");
const laporanca_controller_1 = require("../controller/laporanca_controller");
const programintervensi_controller_1 = require("../controller/programintervensi_controller");
const masternasional_controller_1 = require("../controller/masternasional_controller");
const progressintervensi_controller_1 = require("../controller/progressintervensi_controller");
const stats_controller_1 = require("../controller/stats_controller");
exports.privateRouter = express_1.default.Router();
exports.privateRouter.get("/api/appVersion", appversion_controller_1.AppVersionController.getVersion);
//users
exports.privateRouter.post("/api/users", user_controller_1.UserController.create);
//pegawai
exports.privateRouter.get("/api/pegawai/username/:username", pegawai_controller_1.PegawaiController.getPegawaiByUsername);
exports.privateRouter.post("/api/pegawai", pegawai_controller_1.PegawaiController.createPegawai);
//generate docx
exports.privateRouter.get("/api/generate_docx", generatedocx_controller_1.GenerateDocxController.generateFile);
//dukungan_rb
exports.privateRouter.get("/api/dukungan_rb", dukunganrb_controller_1.DukunganRbController.getAll);
//rencanaaksi
exports.privateRouter.get("/api/rencana_aksi/biasa", rencanaaksi_controller_1.RencanaAksiController.readAllBySatkerAndTahun);
exports.privateRouter.post("/api/rencana_aksi/biasa", rencanaaksi_controller_1.RencanaAksiController.create);
exports.privateRouter.get("/api/rencana_aksi/biasa/search", rencanaaksi_controller_1.RencanaAksiController.search);
exports.privateRouter.get("/api/rencana_aksi/biasa/item/:uuid", rencanaaksi_controller_1.RencanaAksiController.getByUuid);
exports.privateRouter.patch("/api/rencana_aksi/biasa/item/:uuid", rencanaaksi_controller_1.RencanaAksiController.update);
exports.privateRouter.delete("/api/rencana_aksi/biasa/item/:uuid", rencanaaksi_controller_1.RencanaAksiController.delete);
exports.privateRouter.get("/api/rencana_aksi/biasa/all", rencanaaksi_controller_1.RencanaAksiController.readAll);
//master_intervensi_nasional
exports.privateRouter.get("/api/master_intervensi", masternasional_controller_1.MasterNasionalController.readAll);
exports.privateRouter.post("/api/master_intervensi", masternasional_controller_1.MasterNasionalController.create);
exports.privateRouter.patch("/api/master_intervensi/item/:uuid", masternasional_controller_1.MasterNasionalController.update);
exports.privateRouter.delete("/api/master_intervensi/item/:uuid", masternasional_controller_1.MasterNasionalController.delete);
//program_intervensi
exports.privateRouter.get("/api/rencana_aksi/khusus", programintervensi_controller_1.ProgramIntervensiController.readAllBySatkerAndTahun);
exports.privateRouter.post("/api/rencana_aksi/khusus", programintervensi_controller_1.ProgramIntervensiController.create);
exports.privateRouter.get("/api/rencana_aksi/khusus/item/:uuid", programintervensi_controller_1.ProgramIntervensiController.getByUuid);
exports.privateRouter.patch("/api/rencana_aksi/khusus/item/:uuid", programintervensi_controller_1.ProgramIntervensiController.update);
exports.privateRouter.delete("/api/rencana_aksi/khusus/item/:uuid", programintervensi_controller_1.ProgramIntervensiController.delete);
exports.privateRouter.get("/api/rencana_aksi/khusus/all", programintervensi_controller_1.ProgramIntervensiController.readAllBySatkerAndTahun);
//progress_biasa
exports.privateRouter.post("/api/progress/biasa", progressra_controller_1.ProgressRaController.createProgressRa);
exports.privateRouter.get("/api/progress/biasa/item/:uuid", progressra_controller_1.ProgressRaController.getProgressByUuid);
exports.privateRouter.patch("/api/progress/biasa/item/:uuid", progressra_controller_1.ProgressRaController.updateByUuid);
exports.privateRouter.delete("/api/progress/biasa/item/:uuid", progressra_controller_1.ProgressRaController.deleteByUuid);
exports.privateRouter.get("/api/progress/biasa/ra/:uuid", progressra_controller_1.ProgressRaController.readProgressByRaUuid);
exports.privateRouter.delete("/api/progress/biasa/ra/:uuid", progressra_controller_1.ProgressRaController.deleteAllByRaUuid);
//progress_intervensi
exports.privateRouter.post("/api/progress/khusus", progressintervensi_controller_1.ProgressIntervensiController.createProgressIntervensi);
exports.privateRouter.get("/api/progress/khusus/item/:uuid", progressintervensi_controller_1.ProgressIntervensiController.getProgressByUuid);
exports.privateRouter.patch("/api/progress/khusus/item/:uuid", progressintervensi_controller_1.ProgressIntervensiController.updateByUuid);
exports.privateRouter.delete("/api/progress/khusus/item/:uuid", progressintervensi_controller_1.ProgressIntervensiController.deleteByUuid);
exports.privateRouter.get("/api/progress/khusus/ra/:uuid", progressintervensi_controller_1.ProgressIntervensiController.readProgressByIntervensiUuid);
exports.privateRouter.delete("/api/progress/khusus/ra/:uuid", progressintervensi_controller_1.ProgressIntervensiController.deleteAllByIntervensiUuid);
//laporan
exports.privateRouter.post("/api/laporan_ca", laporanca_controller_1.LaporanCaController.create);
exports.privateRouter.get("/api/laporan_ca", laporanca_controller_1.LaporanCaController.readAll);
exports.privateRouter.patch("/api/laporan_ca/item/:uuid", laporanca_controller_1.LaporanCaController.update);
exports.privateRouter.delete("/api/laporan_ca/item/:uuid", laporanca_controller_1.LaporanCaController.deleteByUuid);
//stats
exports.privateRouter.get("/api/stats/rencana_aksi/biasa", rencanaaksi_controller_1.RencanaAksiController.getStats);
exports.privateRouter.get("/api/stats/rencana_aksi/khusus", programintervensi_controller_1.ProgramIntervensiController.getStats);
exports.privateRouter.get("/api/stats/rencana_aksi", stats_controller_1.StatsController.getStats);
//fileupload
exports.privateRouter.use(uploadfile_router_1.uploadFileRouter);
//# sourceMappingURL=private_api.js.map