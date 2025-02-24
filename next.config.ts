import { type NextConfig } from 'next';

import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        hostname: 'openweathermap.org',
        pathname: '/img/wn/**',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
