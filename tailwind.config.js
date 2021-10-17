module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#0F1118',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
