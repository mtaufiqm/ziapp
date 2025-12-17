"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const database_1 = require("../web/database");
(0, dotenv_1.config)();
console.info(process.env.DATABASE_URL);
async function test() {
    let result = await database_1.client.user.delete({
        where: {
            username: "muhtaufiqmukhtar"
        }
    });
    console.info(`SUCCESS DELETE : \n ${result}`);
}
test();
//# sourceMappingURL=cobacoba.js.map