import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the basePath matches your repository name if not using a custom domain
  // basePath: '/adoption-report', 
};

export default nextConfig;
