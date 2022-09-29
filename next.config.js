/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", `${process.env.DIRECTUS_URL}`],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/_next/:path*",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "http://localhost:3000",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // images: {
  //   loader: "custom",
  //   path: "http://localhost:8055/assets/",
  // },
};

module.exports = nextConfig;
