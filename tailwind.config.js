/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      keyframes: {
        bubble: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        }
      },
      animation: {
        bubble: 'bubble 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

