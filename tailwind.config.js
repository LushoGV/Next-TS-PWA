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
        "primaryGrey": "#E8E9EB",
        "secondaryGrey": "#9EA4AB",
      },
      textColor: {
        "primaryBlue": "#0A7DDA",
        "secondaryBlue": "#2A3E50",
        "primaryWhite": "#FFFFFF",
        "secondaryWhite": "#F5F7FB",
        "primaryGrey": "#E8E9EB",
        "secondaryGrey": "#9EA4AB",
      },
      borderColor: {
        "primaryBlue": "#0A7DDA",
        "secondaryBlue": "#2A3E50",
        "primaryWhite": "#FFFFFF",
        "secondaryWhite": "#F5F7FB",
        "primaryGrey": "#E8E9EB",
        "secondaryGrey": "#9EA4AB",
      }
    },
  },
  plugins: [],
}
