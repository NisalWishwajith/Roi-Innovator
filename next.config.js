/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export", 
  reactStrictMode: true,
  basePath: '/Roi-Innovator',
};

module.exports = nextConfig;