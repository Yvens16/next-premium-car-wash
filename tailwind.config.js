module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pastel: '#DED9C4',
        teal: {
          light: '#96C7C1',
          DEFAULT: '#89b5af',
        },
        black: '#121212'
      }
    },
    animation: {
      'bounce-custom': 'bounce 1s 6',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
