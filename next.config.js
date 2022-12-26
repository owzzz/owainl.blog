/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  env: {
    HOST: 'owainl.co'
  }
};

module.exports = nextConfig;
