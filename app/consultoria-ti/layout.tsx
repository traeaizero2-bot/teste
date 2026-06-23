import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Consultoria de TI em Porto Alegre | dois.du',
  description:
    'Consultoria especializada em tecnologia da informação para empresas em Porto Alegre, RS. Planeje sua infraestrutura de TI com estratégia. Orçamento gratuito!',
  keywords:
    'consultoria TI Porto Alegre, consultoria de tecnologia RS, planejamento de TI, infraestrutura de TI',
  openGraph: {
    title: 'Consultoria de TI em Porto Alegre | dois.du',
    description:
      'Consultoria especializada em tecnologia da informação para empresas em Porto Alegre, RS. Planeje sua infraestrutura de TI com estratégia.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/consultoria-ti`,
    type: 'website',
  },
};

export default function ConsultoriaTiLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
