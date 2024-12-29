/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // Default theme settings
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#090E34",
        dark: "#1D2144",
        primary: "#4A6CF7",
        iceblue: "#38B6FF",
        yellow: "#FBB040",
        "body-color": "#959CB1",
      },
      backgroundImage: {
        'gradient-black-blue': 'linear-gradient(278deg, rgba(0,15,40,1) 0%, rgba(0,14,43,1) 100%)',
        'gradientbg': 'linear-gradient(13deg, rgba(55,67,211,1) 0%, rgba(42,255,167,1) 70%)',
        'gradientbg2': 'linear-gradient(13deg, rgba(55,67,211,1) 0%, rgba(42,255,167,1) 100%)',
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      textColor: {
        DEFAULT: "#FFFFFF"
      },
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
