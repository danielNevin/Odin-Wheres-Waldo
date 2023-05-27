/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pop-in': {
          '0%' : { transform: 'scale(0) translate(-50%, -50%)' },
          '100%' : { transform: 'scale(1) translate(-50%, -50%)' }
        }
      },
      animation: {
        'pop-in':  'pop-in 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
}

