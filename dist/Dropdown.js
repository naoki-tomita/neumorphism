"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownDivider = exports.DropdownItem = exports.DropdownMenu = exports.DropdownButton = exports.ButtonGroup = exports.Dropdown = void 0;
var react_1 = __importStar(require("react"));
var Utils_1 = require("./Utils");
exports.Dropdown = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), show = _b[0], setShow = _b[1];
    return (react_1.default.createElement("div", { className: Utils_1.classnames({ dropdown: true, show: !!show }) },
        react_1.default.createElement(exports.DropdownButton, { onClick: function () { return setShow(!show); } }, "v"),
        react_1.default.createElement(exports.DropdownMenu, { show: show }, children)));
};
exports.ButtonGroup = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: "btn-group" }, children));
};
exports.DropdownButton = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement("button", { className: "btn dropdown-toggle dropdown-toggle-split", onClick: onClick }, children));
};
exports.DropdownMenu = function (_a) {
    var show = _a.show, children = _a.children;
    return (react_1.default.createElement("div", { className: Utils_1.classnames({ "dropdown-menu": true, show: !!show }) }, children));
};
exports.DropdownItem = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement("a", { className: "dropdown-item", href: "#", onClick: onClick }, children));
};
exports.DropdownDivider = function () {
    return (react_1.default.createElement("div", { className: "dropdown-divider" }));
};
//# sourceMappingURL=Dropdown.js.map