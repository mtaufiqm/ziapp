"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_pg_1 = require("@prisma/adapter-pg");
const dotenv_1 = require("dotenv");
const pg_1 = require("pg");
(0, dotenv_1.config)();
let config = new adapter_pg_1.PrismaPg(new pg_1.Pool({
    connectionString: ""
}));
//# sourceMappingURL=database.js.map