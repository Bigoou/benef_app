module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    
    extend: {
      height: {
        '10vh': '10vh',
        '30vh': '30vh',
        '7vh': '7vh',
        '80vh': '80vh'
      },
      width: {
        '10vw': '10vw',
        '80vw': '80vw',
        '95vw': '95vw',
        '100vw': '100vw'
      },
      colors: {
        red: {
          450: '#FF5640',
          550: '#FF5050',
          650: '#E00000'
        },
        white: {
          150: '#FFF9F5',
          0: '#FFFFFF'
        },
        gray: {
          550: '#2A2A2A',
          450: '#636363'
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      display: ['dark'],
      borderColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'class',
  })],
}
