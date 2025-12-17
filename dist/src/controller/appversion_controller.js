"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppVersionController = void 0;
class AppVersionController {
    static async getVersion(req, resp, next) {
        resp.status(200).json({
            appVersion: "1.0.0",
            user: req.user
        });
        return;
    }
}
exports.AppVersionController = AppVersionController;
//# sourceMappingURL=appversion_controller.js.map