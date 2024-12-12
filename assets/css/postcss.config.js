const rootDir = __dirname + "/../../";

module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["assets/css"],
    }),
    require("tailwindcss")(`${rootDir}/assets/css/tailwind.config.js`),
    require("autoprefixer"),
  ],
};
