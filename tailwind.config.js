/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D00000',
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0000',
          600: '#D00000',
          700: '#9D0000',
          800: '#6A0000',
          900: '#370000',
        },
        secondary: {
          DEFAULT: '#FFBA08',
          50: '#FFF6E0',
          100: '#FFEDC2',
          200: '#FFE085',
          300: '#FFD447',
          400: '#FFC71A',
          500: '#FFBA08',
          600: '#DB9F00',
          700: '#A87A00',
          800: '#755400',
          900: '#422F00',
        },
        accent: {
          DEFAULT: '#3A86FF',
          50: '#EAF2FF',
          100: '#D6E4FF',
          200: '#ADC9FF',
          300: '#84AEFF',
          400: '#5B93FF',
          500: '#3A86FF',
          600: '#0063F7',
          700: '#004CBC',
          800: '#003685',
          900: '#00214F',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'pizza': '0 0 30px rgba(255, 186, 8, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};