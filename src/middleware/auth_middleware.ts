import { NextFunction, Response } from "express"
import { UserRequest } from "../model/user_model";
import { client } from "../web/database";
import { User } from "../../generated/prisma/client";
import { jwt } from "zod";
import { JWTHelper } from "../helper/jwt_helper";
import { JwtPayload } from "jsonwebtoken";


export const authMiddleware = async (req: UserRequest, resp: Response, next:NextFunction): Promise<void> => {
    try {
        var authHeader = req.headers.authorization
        if(authHeader){
            var bearerToken = authHeader.trim().split(" ");
            var jwtToken = bearerToken[1]!;
            var verified = JWTHelper.verify(jwtToken);
            if(!verified){
                resp.sendStatus(401);
                return;
            }
            var username: string = verified.username;
            var roles: string[] = verified.roles;
            var isThereUser = await client.user.count({where:{
                username: username.trim()
            }});
            if(isThereUser != 1){
                resp.sendStatus(401);
                return;
            }
            req.user = {
                username: username,
                roles: roles
            };
            next();
        } else {
            resp.sendStatus(401);
            return;
        }
    } catch(err){
        next(err);
        return;
    }
}