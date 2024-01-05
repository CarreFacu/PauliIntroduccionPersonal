/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-background': '#dad7cd',
        'subtitle': '#a3b18a',
        'green-background':'#344e41'
      },
    },
  },
  plugins: [],
}