/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        "primary":"#004E7C"
      }, 
      fontFamily:{
        beirut:"beirut", 
        plantain:"plantain"
      }
    },
  },
  plugins: [],
}

