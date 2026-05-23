import type { NextConfig } from "next";

const githubRepository = process.env.GITHUB_REPOSITORY;
const repositoryName = githubRepository?.split('/')[1];
const isUserOrOrgPagesSite = repositoryName?.endsWith('.github.io');
const basePath = repositoryName && !isUserOrOrgPagesSite ? `/${repositoryName}` : '';

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
