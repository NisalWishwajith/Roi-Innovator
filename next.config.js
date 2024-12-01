/** @type {import('next').NextConfig} */

isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/Inpower-Laptop' : '',
  assetPrefix : isProd ? '/Inpower-Laptop/' : '',
  output : 'export',
  experimental: {
    appDir: true,
  },
 // set output directory as dist
  distDir: 'out', 
  trailingSlash: true,
};

module.exports = nextConfig;
