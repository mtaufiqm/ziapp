
export class RolesSet {

    static readonly SUPERADMIN: string = "SUPERADMIN";
    static readonly ADMIN: string = "ADMIN";
    static readonly CHANGE_CHAMPION: string = "CHANGE_CHAMPION";
    static readonly CHANGE_AGENT: string = "CHANGE_AGENT";
    static readonly CHANGE_LEADER: string = "CHANGE_LEADER";
    static readonly PEGAWAI: string = "PEGAWAI";

    /** SUPERADMIN, ADMIN */
    static readonly $1: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION */
    static readonly $2: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN,RolesSet.CHANGE_CHAMPION];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION, CHANGE_AGENT */
    static readonly $3: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN,RolesSet.CHANGE_CHAMPION,RolesSet.CHANGE_AGENT];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION, CHANGE_AGENT, CHANGE_LEADER */
    static readonly $4: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN,RolesSet.CHANGE_CHAMPION,RolesSet.CHANGE_AGENT,RolesSet.CHANGE_LEADER];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION, CHANGE_LEADER */
    static readonly $5: string[] = [RolesSet.SUPERADMIN, RolesSet.ADMIN,RolesSet.CHANGE_CHAMPION,RolesSet.CHANGE_LEADER];
    /** CHANGE_AGENT, CHANGE_LEADER */
    static readonly $6: string[] = [RolesSet.CHANGE_AGENT,RolesSet.CHANGE_LEADER];
}