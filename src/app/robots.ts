import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/cgi-bin/',
        '/api/',
        '/.well-known/',
        '/tmp/',
      ],
    },
    sitemap: 'https://www.drasyrafazizan.com/sitemap.xml',
  }
}