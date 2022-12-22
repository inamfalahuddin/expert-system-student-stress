/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E6CF7",
        "dark-primary": "#2D4FB8",
        red: "#ef4444",
        orange: "#f97316",
        green: "#22c55e",
        blue: "#3b82f6",
      },
      backgroundImage: {
        BgSplashMobile: "url('/src/images/bg-splash-mobile.png')",
        BgQuizMobile: "url('/src/images/bg-mobile-1.2.png')",
        BgBuble: "url('/src/images/buble-answers.png')",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-0.75rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInX: {
          "0%": {
            opacity: 0,
            transform: "translateX(-0.75rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        bubleIn: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        fadeTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0rem)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease forwards",
        fadeInX: "fadeInX 1s ease forwards",
        scale: "bubleIn .2s ease forwards",
        fadeTop: "fadeTop .2s ease forwards",
      },
    },
  },
  plugins: [],
};
