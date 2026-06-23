import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { getBlogPost } from './data';

interface BlogPostLayoutProps {
  children: ReactNode;
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostLayoutProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

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
    },
  };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return children;
}
