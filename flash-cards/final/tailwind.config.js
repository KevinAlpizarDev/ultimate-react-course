/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "selected": {
          DEFAULT: "#e03131"
        },
        "border-selected": {
          DEFAULT: " #e03"
        }
      }
    },
  },
  plugins: [],
}