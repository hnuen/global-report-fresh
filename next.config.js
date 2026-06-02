/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Force Cloudflare to use the Edge Runtime for your API endpoints
  experimental: {
    runtime: 'edge',
  },
};

module.exports = nextConfig;