/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
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
      },
      colors: {
        darkTrans: 'rgb(0, 0, 0, 0.4)',
        darkerTrans: 'rgb(0, 0, 0, 0.7)',
        standardBlue: 'rgb(29, 78,216)',
        lightBlue: 'rgb(37 99 235)',
        fontDarkColor: 'rgb(31 41 55)',
        fontGrayColor: 'rgb(55 65 81)',
        backgroundColor: 'rgb(241 245 249)' 
      }
    },
  },
  plugins: [],
}

