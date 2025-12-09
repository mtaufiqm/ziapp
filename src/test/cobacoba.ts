import { config } from "dotenv"
import { client } from "../web/database";

config();
console.info(process.env.DATABASE_URL);

async function test(): Promise<void> {
    var result = await client.user.delete({
        where:{
            username:"muhtaufiqmukhtar"
        }
    });
    console.info(`SUCCESS DELETE : \n ${result}`);
} 

test();