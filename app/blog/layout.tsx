import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog | dois.du - Dicas de Design, Marketing e TI em Porto Alegre',
  description:
    'Dicas e artigos sobre design gráfico, marketing digital, tecnologia da informação e negócios em Porto Alegre, RS. Conteúdo útil para empreendedores.',
  keywords:
    'blog design Porto Alegre, marketing digital RS, dicas de TI, empreendedorismo RS',
  openGraph: {
    title: 'Blog | dois.du - Dicas de Design, Marketing e TI',
    description:
      'Dicas e artigos sobre design gráfico, marketing digital, tecnologia da informação e negócios em Porto Alegre, RS.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/blog`,
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
