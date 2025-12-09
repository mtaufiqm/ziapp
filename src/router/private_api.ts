import express from "express";
import { appVersion } from "../routes/api_version";

export const privateRouter = express.Router();
privateRouter.get("/api/appVersion",appVersion);
