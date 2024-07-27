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
        },
        showModal: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'}
        },
        hideModal : {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'}
        },
        showSideBarModal: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0%)'}
        },
        hideSideBarModal: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        showOptionModal: {
          '0%': {transform: 'translateY(-15%)'},
          '100%': {transform: 'translateY(0%)'}
        },
        showTableOptionModal: {
          '0%': {transform: 'translateY(5%)'},
          '100%': {transform: 'translateY(-13%)'}
        }
      },
      animation: {
        bubble: 'bubble 2s ease-in-out infinite',
        showModal: 'showModal 0.2s ease-in-out',
        hideModal: 'hideModal 0.2s ease-in-out forwards',
        showSideBarModal: 'showSideBarModal 0.2s ease-out',
        hideSideBarModal: 'hideSideBarModal 0.2s ease-in-out forwards',
        showOptionModal: 'showOptionModal 0.3s ease-in-out forwards',
        showTableOptionModal: 'showTableOptionModal 0.3s ease-in-out forwards'
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

