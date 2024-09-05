/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#009639",
        bgSection: "#F0F0F0",
        redColor: "#ED2E38",
        grayColor: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
