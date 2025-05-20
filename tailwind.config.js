/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables the class-based dark mode strategy
  theme: {
    extend: {
      colors: {
        whatsapp: {
          DEFAULT: '#25D366',
          light: '#4AE388',
          dark: '#128C7E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}