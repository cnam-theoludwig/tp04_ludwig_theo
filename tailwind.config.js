import tailwindcssForms from "@tailwindcss/forms"
import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056B3",
        success: "#2F855A",
        error: "#C53030",
        "gray-lighter": "#D1D5DB",
        "gray-darker": "#4B5563",
        highlight: "#FEF08A",
      },
    },
    fontFamily: {
      sans: ["'Montserrat'", ...fontFamily.sans],
    },
  },
  plugins: [tailwindcssForms],
}

export default config
