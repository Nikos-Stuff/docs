import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.nikostuff.com',
        port: '',
        pathname: '/v1/img/uploads/container_ec46113a1b8b38bd89c0729ef099582b/**',
      },
    ],
  },
};

// Exporting the MDX enhanced config
export default withMDX(config);
