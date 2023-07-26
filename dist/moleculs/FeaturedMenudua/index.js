"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function FeaturedMenuDua({ title, image, preimage }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "max-w-sm bg-soft-yellow border border-white rounded-[40px] shadow-md ", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative max-w-full w-[240px] h-[200px] xl:w-[340px] xl:h-[200px] overflow-hidden rounded-[40px]", children: typeof image === "string" ? ((0, jsx_runtime_1.jsx)("img", { src: image, alt: preimage, className: "w-full h-full object-cover rounded-br-[100%]" })) : (image) }), (0, jsx_runtime_1.jsx)("div", { className: "p-5", children: (0, jsx_runtime_1.jsx)("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-black text-center ", children: title }) })] }));
}
exports.default = FeaturedMenuDua;
