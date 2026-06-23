'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultoria de TI em Porto Alegre | dois.du',
  description: 'Consultoria especializada em tecnologia da informação para empresas em Porto Alegre, RS. Planeje sua infraestrutura de TI com estratégia. Orçamento gratuito!',
  keywords: 'consultoria TI Porto Alegre, consultoria de tecnologia RS, planejamento de TI, infraestrutura de TI',
  openGraph: {
    title: 'Consultoria de TI em Porto Alegre | dois.du',
    description: 'Consultoria especializada em tecnologia da informação para empresas em Porto Alegre, RS. Planeje sua infraestrutura de TI com estratégia.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/consultoria-ti`,
    type: 'website',
  }
};

export default function ConsultoriaTI() {
  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Consultoria de TI', item: '/consultoria-ti' }
        ]} 
      />
      <ServiceSchema 
        name="Consultoria de TI" 
        description="Consultoria estratégica em tecnologia da informação para empresas, planejamento de infraestrutura e soluções de TI em Porto Alegre."
        serviceType="ConsultingService"
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
              Consultoria de TI em Porto Alegre
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl">
              Alinhe a tecnologia aos objetivos do seu negócio com consultoria de TI especializada em Porto Alegre, RS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-accent mb-6">
                Como a consultoria de TI pode ajudar sua empresa?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A tecnologia deve ser um aliado estratégico do seu negócio. Nossa consultoria de TI em Porto Alegre ajuda você a planejar, implementar e otimizar suas soluções de tecnologia.
              </p>
              
              <h3 className="text-lg font-semibold text-green-primary mt-8 mb-4">
                Áreas de consultoria:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Planejamento estratégico de TI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Avaliação e otimização de infraestrutura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Consultoria em segurança da informação</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Seleção de softwares e ferramentas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Modernização de sistemas legados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Treinamento de equipes de TI</span>
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
                Vamos conversar sobre sua TI?
              </h3>
              <p className="text-gray-700 mb-6">
                Agende uma consultoria gratuita e descubra como podemos ajudar sua empresa em Porto Alegre.
              </p>
              <Link 
                href="/contato" 
                className="w-full flex items-center justify-center bg-green-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-secondary transition-colors"
              >
                Agendar Consultoria
              </Link>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-black-primary mb-4">
              Leve sua TI para o próximo nível
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato com a dois.du e descubra como a consultoria de TI pode transformar o seu negócio em Porto Alegre.
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-colors"
            >
              Iniciar Consultoria
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
