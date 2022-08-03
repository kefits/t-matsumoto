/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.SITE_URL || 'https://kefits.github.io/t-matsumoto/',
  generateRobotsTxt: true, // (optional)
  // ...other options
}

export default config