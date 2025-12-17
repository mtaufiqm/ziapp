"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const response_error_1 = require("../error/response_error");
class Validation {
    static validate(schema, data) {
        let result = schema.safeParse(data);
        if (result.error) {
            throw new response_error_1.ResponseError(400, `Error Validation ${result.error}`);
        }
        return result.data;
    }
}
exports.Validation = Validation;
//# sourceMappingURL=validation.js.map