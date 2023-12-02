/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        first: "#161E4A",
        second: "#EFFBF8",
        third: "#A7A3F6",
        fourth: "#FFB874",
        fifth: "#F3F9FE",
        sixth: "#EAF8FE",
      },
    },
  },
  plugins: [],
};
