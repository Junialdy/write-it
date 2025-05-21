const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      underscore: "lodash",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
};

module.exports = withPayload(nextConfig);
