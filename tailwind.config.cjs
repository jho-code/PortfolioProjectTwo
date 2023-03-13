/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Montserrat",
    },
    screems: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
    },
    extend: {
      colors: {
        primary: "#546881",
        secondary: "#6e8b9f",
        tertiary: "#e37c6c",
        accent: "#fff",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-pattern-w": "url('/src/assets/herobg white.png')",
      },
    },
  },
  plugins: [],
};
