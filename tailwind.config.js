module.exports = {
    darkMode: "class",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./Component/**/*.{js,ts,jsx,tsx}",
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
        keyframes: {
          live: {
            '0%': { opacity: '0' },
            '50%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          marquee: {
            '0%': {
              transform: 'translateX(-200%)'
            },
            '100%': {
              transform: 'translateX(2000%)'
            }
          }
        },
        animation: {
          'live': 'live 1s ease-in-out infinite',
          'marquee': 'marquee 120s linear infinite'
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  } 