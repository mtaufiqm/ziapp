"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesSet = void 0;
class RolesSet {
    static SUPERADMIN = "SUPERADMIN";
    static ADMIN = "ADMIN";
    static CHANGE_CHAMPION = "CHANGE_CHAMPION";
    static CHANGE_AGENT = "CHANGE_AGENT";
    static CHANGE_LEADER = "CHANGE_LEADER";
    static PEGAWAI = "PEGAWAI";
    /** SUPERADMIN, ADMIN */
    static $1 = [RolesSet.SUPERADMIN, RolesSet.ADMIN];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION */
    static $2 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.CHANGE_CHAMPION];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION, CHANGE_AGENT */
    static $3 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.CHANGE_CHAMPION, RolesSet.CHANGE_AGENT];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION, CHANGE_AGENT, CHANGE_LEADER */
    static $4 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.CHANGE_CHAMPION, RolesSet.CHANGE_AGENT, RolesSet.CHANGE_LEADER];
    /** SUPERADMIN, ADMIN, CHANGE_CHAMPION, CHANGE_LEADER */
    static $5 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.CHANGE_CHAMPION, RolesSet.CHANGE_LEADER];
    /** CHANGE_AGENT, CHANGE_LEADER */
    static $6 = [RolesSet.CHANGE_AGENT, RolesSet.CHANGE_LEADER];
}
exports.RolesSet = RolesSet;
//# sourceMappingURL=roles_model.js.map