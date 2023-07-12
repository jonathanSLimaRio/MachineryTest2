/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-black': '#171718',
        'custom-yellow': '#ffba3f',
        'custom-hover-yellow': '#ffce66',
        'custom-secondary-hover-yellow': '#fffaeb',
        'custom-border-yellow': '#f90',
        'custom-blue': '#228be6',
      },
      spacing: {
        '14rem': '14rem',
        '11.75rem': '11.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


