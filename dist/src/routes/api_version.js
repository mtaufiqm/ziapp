"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appVersion = appVersion;
async function appVersion(req, resp, next) {
    resp.status(200).send({
        appVersion: "1.0.0"
    });
}
//# sourceMappingURL=api_version.js.map