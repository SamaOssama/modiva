/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#008E93",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        lato: ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
