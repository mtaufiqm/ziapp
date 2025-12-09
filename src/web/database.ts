import { PrismaPg } from "@prisma/adapter-pg";
import {config as envConfig}from "dotenv";
import { Pool } from "pg";
import {PrismaClient} from "../../generated/prisma/client";

envConfig();
let config = new PrismaPg(new Pool({
    connectionString: process.env.DATABASE_URL
}));


export const client = new PrismaClient({
    adapter: config
});


