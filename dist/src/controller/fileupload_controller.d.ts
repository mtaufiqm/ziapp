import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class FileUploadController {
    static uploadFile(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static downloadFile(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=fileupload_controller.d.ts.map