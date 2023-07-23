import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useState } from "react";
import Brand from "components/atom/Brand";
function Navbar({ children, cta, pathname, className }) {
    const [isMenuActive, setMenuActive] = useState(false);
    return (_jsx("header", { className: "sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 border-b border-gray-200", children: _jsxs("div", { className: "px-4 container mx-auto flex justify-between items-center py-8", children: [_jsx(Brand, { className: "w-16 h-10 mr-12 flex items-center" }), _jsxs("button", { className: "relative z-30 w-7 h-7 flex lg:hidden flex-col items-center justify-center transition-all gap-y-1 hover:gap-y-2", onClick: () => setMenuActive((prev) => !prev), children: [_jsx("span", { className: [
                                "w-7 h-1 bg-yellow transition-all",
                                isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
                            ].join(" ") }), _jsx("span", { className: [
                                "w-7 h-1 bg-yellow transition-all",
                                isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
                            ].join(" ") }), _jsx("span", { className: [
                                "w-7 h-1 bg-yellow transition-all",
                                isMenuActive ? "absolute top-3 -rotate-45" : "rotate-0",
                            ].join(" ") })] }), _jsxs("div", { className: [
                        "bg-white z-20 gap-y-8 flex w-full flex-col  lg:flex-row items-center justify-center lg:justify-between",
                        isMenuActive ? "flex fixed inset-0" : "relative hidden md:flex",
                    ].join(" "), children: [_jsx("ul", { className: [
                                "flex lg:flex flex-col items-center gap-y-8 ml-auto lg:ml-0 mr-auto gap-x-8",
                                isMenuActive ? "flex" : "md:hidden md:flex-row",
                            ].join(" "), children: Children.toArray(children).map((menu, i) => {
                                return (_jsx("li", { className: "", children: _jsx(menu.type, { ...menu.props, className: pathname === menu.props.href
                                            ? className.active
                                            : className.idle, children: _jsx(menu.props.children.type, { className: [
                                                ...(menu?.props?.children?.props?.className ?? ""),
                                                pathname === menu.props.href
                                                    ? className.active
                                                    : className.idle,
                                            ].join(" "), children: menu.props.children.props.children }) }) }, i));
                            }) }), _jsx("div", { className: [
                                "flex flex-col gap-y-8 gap-x-4 mr-auto ml-auto",
                                isMenuActive ? "lg:flex-row lg:mr-0" : "md:flex-row md:mr-0",
                            ].join(" "), children: cta })] })] }) }));
}
export default Navbar;
