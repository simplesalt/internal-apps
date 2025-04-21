/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: "edge",
  experimental: {
    esmExternals: "loose",
  },
  reactStrictMode: true,
  output: process.env.CF_PAGES ? "export" : undefined,
};

export default nextConfig;
