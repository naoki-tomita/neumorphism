"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var react_1 = __importDefault(require("react"));
require("./css/index");
exports.Box = function (props) {
    var className = Object.entries(props)
        .filter(function (_a) {
        var key = _a[0];
        return key.startsWith("m") || key.startsWith("p");
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return key + "-" + value;
    })
        .join(" ");
    return (react_1.default.createElement("div", { className: className }, props.children));
};
//# sourceMappingURL=Box.js.map