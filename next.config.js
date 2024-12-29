/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
    assetPrefix: isProd ? "/Roi-Innovator/" : ""
  },
};

module.exports = nextConfig;
