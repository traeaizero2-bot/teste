export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

// Dados de exemplo (serão substituídos por dados do Supabase no futuro)
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: '5-dicas-para-criar-uma-identidade-visual-memoravel',
    title: '5 Dicas para Criar uma Identidade Visual Memorável',
    content: `
      <p>Uma identidade visual é muito mais do que um logo. Ela é a representação visual da sua marca, incluindo cores, tipografias, imagens e todo o estilo visual que comunica quem você é para o mundo.</p>
      <h2>1. Conheça seu público-alvo</h2>
      <p>Antes de começar a criar, é fundamental entender quem é o seu público. Qual a idade? Quais os gostos? Onde eles moram? Em Porto Alegre, por exemplo, o público pode ter características específicas que devem ser consideradas.</p>
      <h2>2. Defina a personalidade da marca</h2>
      <p>Sua marca é moderna? Clássica? Divertida? Profissional? Defina a personalidade antes de escolher cores e fontes.</p>
      <h2>3. Escolha as cores estrategicamente</h2>
      <p>As cores transmitem emoções. Azul transmite confiança, verde transmite natureza, laranja transmite energia.</p>
      <h2>4. Crie um logo versátil</h2>
      <p>Seu logo deve funcionar em diferentes tamanhos e formatos: desde um favicon de site até um outdoor grande em Porto Alegre.</p>
      <h2>5. Seja consistente</h2>
      <p>Use a identidade visual de forma consistente em todos os pontos de contato com o cliente: site, redes sociais, materiais impressos, etc.</p>
    `,
    date: '2024-06-15',
    category: 'Design',
    readTime: '5 min',
    author: 'Eduardo Gobbi',
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.id === slug || post.slug === slug);
}
