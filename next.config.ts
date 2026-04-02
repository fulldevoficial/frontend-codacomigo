import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false,
  buildExcludes: [/middleware-manifest.json$/],
  fallbacks: {
    document: '/offline.html',
  },
});

const nextConfig: NextConfig = {};

export default pwaConfig(nextConfig);