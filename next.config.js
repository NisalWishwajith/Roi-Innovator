/** @type {import('next').NextConfig} */

isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // basePath: isProd ? '/Roi-Innovator' : '',
  // assetPrefix: isProd ? '/Roi-Innovator' : '',
  distDir: 'out' ,
  output: 'export',
  // trailingSlash: true,
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
