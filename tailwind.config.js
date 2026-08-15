/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Design breakpoints are max-width based (matches the original Framer build).
    // Order matters: tablet is declared before phone so phone rules win the cascade
    // when both queries match at very small widths.
    screens: {
      tablet: { max: '810px' },
      phone: { max: '390px' },
    },
    extend: {
      colors: {
        cream: '#f6f4ee',
        'cream-dim': '#efece3',
        ink: '#171e2c',
        navy: '#141b29',
        'navy-soft': '#1c2436',
        terracotta: '#d97a4f',
        'terracotta-dim': '#c96a3f',
        clayblue: '#4a6d9c',
        sage: '#3f7f5c',
        muted: '#6b6f76',
        line: '#d8d4c8',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
}
