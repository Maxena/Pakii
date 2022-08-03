/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
