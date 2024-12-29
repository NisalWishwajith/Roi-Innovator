const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  experimental: {
    appDir: true
  },
  output: "export",
  assetPrefix: isProd ? '/Roi-Innovator/' : '',
};

