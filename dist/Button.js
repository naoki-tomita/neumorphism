"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
require("./css/index");
var Utils_1 = require("./Utils");
exports.Button = function (props) {
    var _a, _b;
    var className = Utils_1.classnames(__assign(__assign(__assign({ btn: true }, (props.color ? (_a = {}, _a["btn-" + props.color] = true, _a) : {})), (props.textColor ? (_b = {}, _b["text-" + props.textColor] = true, _b) : {})), { "btn-pill": !!props.pill }));
    return (react_1.default.createElement("button", { className: className }, props.children));
};
//# sourceMappingURL=Button.js.map