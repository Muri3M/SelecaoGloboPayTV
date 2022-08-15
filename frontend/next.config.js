/** @type {import('next').NextConfig} */

const rewritesConfig = [
  {
    source: "/api/:path*",
    destination: "http://localhost:3333/:path*",
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => rewritesConfig,
};

module.exports = nextConfig;
