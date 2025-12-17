import { DukunganRB } from "../../generated/prisma/client";
export type DukunganRbResponse = {
    id: number;
    desc: string;
};
export type CreateDukunganRbRequest = {
    id: number;
    desc: string;
};
export type UpdateDukunganRbRequest = {
    id?: number;
    desc?: string;
};
export declare function toDukunganRbResponse(input: DukunganRB): DukunganRbResponse;
//# sourceMappingURL=dukunganrb_model.d.ts.map