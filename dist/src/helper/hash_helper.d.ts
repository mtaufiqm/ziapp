import * as jwt from "jsonwebtoken";
export declare class HashHelper {
    static secretKey: string;
    static verify(token: string): jwt.JwtPayload | undefined;
}
//# sourceMappingURL=hash_helper.d.ts.map