import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Sistemas em Porto Alegre | dois.du',
  description:
    'Soluções de software personalizadas para sua empresa em Porto Alegre, RS. Desenvolvimento de sistemas, aplicativos e automação de processos. Orçamento gratuito!',
  keywords:
    'desenvolvimento de sistemas Porto Alegre, software personalizado RS, sistema empresarial, automação de processos',
  openGraph: {
    title: 'Desenvolvimento de Sistemas em Porto Alegre | dois.du',
    description:
      'Soluções de software personalizadas para sua empresa em Porto Alegre, RS. Desenvolvimento de sistemas, aplicativos e automação de processos.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/desenvolvimento-de-sistemas`,
    type: 'website',
  },
};

export default function DesenvolvimentoDeSistemasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
