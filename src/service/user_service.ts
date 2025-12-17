import { string } from "zod";
import { ResponseError } from "../error/response_error";
import { HashHelper } from "../helper/hash_helper";
import { JWTHelper } from "../helper/jwt_helper";
import { toUserResponse, UserCreateRequest, UserLoginRequest, UserResponse } from "../model/user_model";
import { client } from "../web/database";


export class UserService {
    static async login(req: UserLoginRequest): Promise<UserResponse> {
        try {
            let username: string = req.username;
            let password: string = req.password;
            let user = await client.user.findFirst({
                where:{username:username},
                include: {
                    roles:true
                }
            });
            if(!user){
                throw new ResponseError(401,`Invalid Username/Password`);
            }
            if(user!.pwd !== await HashHelper.hash(password)){
                throw new ResponseError(401,"Invalid Username/Password");
            }
            return {
                username: user!.username,
                is_active: user!.is_active,
                roles: user!.roles.map((el) => el.description)
            };
        } catch(err){
            console.info(`Error ${err}`);
            throw new ResponseError(401,"UnAuthorized");
        }
    }

    static async create(req: UserCreateRequest): Promise<UserResponse> {
        var username: string = req.username;
        var pwd: string = req.password;
        var roles = req.roles??[];
        var hashedPwd: string = await HashHelper.hash(pwd);
        var result = await client.user.create({
            data:{
                username: username,
                pwd: hashedPwd,
                is_active: true,
                roles: {
                    create: roles.map((el) => ({
                        description: el
                    })),
                    
                }
            },
        });
        var listRole = await client.roles.findMany({
            where:{
                user: {
                    some: {
                        username: username
                    }
                }
            }
        });
        console.info(`List Role ${listRole.map((el) => el.description)}`);
        return toUserResponse(result,listRole);
    }
}