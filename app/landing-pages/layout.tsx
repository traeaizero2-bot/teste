import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Landing Pages em Porto Alegre | dois.du',
  description:
    'Crie landing pages de alta conversão para suas campanhas em Porto Alegre, RS. Páginas otimizadas para capturar leads e aumentar vendas. Orçamento gratuito!',
  keywords:
    'landing page Porto Alegre, página de captura RS, landing page de alta conversão, página de vendas',
  openGraph: {
    title: 'Landing Pages em Porto Alegre | dois.du',
    description:
      'Crie landing pages de alta conversão para suas campanhas em Porto Alegre, RS. Páginas otimizadas para capturar leads e aumentar vendas.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/landing-pages`,
    type: 'website',
  },
};

export default function LandingPagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
