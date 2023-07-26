"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const config_1 = __importDefault(require("./config"));
function Badge({ 
// destructer
children, state, className, }) {
    const combineClassName = [
        "py-1 px-4  rounded-full inline-flex items-center",
        config_1.default?.state?.[state] || "",
        className || "",
    ];
    return ((0, jsx_runtime_1.jsx)("span", { className: combineClassName.join(" "), children: children && state }));
}
exports.default = Badge;
