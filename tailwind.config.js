// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        "conx-green": "#6BFFB3",
        "conx-yellow": "#F4C87A", // sampled from logo
        "conx-blue": "#273469",
        "conx-navy": "#0b1530",
        "conx-navySoft": "#101b3f",
        bg: "var(--bg)",
        foreground: "var(--fg)",
        "foreground-muted": "var(--fg-muted)",
        border: "var(--border)",
        card: "var(--card)",
        "card-foreground": "var(--card-fg)",
      },
    },
  },

  plugins: [],
};
