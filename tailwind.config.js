/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      banner: '#6278f7',
      white: '#ffffff',
    },
    extend: {
      boxShadow: {
        '3xl': '10px 10px 30px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

