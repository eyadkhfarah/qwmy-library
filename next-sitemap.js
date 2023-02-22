const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

module.exports = {
  siteUrl,
  exclude: ["/404", "/profile"],
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',

  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "/profile"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
      `${siteUrl}/rss.xml`,
      `${siteUrl}/egyeco-rss.xml`,
      `${siteUrl}/worldeco-rss.xml`,
      `${siteUrl}/exchange-rss.xml`,
    ],
  },
};