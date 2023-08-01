/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  corePlugins: {
    preflight: false,
 },
  theme: {
    extend: {
        screens:{
          'small':'450px',
        },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}