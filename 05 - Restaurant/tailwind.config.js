/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,html,js}"],
  theme: {
    extend: {
      colors: {
        animeRed: {
          DEFAULT: "#DD4854",
          50: "#FFEBEC",
          100: "#FFD7D9",
          200: "#FFB0B3",
          300: "#FF888D",
          400: "#FF6167",
          500: "#DD4854", // This is the main color
          600: "#CC2E3A",
          700: "#BB1320",
          800: "#990F1A",
          900: "#770B14",
        },
      },
    },
  },
  plugins: [],
};
