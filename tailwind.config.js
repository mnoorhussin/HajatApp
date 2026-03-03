/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#6C5CE7", // Nubian Violet
        secondary: "#1E2A45", // Deep Nile Blue
        accent: "#A3E635", // Volt Green
        warning: "#f59e0b", // Amber
      },
      fontFamily: {
        ar: ["Almarai", "sans-serif"],
        en: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
