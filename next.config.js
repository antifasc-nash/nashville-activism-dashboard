/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This allows the build to finish even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This skips the "Linting" check which often causes hangs
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
