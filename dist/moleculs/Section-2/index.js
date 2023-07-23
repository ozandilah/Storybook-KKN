import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function SectionDua({ content, image, title, button }) {
    return (_jsx("div", { className: "container mx-auto px-4 group", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-28 xl:gap-x-36", children: [_jsxs("div", { className: "w-full md:w-4/12 2xl:w-3/12 md:group-odd:order-2 md:group-even:order-1", children: [_jsx("h3", { className: "text-[#FFDE32] uppercase font-bold mb-3 text-4xl", children: content.preheading || "Pre Heading" }), _jsx("h3", { className: "text-black leading-8 mb-8", children: content.paragraph || "Paragraph" }), _jsx("div", { children: button })] }), _jsx("div", { className: "relative md:group-odd:order-1 md:group-even:order-2", children: _jsx("div", { className: "relative max-w-full w-[460px] h-[449px] xl:w-[460px] xl:h-[449px] rounded-tr-[59px] rounded-bl-[59px] rounded-tl-3xl rounded-br-3xl overflow-hidden", children: typeof image === "string" ? (_jsx("img", { src: image, alt: title })) : (image) }) })] }) }));
}
export default SectionDua;