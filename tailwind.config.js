/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'dark-bg': '#121212',
        'header-footer-bg': '#1e1e1e',
      },
    },
  },
  plugins: [],
}
