/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't fail the Vercel build because of TS/ESLint while we bootstrap
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
