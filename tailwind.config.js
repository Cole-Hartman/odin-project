/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // Include all HTML and JS files in the root directory
    "!./*/**",
  ], // Exclude all files in all subdirectories],
  theme: {
    extend: {},
  },
  plugins: [],
};
