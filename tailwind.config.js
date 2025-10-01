/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunrise: {
          50: '#fef7ed',
          100: '#fef0d7',
          200: '#fcdcae',
          300: '#f9c178',
          400: '#f59e42',
          500: '#f2811d',
          600: '#e36813',
          700: '#bc4f12',
          800: '#953f16',
          900: '#783515',
        },
        marigold: {
          50: '#fff8ed',
          100: '#ffefd5',
          200: '#ffdcaa',
          300: '#ffc174',
          400: '#ff9c3c',
          500: '#ff7c16',
          600: '#f05d0c',
          700: '#c7420c',
          800: '#9e3412',
          900: '#7f2c12',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        saffron: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sunrise': 'sunrise 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'ripple': 'ripple 2s ease-in-out infinite',
      },
      keyframes: {
        sunrise: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        ripple: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '0.5' },
        }
      },
      backgroundImage: {
        'gradient-sunrise': 'linear-gradient(135deg, #fef7ed 0%, #fcdcae 25%, #f9c178 50%, #f59e42 75%, #f2811d 100%)',
        'gradient-water': 'linear-gradient(180deg, rgba(20, 184, 166, 0.1) 0%, rgba(13, 148, 136, 0.2) 100%)',
      }
    },
  },
  plugins: [],
}