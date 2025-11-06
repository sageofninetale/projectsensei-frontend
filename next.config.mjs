/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // temporary while stabilising:
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // ensure we ship a normal Node server build (not static export)
  // and avoid quirky optimisations while we finish auth
  output: 'standalone',
  experimental: { typedRoutes: false },
};

export default nextConfig;
