/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'university': '#0a67be',
        'showmax': '#548697'
      }
    },
  },
  plugins: [],
}