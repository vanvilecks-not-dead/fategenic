const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '28px',
      '4xl': '42px',
    },

    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,

      black: '#2E2C31',
      white: '#F2F3FF',
      blue: '#2DB0CD',
      blue2: '#30B9D7',
      green: '#13839C',
      red: '#5A0F0F',
      'win-green': '#139C9C',
      'light-green': '#C6DCEB',
      'deep-blue': '#062B33',
    }),

    extend: {
      fontFamily: {
        sans: ['var(--font-m-plus-1)', ...fontFamily.sans],
      },
      spacing: {
        30: '7,625rem', /* 122px */
        38: '9,6875rem', /* 155px */
        42: '10,875rem', /*174px */
      }
    },
  },
  plugins: [],
};
