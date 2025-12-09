import express from "express";
import { authenticateApi } from "../routes/api/authenticate";

export const publicRouter = express.Router();
publicRouter.post("/authenticate",authenticateApi);
