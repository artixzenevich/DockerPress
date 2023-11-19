module.exports = {
    mode: 'jit',
    content: ['./app/themes/starter/**/*.{php, js, ts}'],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "synthwave"]
    },
  }