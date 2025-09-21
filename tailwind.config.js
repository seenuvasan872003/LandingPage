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
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
}