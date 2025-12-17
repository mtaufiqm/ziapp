import express from "express";
import { AuthController } from "../controller/auth_controller";
import { ipdetectorMiddleware } from "../middleware/ipdetector_middleware";

export const publicRouter = express.Router();
publicRouter.post("/authenticate",AuthController.login);


//ip_detector
publicRouter.use("/public/file",ipdetectorMiddleware);
publicRouter.use("/public/file",express.static("../upload/public"));
