'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Assistência Técnica em Porto Alegre | dois.du',
  description: 'Serviço de assistência técnica em informática para empresas e residências em Porto Alegre, RS. Manutenção, formatação e suporte remoto. Orçamento gratuito!',
  keywords: 'assistência técnica Porto Alegre, suporte de informática RS, manutenção de computadores, suporte remoto',
  openGraph: {
    title: 'Assistência Técnica em Porto Alegre | dois.du',
    description: 'Serviço de assistência técnica em informática para empresas e residências em Porto Alegre, RS. Manutenção, formatação e suporte remoto.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://doisdu.com.br'}/assistencia-tecnica`,
    type: 'website',
  }
};

export default function AssistenciaTecnica() {
  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Assistência Técnica', item: '/assistencia-tecnica' }
        ]} 
      />
      <ServiceSchema 
        name="Assistência Técnica em Informática" 
        description="Assistência técnica em informática, manutenção de computadores, suporte remoto e presencial em Porto Alegre e região."
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
              Assistência Técnica em Porto Alegre
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl">
              Soluções rápidas e eficientes para os seus problemas de informática em Porto Alegre, RS. Suporte técnico para empresas e residências.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-accent mb-6">
                Nossos Serviços de Assistência Técnica
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Oferecemos serviços de assistência técnica em informática para empresas e residências em Porto Alegre e região metropolitana.
              </p>
              
              <h3 className="text-lg font-semibold text-green-primary mt-8 mb-4">
                O que fazemos?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Manutenção preventiva e corretiva de computadores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Formatação e instalação de sistemas operacionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Remoção de vírus e malwares</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Upgrade de hardware (memória, SSD, placa de vídeo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Backup e recuperação de dados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Suporte remoto rápido e seguro</span>
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
                Precisa de ajuda?
              </h3>
              <p className="text-gray-700 mb-6">
                Entre em contato conosco para agendar seu atendimento técnico em Porto Alegre ou solicitar suporte remoto.
              </p>
              <Link 
                href="/contato" 
                className="w-full flex items-center justify-center bg-green-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-secondary transition-colors"
              >
                Solicitar Atendimento
              </Link>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-black-primary mb-4">
              Soluções rápidas para seus problemas de TI
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Não deixe que problemas de informática parem o seu trabalho. Entre em contato com a dois.du em Porto Alegre.
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-colors"
            >
              Falar com Técnico
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
