/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
       
        "yellow": "#FEC201",
        "lightYellow": "#FFE799",
        "lightBlue": "#041C2F",
        "blue": "#034460",

      },
      screens: {
        "xs": "350px"
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark"],
  },
}

