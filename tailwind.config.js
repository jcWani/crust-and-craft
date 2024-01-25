/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Rubik, sans-serif",
    },

    extend: {
      colors: {
        pizza: "#123456",
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
