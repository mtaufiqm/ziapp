"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipdetectorMiddleware = void 0;
const database_1 = require("../web/database");
const ipdetectorMiddleware = async (req, resp, next) => {
    try {
        let ip = req.ip;
        let ips = req.ips;
        let path = req.path;
        if (!ip) {
            next();
        }
        let result = await database_1.client.ipDetector.upsert({
            create: {
                ip: ip,
                ips: ips.join(", "),
                path: path
            },
            update: {
                ips: ips.join(", "),
                path: path
            },
            where: {
                ip: ip
            }
        });
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.ipdetectorMiddleware = ipdetectorMiddleware;
//# sourceMappingURL=ipdetector_middleware.js.map