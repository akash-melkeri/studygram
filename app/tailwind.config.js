/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#00B488',
        'secondary':'#00B488',
        'accent':'#00B488',
      },
    },
  },
  plugins: [],
}

