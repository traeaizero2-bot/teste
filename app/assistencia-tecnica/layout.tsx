import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Assistência Técnica em Porto Alegre | dois.du',
  description:
    'Serviço de assistência técnica em informática para empresas e residências em Porto Alegre, RS. Manutenção, formatação e suporte remoto. Orçamento gratuito!',
  keywords:
    'assistência técnica Porto Alegre, suporte de informática RS, manutenção de computadores, suporte remoto',
  openGraph: {
    title: 'Assistência Técnica em Porto Alegre | dois.du',
    description:
      'Serviço de assistência técnica em informática para empresas e residências em Porto Alegre, RS. Manutenção, formatação e suporte remoto.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/assistencia-tecnica`,
    type: 'website',
  },
};

export default function AssistenciaTecnicaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
