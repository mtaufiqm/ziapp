import express from "express";
import { publicRouter } from "../router/public_api";
import { errorMiddleware } from "../middleware/error_middleware";
import { privateRouter } from "../router/private_api";
import { authMiddleware } from "../middleware/auth_middleware";


const web = express();
web.use(express.json());
web.use(publicRouter);

//private
web.use(authMiddleware);
web.use(privateRouter);

//ERROR
web.use(errorMiddleware);
web.listen(8081);