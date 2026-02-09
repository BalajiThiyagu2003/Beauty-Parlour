/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          dark: '#1A1A1A',
          darker: '#0f0f0f',
          card: '#252525',
          border: '#3d3d3d',
        },
        gold: {
          50: '#fdf8e8',
          100: '#f9ecc4',
          200: '#f4dd8e',
          300: '#e8c04a',
          400: '#d4a72a',
          500: '#c9a227',
          600: '#b8860b',
          700: '#9A7B2E',
          800: '#7d6020',
          900: '#5c4618',
        },
        /* compatibility: map old brand/accent to dark-theme equivalents */
        brand: {
          50: '#404040',
          100: '#3d3d3d',
          200: '#353535',
          300: '#2d2d2d',
          400: '#252525',
          500: '#d4a72a',
          600: '#b8860b',
          700: '#9A7B2E',
          800: '#e8e8e8',
          900: '#f0f0f0',
          950: '#ffffff',
        },
        accent: {
          DEFAULT: '#d4a72a',
          light: '#e8c04a',
          dark: '#b8860b',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f0e0a8 0%, #d4a72a 35%, #b8860b 70%, #9A7B2E 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(244,221,142,0.15) 0%, rgba(184,134,11,0.2) 100%)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 167, 42, 0.3)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(212, 167, 42, 0.2)' },
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
