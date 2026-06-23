import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/portfolio', '/sobre', '/contato', '/desenvolvimento-de-sites', '/desenvolvimento-de-sistemas', '/landing-pages', '/assistencia-tecnica', '/manutencao-de-notebooks', '/consultoria-ti', '/blog'],
        disallow: ['/crud-admin', '/api/']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
