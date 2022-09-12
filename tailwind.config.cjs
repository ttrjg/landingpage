/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' }
        },
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' }
        }
      },
      animation: {
        glow: 'glow 3s linear infinite',
        grow: 'grow 2s linear infinite'
      }
    },
    plugins: []
  }
}
