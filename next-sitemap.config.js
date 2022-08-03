/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kefits.github.io/t-matsumoto/',
  generateRobotsTxt: true, // (optional)
  outDir: './public',
  // ...other options
}