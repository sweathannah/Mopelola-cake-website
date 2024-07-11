/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        '50%': '50%',
        '100%': '100%',
        '200%': '200%',
      }
    },
  },
  plugins: [],
}

