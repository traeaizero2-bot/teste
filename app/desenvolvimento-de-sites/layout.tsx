import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Sites em Porto Alegre | dois.du',
  description:
    'Crie seu site profissional com o estúdio dois.du em Porto Alegre, RS. Sites responsivos, otimizados para SEO e prontos para converter. Orçamento gratuito!',
  keywords:
    'desenvolvimento de sites Porto Alegre, criar site RS, site profissional, site responsivo, SEO site',
  openGraph: {
    title: 'Desenvolvimento de Sites em Porto Alegre | dois.du',
    description:
      'Crie seu site profissional com o estúdio dois.du em Porto Alegre, RS. Sites responsivos, otimizados para SEO e prontos para converter.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/desenvolvimento-de-sites`,
    type: 'website',
  },
};

export default function DesenvolvimentoDeSitesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
