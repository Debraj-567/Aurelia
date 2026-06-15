/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        luxury: {
          gold: "#D4AF37",
          ivory: "#F8F5F0",
          emerald: "#0F4C4C",
          gray: "#6B7280",
          dark: "#1A1A1A"
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to right, #0F172A, #1e293b)',
      }
    },
  },
  plugins: [],
}
