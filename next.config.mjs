/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // 👇 Prevent Next from trying static export
  output: 'standalone',

  // 👇 Disable static optimization attempts
  experimental: {
    typedRoutes: false,
    esmExternals: 'loose',
    serverActions: false,
  },
};

export default nextConfig;
