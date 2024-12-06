/** @type {import('next').NextConfig} */

isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  distDir: 'out' ,
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;
