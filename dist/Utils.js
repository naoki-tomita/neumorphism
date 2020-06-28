"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classnames = void 0;
function classnames(params) {
    return Object.entries(params).filter(function (_a) {
        var enabled = _a[1];
        return enabled;
    }).map(function (_a) {
        var key = _a[0];
        return key;
    }).join(" ");
}
exports.classnames = classnames;
//# sourceMappingURL=Utils.js.map