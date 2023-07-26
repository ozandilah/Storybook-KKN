/** @type {import('tailwindcss').Config} */

const colors = require("./colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      ring: colors,
      fill: colors,
      fontFamily: {
        sans: ["Poppins"],
      },
      spacing: {
        "3/4": "75%", // 4:3 aspect ratio
        "16/9": "56.25%", // 16:9 aspect ratio
      },
    },
  },
  plugins: [],
};
