/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        violet: 'var(--violet)',
        grey: 'var(--grey)',
        white: 'var(--white)',
      },
      width: {
        loginInput: '600px',
        homeTitle: '1000px',
        searchBar: '800px',
        cardItem: '985px',
      }
    },
  },
  plugins: [],
}

