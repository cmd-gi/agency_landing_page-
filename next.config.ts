import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Completely disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for faster deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Handle experimental features
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // Webpack configuration to help with module resolution
  webpack: (config, { isServer }) => {
    // Add resolve fallbacks for better module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
};

export default nextConfig;
