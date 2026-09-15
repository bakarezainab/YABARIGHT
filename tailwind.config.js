module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c88d00',
        'primary-light': '#ffcc00',
        'primary-dark': '#a06f00',
        secondary: '#000000',
        accent: '#FF6B6B',
        gold: '#c88d00',
        'gold-light': '#f5d76f',
      },
    },
  },
  plugins: [],
};
