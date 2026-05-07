import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#dbf1ff',
          200: '#bee6ff',
          300: '#8fd6ff',
          400: '#59beff',
          500: '#2da0ff',
          600: '#1581f5',
          700: '#0e69e0',
          800: '#1156b6',
          900: '#144a8f',
          950: '#0f2f5c',
        },
        category: {
          alkali: '#ff6b6b',
          alkaline: '#ffa94d',
          transition: '#74c0fc',
          posttrans: '#a5b4fc',
          metalloid: '#ffd43b',
          nonmetal: '#69db7c',
          halogen: '#63e6be',
          noble: '#e599f7',
          lanthanide: '#f783ac',
          actinide: '#ff8787',
          unknown: '#adb5bd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [animate],
};
