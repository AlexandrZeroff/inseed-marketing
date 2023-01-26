/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smooth-red': '#D1180D',
      },
      gridTemplateColumns: {
        // Columns for footer grid
        'footer': '1fr 2fr',
      },
      screens: {
        'xxs': '460px',
        'xs': '560px',
        'tablet': '920px',
      },
    },
  },
  plugins: [],
}
