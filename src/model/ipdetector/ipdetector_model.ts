import { IpDetector } from "../../../generated/prisma/client";


export type CreateIpDetector = {
    ip: string;
    ips: string;
    path: string;
}

export type UpdateIpDetector = {
    ips: string;
    path: string;
}

export type IpDetectorResponse = {
    uuid: string;
    ip: string;
    ips: string;
    path: string;
    created_at: Date;
    last_updated: Date;

}

export function toIpDetectorResponse(data: IpDetector): IpDetectorResponse {
    return data as IpDetectorResponse;
}