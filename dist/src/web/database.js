"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const client_1 = require("../../generated/prisma/client");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ override: true });
let config = new adapter_pg_1.PrismaPg(new pg_1.Pool({
    connectionString: process.env.DATABASE_URL
}));
exports.client = new client_1.PrismaClient({
    adapter: config
});
//# sourceMappingURL=database.js.map