/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'huge': '10rem' 
      },
      fontFamily: {
          playfair: ["'Playfair Display'", 'serif'],
          poppins: ["'Poppins'", 'sans-serif'],
          moderustic: ["'Moderustic'", 'sans-serif'],
          sofia: ["'Sofia Sans Condensed'", 'sans-serif'],
          rockSalt: ["'Rock Salt'", 'sans-serif']
      },
      colors: {
        customGreen: '#678457',
        customBlue: '#035b9e',
        customRed: '#b56964',
        customBlueLight: '#58A4B0'
      },
      filter: ['responsive'],
      groupHover: ['responsive'],
    },
  },
  plugins: [],
}