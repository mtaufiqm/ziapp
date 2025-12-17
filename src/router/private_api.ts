import express from "express";
import { PegawaiController } from "../controller/pegawai_controller";
import { UserController } from "../controller/user_controller";
import { AppVersionController } from "../controller/appversion_controller";
import { GenerateDocxController } from "../controller/generatedocx_controller";
import { RencanaAksiController } from "../controller/rencanaaksi_controller";
import { DukunganRbController } from "../controller/dukunganrb_controller";
import { ProgressRaController } from "../controller/progressra_controller";
import { uploadFileRouter } from "./uploadfile_router";
import { LaporanCaController } from "../controller/laporanca_controller";
import { ProgramIntervensiController } from "../controller/programintervensi_controller";
import { MasterNasionalController } from "../controller/masternasional_controller";
import { ProgressIntervensiController } from "../controller/progressintervensi_controller";
import { StatsController } from "../controller/stats_controller";

export const privateRouter = express.Router();
privateRouter.get("/api/appVersion",AppVersionController.getVersion);

//users
privateRouter.post("/api/users", UserController.create);

//pegawai
privateRouter.get("/api/pegawai/username/:username",PegawaiController.getPegawaiByUsername);
privateRouter.post("/api/pegawai",PegawaiController.createPegawai);

//generate docx
privateRouter.get("/generate_docx",GenerateDocxController.generateFile);

//dukungan_rb
privateRouter.get("/api/dukungan_rb",DukunganRbController.getAll);

//rencanaaksi
privateRouter.get("/api/rencana_aksi/biasa",RencanaAksiController.readAllBySatkerAndTahun);
privateRouter.post("/api/rencana_aksi/biasa",RencanaAksiController.create);

privateRouter.get("/api/rencana_aksi/biasa/item/:uuid",RencanaAksiController.getByUuid);
privateRouter.patch("/api/rencana_aksi/biasa/item/:uuid",RencanaAksiController.update);
privateRouter.delete("/api/rencana_aksi/biasa/item/:uuid",RencanaAksiController.delete);

privateRouter.get("/api/rencana_aksi/biasa/all",RencanaAksiController.readAll);

//master_intervensi_nasional
privateRouter.get("/api/master_intervensi",MasterNasionalController.readAll);
privateRouter.post("/api/master_intervensi",MasterNasionalController.create);

privateRouter.patch("/api/rencana_aksi/biasa/item/:uuid",MasterNasionalController.update);
privateRouter.delete("/api/rencana_aksi/biasa/item/:uuid",MasterNasionalController.delete);

//program_intervensi
privateRouter.get("/api/rencana_aksi/khusus",ProgramIntervensiController.readAllBySatkerAndTahun);
privateRouter.post("/api/rencana_aksi/khusus",ProgramIntervensiController.create);

privateRouter.get("/api/rencana_aksi/khusus/item/:uuid",ProgramIntervensiController.getByUuid);
privateRouter.patch("/api/rencana_aksi/khusus/item/:uuid",ProgramIntervensiController.update);
privateRouter.delete("/api/rencana_aksi/khusus/item/:uuid",ProgramIntervensiController.delete);

privateRouter.get("/api/rencana_aksi/khusus/all",ProgramIntervensiController.readAllBySatkerAndTahun);

//progress_biasa
privateRouter.post("/api/progress/biasa",ProgressRaController.createProgressRa);

privateRouter.get("/api/progress/biasa/item/:uuid",ProgressRaController.getProgressByUuid);
privateRouter.patch("/api/progress/biasa/item/:uuid",ProgressRaController.updateByUuid);
privateRouter.delete("/api/progress/biasa/item/:uuid",ProgressRaController.deleteByUuid);

privateRouter.get("/api/progress/biasa/ra/:uuid",ProgressRaController.readProgressByRaUuid);
privateRouter.delete("/api/progress/biasa/ra/:uuid",ProgressRaController.deleteAllByRaUuid);

//progress_intervensi
privateRouter.post("/api/progress/khusus",ProgressIntervensiController.createProgressIntervensi);

privateRouter.get("/api/progress/khusus/item/:uuid",ProgressIntervensiController.getProgressByUuid);
privateRouter.patch("/api/progress/khusus/item/:uuid",ProgressIntervensiController.updateByUuid);
privateRouter.delete("/api/progress/khusus/item/:uuid",ProgressIntervensiController.deleteByUuid);

privateRouter.get("/api/progress/khusus/ra/:uuid",ProgressIntervensiController.readProgressByIntervensiUuid);
privateRouter.delete("/api/progress/khusus/ra/:uuid",ProgressIntervensiController.deleteAllByIntervensiUuid);


//laporan
privateRouter.post("/api/laporan_ca",LaporanCaController.create);
privateRouter.get("/api/laporan_ca",LaporanCaController.readAll);
privateRouter.patch("/api/laporan_ca/item/:uuid",LaporanCaController.update);
privateRouter.delete("/api/laporan_ca/item/:uuid",LaporanCaController.deleteByUuid);

//stats
privateRouter.get("/api/stats/rencana_aksi/biasa",RencanaAksiController.getStats);
privateRouter.get("/api/stats/rencana_aksi/khusus",ProgramIntervensiController.getStats);
privateRouter.get("/api/stats/rencana_aksi",StatsController.getStats);

//fileupload
privateRouter.use(uploadFileRouter);

