import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "habrastorage.org"
      }
    ]
  }
};

export default withMDX(config);
