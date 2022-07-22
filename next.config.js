/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: process.env.GITHUB_ACTIONS ? "/t-matsumoto" : "",
  // assetPrefix: process.env.NODE_ENV === "production" ? "/t-matsumoto" : "",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
}

module.exports = nextConfig
