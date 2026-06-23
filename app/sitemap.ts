import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br';
  
  // Páginas fixas
  const staticPages = [
    '',
    '/sobre',
    '/portfolio',
    '/contato',
    '/desenvolvimento-de-sites',
    '/desenvolvimento-de-sistemas',
    '/landing-pages',
    '/assistencia-tecnica',
    '/manutencao-de-notebooks',
    '/consultoria-ti',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }));
  
  // Para projetos dinâmicos, você pode buscar do Supabase no futuro
  // const { data: projects } = await supabase.from('projects').select('id, updated_at');
  // const projectPages = projects?.map((project: any) => ({
  //   url: `${baseUrl}/portfolio/${project.id}`,
  //   lastModified: new Date(project.updated_at || new Date()),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7
  // })) || [];

  return [
    ...staticPages,
    // ...projectPages
  ];
}
