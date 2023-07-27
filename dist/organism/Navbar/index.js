"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Brand_1 = __importDefault(require("../../atom/Brand"));
function Navbar({ children, cta, pathname, className, image, title }) {
    const [isMenuActive, setMenuActive] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("header", { className: "", children: [(0, jsx_runtime_1.jsx)("nav", { className: "sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30", children: (0, jsx_runtime_1.jsxs)("div", { className: "px-6 container mx-auto flex justify-between items-center py-8", children: [(0, jsx_runtime_1.jsx)(Brand_1.default, { className: "w-16 h-10 mr-12 flex items-center" }), (0, jsx_runtime_1.jsxs)("button", { className: "relative z-30 w-7 h-7 flex lg:hidden flex-col items-center justify-center transition-all gap-y-1 hover:gap-y-2", onClick: () => setMenuActive((prev) => !prev), children: [(0, jsx_runtime_1.jsx)("span", { className: [
                                        "w-7 h-1 bg-yellow transition-all",
                                        isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
                                    ].join(" ") }), (0, jsx_runtime_1.jsx)("span", { className: [
                                        "w-7 h-1 bg-yellow transition-all",
                                        isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
                                    ].join(" ") }), (0, jsx_runtime_1.jsx)("span", { className: [
                                        "w-7 h-1 bg-yellow transition-all",
                                        isMenuActive ? "absolute top-3 -rotate-45" : "rotate-0",
                                    ].join(" ") })] }), (0, jsx_runtime_1.jsxs)("div", { className: [
                                "  gap-y-8 flex w-full flex-col  lg:flex-row items-center justify-center lg:justify-between ",
                                isMenuActive
                                    ? "flex fixed inset-0 bg-white z-20 backdrop-filter backdrop-blur-lg bg-opacity-70 justify-center -bottom-full py-80 "
                                    : "relative hidden md:flex",
                            ].join(" "), children: [(0, jsx_runtime_1.jsx)("ul", { className: [
                                        "flex lg:flex flex-col items-center gap-y-8 ml-auto lg:ml-0 mr-auto gap-x-8",
                                        isMenuActive
                                            ? "font-bold lg:flex lg:justify-between"
                                            : "md:hidden md:flex-row",
                                    ].join(" "), children: react_1.Children.toArray(children).map((menu, i) => {
                                        return ((0, jsx_runtime_1.jsx)("li", { className: "", children: (0, jsx_runtime_1.jsx)(menu.type, { ...menu.props, className: pathname === menu.props.href
                                                    ? className.active
                                                    : className.idle, children: (0, jsx_runtime_1.jsx)(menu.props.children.type, { className: [
                                                        ...(menu?.props?.children?.props?.className ??
                                                            ""),
                                                        pathname === menu.props.href
                                                            ? className.active
                                                            : className.idle,
                                                    ].join(" "), children: menu.props.children.props.children }) }) }, i));
                                    }) }), (0, jsx_runtime_1.jsx)("div", { className: [
                                        "flex flex-col gap-y-8 gap-x-4 mr-auto ml-auto",
                                        isMenuActive ? "lg:flex-row lg:mr-0" : "md:flex-row md:mr-0",
                                    ].join(" "), children: cta })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [typeof image === "string" ? ((0, jsx_runtime_1.jsx)("img", { src: image, alt: title, className: "w-full bg-cover bg-center h-[33rem]" })) : (image), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 flex items-center justify-start", children: (0, jsx_runtime_1.jsx)("div", { className: "text-center p-32", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-white text-3xl font-bold uppercase md:text-6xl", children: "Desa Bandung" }) }) })] })] }));
}
exports.default = Navbar;
