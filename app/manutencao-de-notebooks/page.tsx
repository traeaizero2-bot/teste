'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manutenção de Notebooks em Porto Alegre | dois.du',
  description: 'Manutenção especializada em notebooks em Porto Alegre, RS. Troca de tela, bateria, teclado, SSD e muito mais. Orçamento gratuito!',
  keywords: 'manutenção notebook Porto Alegre, conserto notebook RS, troca tela notebook, troca bateria notebook',
  openGraph: {
    title: 'Manutenção de Notebooks em Porto Alegre | dois.du',
    description: 'Manutenção especializada em notebooks em Porto Alegre, RS. Troca de tela, bateria, teclado, SSD e muito mais.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/manutencao-de-notebooks`,
    type: 'website',
  }
};

export default function ManutencaoDeNotebooks() {
  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Manutenção de Notebooks', item: '/manutencao-de-notebooks' }
        ]} 
      />
      <ServiceSchema 
        name="Manutenção de Notebooks" 
        description="Manutenção especializada em notebooks: troca de tela, bateria, teclado, upgrade de SSD e memória em Porto Alegre."
        serviceType="ComputerRepair"
      />
      <Header />
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-black-primary mb-3 md:mb-4">
              Manutenção de Notebooks em Porto Alegre
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl">
              Serviço especializado em manutenção e reparo de notebooks em Porto Alegre, RS. Deixe o seu notebook como novo!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-accent mb-6">
                Problemas com seu notebook? Nós resolvemos!
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tela quebrada? Bateria que não carrega? Teclado com teclas que não funcionam? Nós realizamos reparos em notebooks de todas as marcas e modelos em Porto Alegre.
              </p>
              
              <h3 className="text-lg font-semibold text-green-primary mt-8 mb-4">
                Principais serviços:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Troca de tela quebrada ou trincada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Substituição de bateria viciada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Troca de teclado com defeito</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Upgrade para SSD (aumenta velocidade)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Aumento de memória RAM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Limpeza interna e troca de pasta térmica</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-light p-8 rounded-2xl border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-black-primary mb-6">
                Orçamento gratuito
              </h3>
              <p className="text-gray-700 mb-6">
                Traga seu notebook para avaliação em Porto Alegre. Sem compromisso!
              </p>
              <Link 
                href="/contato" 
                className="w-full flex items-center justify-center bg-green-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-secondary transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-black-primary mb-4">
              Deixe seu notebook como novo
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato com a dois.du e agende a manutenção do seu notebook em Porto Alegre.
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-colors"
            >
              Agendar Manutenção
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
