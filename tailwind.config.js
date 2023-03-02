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
      backgroundColor: {
        "primaryBlue": "#0A7DDA",
        "secondaryBlue": "#2A3E50",
        "primaryWhite": "#FFFFFF",
        "secondaryWhite": "#F5F7FB",
        "primaryGrey": "#d8dadd",
        "secondaryGrey": "#9EA4AB",
      },
      textColor: {
        "primaryBlue": "#0A7DDA",
        "secondaryBlue": "#2A3E50",
        "primaryWhite": "#FFFFFF",
        "secondaryWhite": "#F5F7FB",
        "primaryGrey": "#b2b5b5",
        "secondaryGrey": "#9EA4AB",
        "primaryYellow": "#fedb72"
      },
      borderColor: {
        "primaryBlue": "#0A7DDA",
        "secondaryBlue": "#2A3E50",
        "primaryWhite": "#FFFFFF",
        "secondaryWhite": "#F5F7FB",
        "primaryGrey": "#d8dadd",
        "secondaryGrey": "#9EA4AB",
      }
    },
  },
  plugins: [],
}
