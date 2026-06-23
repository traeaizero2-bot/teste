'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | dois.du - Dicas de Design, Marketing e TI em Porto Alegre',
  description: 'Dicas e artigos sobre design gráfico, marketing digital, tecnologia da informação e negócios em Porto Alegre, RS. Conteúdo útil para empreendedores.',
  keywords: 'blog design Porto Alegre, marketing digital RS, dicas de TI, empreendedorismo RS',
  openGraph: {
    title: 'Blog | dois.du - Dicas de Design, Marketing e TI',
    description: 'Dicas e artigos sobre design gráfico, marketing digital, tecnologia da informação e negócios em Porto Alegre, RS.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/blog`,
    type: 'website',
  }
};

// Dados de exemplo para o blog (serão substituídos por dados do Supabase no futuro)
const blogPosts = [
  {
    id: '1',
    title: '5 Dicas para Criar uma Identidade Visual Memorável',
    excerpt: 'Aprenda os passos essenciais para desenvolver uma identidade visual que represente sua marca e fique na mente dos clientes em Porto Alegre.',
    date: '2024-06-15',
    category: 'Design',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Como Otimizar seu Site para SEO Local em Porto Alegre',
    excerpt: 'Dicas práticas para aparecer nas primeiras páginas do Google quando alguém busca por seus serviços em Porto Alegre e região.',
    date: '2024-06-10',
    category: 'Marketing',
    readTime: '7 min'
  },
  {
    id: '3',
    title: 'Por que Investir em um SSD para seu Notebook?',
    excerpt: 'Descubra como um upgrade para SSD pode transformar a velocidade e o desempenho do seu notebook em Porto Alegre.',
    date: '2024-06-05',
    category: 'TI',
    readTime: '4 min'
  }
];

export default function Blog() {
  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' }
        ]} 
      />
      <Header />
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-black-primary mb-3 md:mb-4">
              Blog do dois.du
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Dicas e artigos sobre design gráfico, marketing digital, tecnologia da informação e negócios em Porto Alegre, RS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-light flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Imagem do Post</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-green-primary uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.date}
                    </span>
                    <span className="text-xs text-gray-400">
                      • {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-black-primary mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-orange-accent font-semibold hover:underline"
                  >
                    Ler mais →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
