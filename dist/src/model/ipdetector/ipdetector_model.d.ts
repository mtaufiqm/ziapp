import { IpDetector } from "../../../generated/prisma/client";
export type CreateIpDetector = {
    ip: string;
    ips: string;
    path: string;
};
export type UpdateIpDetector = {
    ips: string;
    path: string;
};
export type IpDetectorResponse = {
    uuid: string;
    ip: string;
    ips: string;
    path: string;
    created_at: Date;
    last_updated: Date;
};
export declare function toIpDetectorResponse(data: IpDetector): IpDetectorResponse;
//# sourceMappingURL=ipdetector_model.d.ts.map