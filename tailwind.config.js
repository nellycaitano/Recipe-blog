/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'h':'Playfair Display',
        'p':'Montserrat'
      },

      boxShadow:{
        'effect':'0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [],
}

