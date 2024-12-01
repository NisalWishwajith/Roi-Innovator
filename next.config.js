/** @type {import('next').NextConfig} */

isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/Inpower-Laptop' : '',
  assetPrefix: isProd ? '/Inpower-Laptop' : '',
  distDir: 'out' ,
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
