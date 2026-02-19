import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.byteimg.com',
      },
      {
        protocol: 'https',
        hostname: 'image.space-bar-clicker.com',
      },
    ],
  },
};

export default nextConfig;
