import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Manutenção de Notebooks em Porto Alegre | dois.du',
  description:
    'Manutenção especializada em notebooks em Porto Alegre, RS. Troca de tela, bateria, teclado, SSD e muito mais. Orçamento gratuito!',
  keywords:
    'manutenção notebook Porto Alegre, conserto notebook RS, troca tela notebook, troca bateria notebook',
  openGraph: {
    title: 'Manutenção de Notebooks em Porto Alegre | dois.du',
    description:
      'Manutenção especializada em notebooks em Porto Alegre, RS. Troca de tela, bateria, teclado, SSD e muito mais.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/manutencao-de-notebooks`,
    type: 'website',
  },
};

export default function ManutencaoDeNotebooksLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
