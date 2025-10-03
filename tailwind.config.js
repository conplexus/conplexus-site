// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // include common file types used by the project (tsx, ts, jsx, js, mdx)
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        'conx-green': '#6BFFB3',
        'conx-yellow': '#F4C87A', // sampled from logo
        'conx-blue': '#273469',
        bg: 'var(--bg)',
        foreground: 'var(--fg)',
        'foreground-muted': 'var(--fg-muted)',
        border: 'var(--border)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-fg)',
        'conx-navy': '#0b1530',
        'conx-navySoft': '#101b3f',
      },
    },
  },

  plugins: [],
};
