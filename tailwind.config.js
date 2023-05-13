const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "42px",
    },

    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,

      black: "#2E2C31",
      white: "#F2F3FF",
      blue: "#2DB0CD",
      blue2: "#30B9D7",
      green: "#13839C",
      "dark-deep-green": "#C0DDE3",
      "dark-red": "#A54D4D",
      "dark-green": "#3AD2B7",
      red: "#5A0F0F",
      "win-green": "#139C9C",
      "light-green": "rgba(19, 131, 156, 0.2)",
      "d-light-green": "rgba(19, 131, 156, 0.6)",
      "deep-green": "#062B33",
    }),

    extend: {
      spacing: {
        8.5: "34px",
        30: "122px",
        34: "140px",
        38: "155px",
        42: "174px",
      },

      fontFamily: {
        sans: ["var(--font-m-plus-1)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
