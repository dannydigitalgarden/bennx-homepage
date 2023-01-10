/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#edf2f4",
        "gray-900": "#282728",
        "sky-500": "#8d99ae",
        "sky-900": "#687692",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "asap-medium": ["Asap-Medium", "sans-serif"],
        "asap-regular": ["Asap-Regular", "sans-serif"],
      },
      animation: {
        "ping-slow": "ping 1.25s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
