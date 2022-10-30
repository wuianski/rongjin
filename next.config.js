/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    DIRECTUS_URL_DEV: process.env.DIRECTUS_URL_DEV,
    DIRECTUS_URL: process.env.DIRECTUS_URL,
    DIRECTUS_IMAGE_DOMAIN: process.env.DIRECTUS_IMAGE_DOMAIN,
    NEXT_PUBLIC_GRAPHQL_DEV: process.env.NEXT_PUBLIC_GRAPHQL_DEV,
    NEXT_PUBLIC_GRAPHQL: process.env.NEXT_PUBLIC_GRAPHQL,
  },

  images: {
    domains: [`${process.env.DIRECTUS_IMAGE_DOMAIN}`],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
