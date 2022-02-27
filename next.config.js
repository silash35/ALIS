/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const withPWA = require("next-pwa");
const path = require("path");

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */

  let nextConfig = {
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
    },
    compiler: {},
  };

  if (process.env.NODE_ENV === "production") {
    nextConfig.compiler.removeConsole = true;
  }

  if (process.env.KEEP_PROPERTIES !== "true") {
    nextConfig.compiler.reactRemoveProperties = {
      properties: ["^data-test$", "^data-testid$"],
    };
  }

  if (process.env.NODE_ENV !== "development") {
    nextConfig.pwa = {
      dest: "public",
    };

    nextConfig = withPWA(nextConfig);
  }

  return nextConfig;
};
