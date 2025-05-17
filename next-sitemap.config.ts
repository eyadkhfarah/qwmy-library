interface IConfig {
  siteUrl: string;
  exclude?: string[];
  generateRobotsTxt?: boolean;
  sitemapSize?: number;
  changefreq?: string;
  priority?: number;
  transform?: (config: any, path: string) => Promise<any>;
  robotsTxtOptions?: {
    policies?: Array<{
      userAgent: string;
      disallow?: string[];
      allow?: string[];
    }>;
    additionalSitemaps?: string[];
  };
}

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || '';

const config: IConfig = {
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

export default config; 