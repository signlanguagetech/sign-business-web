import type { NextConfig } from "next";

const basePath = "/"

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: false },
      { source: '/services', destination: '/#services', permanent: false },
      { source: '/contact', destination: '/#contact', permanent: false },
    ];
  },
};

export default nextConfig;
