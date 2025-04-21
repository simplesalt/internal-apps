/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "edge",
    esmExternals: 'loose'
  },
  reactStrictMode: true,
  output: process.env.CF_PAGES ? 'export' : undefined,
};

export default nextConfig;
