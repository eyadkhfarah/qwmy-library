module.exports = {
    darkMode: "class",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./Components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          medium: 'medium',
          black: 'black',
        },
        colors: {
          primary: '#4109FD',
          light: '#09d8fd',
          dprimary: "#16213E",
          dlight: '#0F3460'
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  } 