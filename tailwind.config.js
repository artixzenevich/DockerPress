require('dotenv').config()

const theme = process.env.PROJECT_NAME

module.exports = {
  mode: 'jit',
  content: [`./themes/${theme}/**/*.{php, js, ts}`],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
