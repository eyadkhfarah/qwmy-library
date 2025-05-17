const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || '';

/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
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
      { userAgent: "*", allow: ["/"] },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};

module.exports = config; 