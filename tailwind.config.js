import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.gray[200],
          hover: colors.gray[300],
          border: colors.gray[400],
          text: colors.gray[500],
          dark: colors.gray[800],
          ["dark-hover"]: colors.gray[900]
        }
      }
    },
  },
  plugins: [],
}