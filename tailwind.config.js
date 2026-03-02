/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beauty: {
          50: '#fff9f9',
          100: '#ffefef',
          200: '#ffdada',
          300: '#ffb9b9',
          400: '#f88d8d',
          500: '#eb5e5e',
          600: '#d73d3d',
          700: '#b52e2e',
          800: '#962929',
          900: '#7d2626',
          950: '#441010',
        },
        rose: {
          50: '#fdf4f4',
          100: '#fceaea',
          200: '#f9dada',
          300: '#f4bcbc',
          400: '#eb8c8c',
          500: '#de6262',
          600: '#ca4444',
          700: '#aa3535',
          800: '#8d2f2f',
          900: '#762c2c',
          950: '#401313',
        },
        gold: {
          50: '#fbfaf7',
          100: '#f6f3ed',
          200: '#ede6d6',
          300: '#dfd2b5',
          400: '#cbb689',
          500: '#b79a5f',
          600: '#a3834c',
          700: '#886c41',
          800: '#705939',
          900: '#5c4a32',
          950: '#302619',
        },
        pearl: {
          50: '#ffffff',
          100: '#fcfcfc',
          200: '#f7f6f5',
          300: '#f0eeec',
          400: '#e5e1dc',
          500: '#d4ccc4',
          600: '#b8aca1',
          700: '#9b8c7e',
          800: '#817366',
          900: '#6b5f54',
          950: '#38322c',
        },
        accent: {
          DEFAULT: '#B76E79', // Rose Gold
          light: '#E6B2B2', // Soft Pink/Gold
          dark: '#5C4A47', // Deep Charcoal Rose
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E6B2B2 0%, #B76E79 35%, #8E4D57 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(230,178,178,0.15) 0%, rgba(183,110,121,0.2) 100%)',
      },
      fontFamily: {
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        elegant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'count-up': 'countUp 1.2s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(183, 110, 121, 0.3)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(183, 110, 121, 0.2)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
