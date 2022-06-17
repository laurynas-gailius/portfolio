/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'manrope': "'Manrope', sans-serif",
      },
      dropShadow: {
        '3xl': [
            '0px 0px 6px rgba(0, 0, 0, 0.02)',
            '0px 2px 4px rgba(0, 0, 0, 0.08)'
        ]
      }
    },
  },
  plugins: [],
}