/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  export: {
    outDir: 'out',
  },
};

module.exports = nextConfig;
