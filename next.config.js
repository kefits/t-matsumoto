/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? "/t-matsumoto.git" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/t-matsumoto.git" : "",
  trailingSlash: true,
}

module.exports = nextConfig
