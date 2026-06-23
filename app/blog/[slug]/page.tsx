'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import { getBlogPost } from './data';

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

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
