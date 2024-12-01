/** @type {import('next').NextConfig} */

isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/Inpower-Laptop' : '',
  experimental: {
    appDir: true,
  },
  distDir: 'out', 
};

module.exports = nextConfig;
