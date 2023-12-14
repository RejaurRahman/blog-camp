const siteUrl = process.env.SITE_URL

const SitemapConfig = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    additionalPaths: async (config) => [
      await config.transform(config, "/*")
    ]
  }
}

module.exports = SitemapConfig
