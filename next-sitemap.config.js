/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) => {
      if (process.env.NEXT_PUBLIC_ENV === 'production') {
        return robotsTxt;
      }

      return `User-agent: *
Disallow: /
      `;
    },
  },
  exclude: ['/v'],
  outDir: 'out',
};

module.exports = config;
