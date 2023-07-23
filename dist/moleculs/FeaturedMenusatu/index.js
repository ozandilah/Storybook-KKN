import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FeaturedMenuSatu({ title, image, preimage }) {
    return (_jsxs("div", { className: "w-[276px] h-[263px] bg-soft-yellow border border-white rounded-[40px] shadow-md ", children: [_jsx("div", { className: "relative max-w-full w-[200px] h-[200px] xl:w-[250px] xl:h-[200px] overflow-hidden rounded-[40px]", children: typeof image === "string" ? (_jsx("img", { src: image, alt: preimage, className: "w-[200px] h-[180px] object-cover rounded-br-[180px] rounded-tr-[180px] rounded-bl-[180px] " })) : (image) }), _jsx("div", { className: "p-5", children: _jsx("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-black text-center ", children: title }) })] }));
}
export default FeaturedMenuSatu;
