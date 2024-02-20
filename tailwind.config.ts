/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "cover-pattern": "url('/bg-cover.png')",
      },
    },
  },
  plugins: [],
};
