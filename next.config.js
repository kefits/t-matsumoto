/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? "/t-matsumoto" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/t-matsumoto" : ""
  trailingSlash: true,
}

module.exports = nextConfig
