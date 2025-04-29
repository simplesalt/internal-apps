/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    runtime: "edge",
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: process.env.CF_PAGES ? "export" : undefined,
};

export default nextConfig;
