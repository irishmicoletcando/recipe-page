/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          800: 'hsl(14, 45%, 36%)', 
        }
      },
      fontFamily: {
        'young-serif': ['"Young Serif"', 'serif'], 
      },
    },
  },
  plugins: [],
}