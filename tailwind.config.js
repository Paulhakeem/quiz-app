/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'university': '#db418b',
        'showmax': '#548697'
      }
    },
  },
  plugins: [],
}