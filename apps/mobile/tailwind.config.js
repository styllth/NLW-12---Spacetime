/** @type {import('tailwindcss').Config} */

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: ["./App.tsx", "./app/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};
