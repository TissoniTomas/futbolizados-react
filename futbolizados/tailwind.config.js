/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        TungstenBold: ["Tungsten-bold"],
        YakartaBold: ["YakartaPlus-sans-Bold"],
        YakartaRegular: ["YakartaPlus-sans-Regular"],
        MontserratRegular: ["Montserrat-Regular"],
        MontserratBold: ["Montserrat-Bold"],
        

      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

