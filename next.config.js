import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/**
 * @type {import('next').NextConfig}
 */
export default () => {
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

  nextConfig = withPWA(nextConfig);

  return nextConfig;
};
