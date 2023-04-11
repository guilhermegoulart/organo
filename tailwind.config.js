/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      banner: '#6278f7',
      white: '#ffffff',
      cinza: '#f2f2f2',
    },
    extend: {
      boxShadow: {
        '3xl': '10px 10px 30px rgba(0, 0, 0, 0.06)',
        '2': '8px 8px 16px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}

