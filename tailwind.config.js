/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#E7E9EA",
        third: "#1D9BF0",
        fourth: "#2F3336",
      },
    },
  },
  plugins: [],
}
