/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: false,
  images: {
    domains: [
      'images.unsplash.com',
      'dev.carconnections.online',
      'node-drop-shopee.agiletechnologies.in',
      'ed5f-2401-4900-577c-4b8e-ffa7-7b2d-5509-2397.ngrok-free.app',
      'd1pktk21upjx9m.cloudfront.net/public/all-icons',
      'd1pktk21upjx9m.cloudfront.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.carconnections.online',
        port: '',
        pathname: '/images'
      }
    ],
    deviceSizes: [400, 600, 828, 1080, 1200, 1920, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60
  }
};

module.exports = nextConfig;
