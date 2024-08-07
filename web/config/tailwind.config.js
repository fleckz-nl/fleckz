/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#2B998C',
        'accent-darker': '#346660',
        'alluca-primary': '#013B35',
        'alluca-gray': '#a6a6a6',
      },
    },
  },
  plugins: [],
}
