/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: [`"Montserrat"`],
      },
      width: {
        100: "26rem",
        110: "28rem",
        120: "30rem",
        130: "32rem",
        140: "34rem",
        150: "36rem",
        160: "38rem",
        170: "40rem",
      },
    },
  },
  plugins: [],
};
