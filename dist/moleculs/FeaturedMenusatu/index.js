"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function FeaturedMenuSatu({ title, image, preimage }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-[276px] h-[263px] bg-soft-yellow border border-white rounded-[40px] shadow-md ", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative max-w-full w-[200px] h-[200px] xl:w-[250px] xl:h-[200px] overflow-hidden rounded-[40px]", children: typeof image === "string" ? ((0, jsx_runtime_1.jsx)("img", { src: image, alt: preimage, className: "w-[200px] h-[180px] object-cover rounded-br-[180px] rounded-tr-[180px] rounded-bl-[180px] " })) : (image) }), (0, jsx_runtime_1.jsx)("div", { className: "p-5", children: (0, jsx_runtime_1.jsx)("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-black text-center ", children: title }) })] }));
}
exports.default = FeaturedMenuSatu;
