require('dotenv').config()

const theme = process.env.THEME

module.exports = {
  content: [`./themes/${theme}/**/*.php`],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
