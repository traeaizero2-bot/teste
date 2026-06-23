'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import { type Metadata } from 'next';

interface BlogPostPageProps {
  params: { slug: string };
}

// Dados de exemplo (serão substituídos por dados do Supabase no futuro)
const blogPosts = [
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
    author: 'Eduardo Gobbi'
  }
];

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.slug || p.slug === params.slug);
  
  if (!post) {
    return { title: 'Post não encontrado' };
  }

  return {
    title: `${post.title} | Blog dois.du`,
    description: post.content.substring(0, 150),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 150),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.slug || p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' },
          { name: post.title, item: `/blog/${params.slug}` }
        ]} 
      />
      <Header />
      <article className="pt-28 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-green-primary uppercase">
                {post.category}
              </span>
              <span className="text-sm text-gray-400">
                {post.date}
              </span>
              <span className="text-sm text-gray-400">
                • {post.readTime} de leitura
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black-primary mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Por {post.author}
            </p>
          </motion.div>

          <div className="h-64 bg-gray-light rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-gray-400">Imagem destacada do post</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog"
              className="inline-flex items-center text-orange-accent font-semibold hover:underline"
            >
              ← Voltar para o blog
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
