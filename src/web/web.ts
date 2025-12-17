import express from "express";
import { publicRouter } from "../router/public_api";
import { errorMiddleware } from "../middleware/error_middleware";
import { privateRouter } from "../router/private_api";
import { authMiddleware } from "../middleware/auth_middleware";
import cors from "cors";
import {config as envConfig}from "dotenv";

envConfig({override: true});
let port: number = Number.parseInt(process.env.SERVER_PORT??"8000");

const web = express();
web.set("trust proxy",true);
web.use(cors({
    allowedHeaders:"*",
    exposedHeaders:"*"
}));
web.use(express.json());
web.use(publicRouter);
//private
web.use("/api",authMiddleware);
web.use(privateRouter);

//ERROR
web.use(errorMiddleware);
web.listen(port);