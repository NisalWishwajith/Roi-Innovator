/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
 // set output directory as dist
  distDir: 'out', 
};

module.exports = nextConfig;
