import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import {PrismaClient} from "../../generated/prisma/client";
import {config as envConfig}from "dotenv";

envConfig({override: true});

let config = new PrismaPg(new Pool({
    connectionString: process.env.DATABASE_URL
}));

export const client = new PrismaClient({
    adapter: config
});
