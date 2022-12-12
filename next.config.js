/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});
const path = require("path");

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */

  let nextConfig = {
    reactStrictMode: true,
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
      properties: ["^data-test$", "^data-testid$", "^data-cy$"],
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
