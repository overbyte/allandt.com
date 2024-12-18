/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        gunmetal: {
          "50": "#f6f7f9",
          "100": "#eceef2",
          "200": "#d5dae2",
          "300": "#b1bbc8",
          "400": "#8695aa",
          "500": "#677890",
          "600": "#526077",
          "700": "#434e61",
          "800": "#3a4452",
          "900": "#343a46",
          "950": "#2b303a",
        },
        "mint-green": "#d0f4ea",
        "blue-munsell": "#508991",
        "brilliant-rose": "#ff579f",
        auburn: "#a22522",
      },
    },
  },
  plugins: [],
};
