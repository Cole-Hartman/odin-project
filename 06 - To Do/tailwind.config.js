/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,html,js}"],
  theme: {
    extend: {
      colors: {
        cblack: {
          300: "#2A2E33",
          400: "#202020",
          500: "#1A1A1A",
        },
        cpurp: {
          300: "#B9A1DB",
        },
        cblue: {
          300: "#6F86FF",
        },
        cgray: {
          300: "#333333",
        },
      },
    },
  },
  plugins: [],
};
