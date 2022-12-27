/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  env: {
    HOST: 'owainl.co',
    SENTRY_DSN: 'https://421c8159100547d6accddad8c947846b@o4504401645076480.ingest.sentry.io/4504401648812032',    
  }
};

module.exports = nextConfig;