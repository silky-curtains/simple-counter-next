/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "my-grey-light": "#343541",
        "my-grey-dark": "#202123",
        "my-green-light": "#10a37f",
        "my-green-dark": "#1a7f64",
      }

    },
  },
  plugins: [],
}
