/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#ffffff',
        'secondary':'#00B488',
        'accent':'#833AB4',
        'link-color':"#3897F0",
        'error':'#ED4956'
      },
    },
  },
  plugins: [],
}

