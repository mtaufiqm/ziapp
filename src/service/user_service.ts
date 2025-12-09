import { ResponseError } from "../error/response_error";
import { HashHelper } from "../helper/hash_helper";
import { JWTHelper } from "../helper/jwt_helper";
import { UserLoginRequest, UserResponse } from "../model/user_model";
import { client } from "../web/database";


export class UserService {
    static async login(req: UserLoginRequest): Promise<UserResponse> {
        try {
            var username: string = req.username;
            var password: string = req.password;
            var user = await client.user.findFirst({
                where:{username:username},
                include: {
                    roles:true
                }
            });
            if(!user){
                throw new ResponseError(401,`Invalid Username/Password`);
            }
            if(user!.pwd !== await HashHelper.hash(req.password)){
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
}