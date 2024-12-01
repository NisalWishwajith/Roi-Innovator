/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  export: {
    output: 'export',
    distDir: 'dist'
  },
};

module.exports = nextConfig;
