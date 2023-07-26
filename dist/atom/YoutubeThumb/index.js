"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function YoutubeThumb({ url }) {
    // Parse the video ID from the YouTube URL
    const videoId = url.split("v=")[1];
    if (videoId) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2", children: (0, jsx_runtime_1.jsx)("div", { className: "aspect-w-16 aspect-h-9 rounded-lg overflow-hidden", children: (0, jsx_runtime_1.jsx)("iframe", { className: "w-full h-full", src: `https://www.youtube.com/embed/${videoId}`, title: "Embedded video", allowFullScreen: true }) }) }));
    }
    else {
        return (0, jsx_runtime_1.jsx)("div", { children: "Invalid YouTube URL" });
    }
}
exports.default = YoutubeThumb;
