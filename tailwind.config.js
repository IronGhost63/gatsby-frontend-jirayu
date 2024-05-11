/** @type {import('tailwindcss').Config} */

const styleMap = require('./src/utilities/contentStyleMap.js');
const requiredClasses = ((Object.entries(styleMap.styleMap).map( item => item[1] )).join(' ')).split(' ');

module.exports = {
  content: [
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: requiredClasses,
}
