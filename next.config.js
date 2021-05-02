/* global require, module, process, __dirname */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  future: {
    webpack5: true,
  },
});
