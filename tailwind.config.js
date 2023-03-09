const { keyframes } = require('@emotion/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarymain: "#9155FD",
        primaryalternativelight: "#9E69FD",
        primaryalternativedark: "#6E41C0",
        secondarymain: "#8A8D93",
        secondaryalternative: "#9C9FA4",
        secondaryalternativedark: "#4D5056",
        bglight: "#F4F5FA"
      },
      keyframes: {
        animate:{
          '0%,10%,100%':{
            width:'0%'
          },
          '70%,80%,90%':{
            width:'100%'
          }
        }
      }
    },
      animation: {
        animate: 'animate 4s linear infinite'
      }
    
  },
  plugins: [],
}