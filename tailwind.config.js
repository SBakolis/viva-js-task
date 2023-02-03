/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "back-main": "#97b571",
        "back-dark": "#8ca060",
        "back-plain": "#fdf0c2",
        "brown-accent": "#5e3715",
        "negative-accent": "#fbb14e",
        "positive-accent": "#29974c",
      },
    },
  },
  plugins: [],
};
