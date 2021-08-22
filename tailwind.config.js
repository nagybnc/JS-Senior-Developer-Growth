const defaulTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "540px",
      ...defaulTheme.screens,
    },
    extend: {
      colors: {
        "bright-blue": "#008ACE",
        "dark-blue": "#263852",
        "graphite": "#222222",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
