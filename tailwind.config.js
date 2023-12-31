/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        "primary":"#9DEA87", 
        "secondary":"#0E3000"
      },
     textColor:{
      "primary":"#0E3000", 
      "header":"#00653d", 
      "in-action":"#9DEA88"
     }, 
    
      fontFamily:{
        beirut:"beirut", 
        plantain:"plantain"
      }
    },
  },
  plugins: [],
}

