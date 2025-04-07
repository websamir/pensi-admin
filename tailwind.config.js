/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
      },
      colors: {
        'primary': '#0b2c3c',
        'secondary': '#f8f9fa',
        'warning': '#dd1f4b',
        'acent': '#20b2a9',
        'text': '#ffffff'
      }
    },
  },
  plugins: [],
}

