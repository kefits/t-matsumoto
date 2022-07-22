/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? "/t-matsumoto" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/t-matsumoto" : "",
  trailingSlash: true,
  publicRuntimeConfig: process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
}

module.exports = nextConfig
