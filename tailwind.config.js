/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        conx: {
          green: "#5EFC8D",
          navy:  "#273469",
          gold:  "#E9C46A",
          // helpful tints
          navySoft: "#314081",
        },
      },
      boxShadow: {
        brand: "0 10px 20px -10px rgba(39,52,105,0.5)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
