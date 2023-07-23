import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FeaturedMenuDua({ title, image, preimage }) {
    return (_jsxs("div", { className: "max-w-sm bg-soft-yellow border border-white rounded-[40px] shadow-md ", children: [_jsx("div", { className: "relative max-w-full w-[240px] h-[200px] xl:w-[340px] xl:h-[200px] overflow-hidden rounded-[40px]", children: typeof image === "string" ? (_jsx("img", { src: image, alt: preimage, className: "w-full h-full object-cover rounded-br-[100%]" })) : (image) }), _jsx("div", { className: "p-5", children: _jsx("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-black text-center ", children: title }) })] }));
}
export default FeaturedMenuDua;
