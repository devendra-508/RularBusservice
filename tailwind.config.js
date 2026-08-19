/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EDE6D6',
        paperDark: '#E1D7C0',
        chalk: '#F8F4E9',
        ink: '#242821',
        route: {
          DEFAULT: '#B23A2E',
          dark: '#8E2C22',
        },
        signal: {
          DEFAULT: '#3F5F42',
          light: '#4F7353',
        },
        marigold: {
          DEFAULT: '#DFA23A',
          dark: '#C48A28',
        },
        asphalt: {
          DEFAULT: '#22251E',
          light: '#2E3227',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        flapDown: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-90deg)' },
        },
        dash: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-120px 0' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        dash: 'dash 1.4s linear infinite',
        driftSlow: 'driftSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
