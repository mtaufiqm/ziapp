import * as jwt from "jsonwebtoken";
import { UserResponse } from "../model/user_model";
import { ResponseError } from "../error/response_error";
export class JWTHelper {
    static secretKey: string = "taufiq1729taufiq1729taufiq1729";
    static verify(token: string) : jwt.JwtPayload | undefined {
        try {
            var returnToken = jwt.verify(token,JWTHelper.secretKey);
            if(typeof returnToken === "string"){
                return undefined;
            }
            return returnToken;
        } catch(err){
            return undefined;
        }
    }

    static async create(data: UserResponse): Promise<string> {
        try {
            var token = jwt.sign({
                username: data.username,
                roles: data.roles
            },JWTHelper.secretKey);
            return token;
        } catch(err){
            throw new ResponseError(401,"Failed Login.");
        }
    }
}