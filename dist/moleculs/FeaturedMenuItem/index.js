"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function FeaturedMenuItem({ title, image, preimage }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative w-[276px] h-[263px]  flex flex-col rounded-xl bg-soft-yellow bg-clip-border text-gray-700 shadow-md", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative mx-4 -mt-6 h-40 sm:h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40", children: typeof image === "string" ? ((0, jsx_runtime_1.jsx)("img", { src: image, alt: preimage, className: "w-full h-full object-cover" })) : (image) }), (0, jsx_runtime_1.jsx)("div", { className: "p-6", children: (0, jsx_runtime_1.jsx)("h5", { className: "mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center", children: title }) })] }));
}
exports.default = FeaturedMenuItem;
