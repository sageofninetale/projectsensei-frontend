/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // important for "next export"
  images: { unoptimized: true } // safe for static export
};
export default nextConfig;
