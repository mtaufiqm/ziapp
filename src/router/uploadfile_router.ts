import { Router } from "express";
import fileUpload from "express-fileupload";
import { FileUploadController } from "../controller/fileupload_controller";


export const uploadFileRouter:Router = Router(); 
uploadFileRouter.use(fileUpload());
uploadFileRouter.post("/api/files/upload",FileUploadController.uploadFile);
uploadFileRouter.get("/api/files/item/:uuid",FileUploadController.downloadFile);