/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  export: {
    output: 'export',
    outDir: 'out'
  },
};

module.exports = nextConfig;
