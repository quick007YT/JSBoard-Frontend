const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'oswald': ['Oswald'],
    },
    color: {
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
