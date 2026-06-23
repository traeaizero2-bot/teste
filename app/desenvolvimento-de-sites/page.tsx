'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';

export default function DesenvolvimentoDeSites() {
  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Desenvolvimento de Sites', item: '/desenvolvimento-de-sites' }
        ]} 
      />
      <ServiceSchema 
        name="Desenvolvimento de Sites" 
        description="Criação de sites profissionais, responsivos e otimizados para SEO em Porto Alegre e região."
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
              Desenvolvimento de Sites em Porto Alegre
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl">
              Crie um site profissional, moderno e otimizado para SEO com o estúdio dois.du em Porto Alegre, Rio Grande do Sul.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-accent mb-6">
                Por que ter um site profissional?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Um site é o cartão de visitas digital da sua empresa. Em Porto Alegre, onde o mercado é competitivo, ter uma presença online profissional faz toda a diferença.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nós desenvolvemos sites responsivos, ou seja, que se adaptam a qualquer tamanho de tela: celular, tablet ou desktop. Além disso, nossos sites são otimizados para os motores de busca, ajudando você a aparecer nas primeiras páginas do Google em Porto Alegre e região.
              </p>
              
              <h3 className="text-lg font-semibold text-green-primary mt-8 mb-4">
                O que incluímos no desenvolvimento?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Design personalizado alinhado à sua identidade visual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Responsividade total (celular, tablet e desktop)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Otimização SEO para Porto Alegre e região</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Integração com redes sociais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Formulários de contato funcionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Velocidade de carregamento otimizada</span>
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
                Pronto para começar?
              </h3>
              <p className="text-gray-700 mb-6">
                Solicite um orçamento gratuito para o desenvolvimento do seu site em Porto Alegre.
              </p>
              <Link 
                href="/contato" 
                className="w-full flex items-center justify-center bg-green-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-secondary transition-colors"
              >
                Solicitar Orçamento
              </Link>
              
              <div className="mt-8 pt-6 border-t border-gray-300">
                <h4 className="text-lg font-semibold text-orange-accent mb-4">
                  Atendemos em:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>Porto Alegre</li>
                  <li>Canoas</li>
                  <li>São Leopoldo</li>
                  <li>Novo Hamburgo</li>
                  <li>Toda a Região Metropolitana</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="bg-gray-light p-8 md:p-12 rounded-2xl mb-16">
            <h2 className="text-2xl font-bold text-black-primary mb-8 text-center">
              Nossos Diferenciais em Desenvolvimento de Sites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-green-primary mb-3">
                  Foco em Conversão
                </h3>
                <p className="text-gray-600">
                  Nossos sites são projetados para transformar visitantes em clientes, com CTAs estratégicos e navegação intuitiva.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-green-primary mb-3">
                  SEO Local Otimizado
                </h3>
                <p className="text-gray-600">
                  Trabalhamos a otimização para buscas locais em Porto Alegre e RS, ajudando você a ser encontrado por clientes da região.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-green-primary mb-3">
                  Suporte Contínuo
                </h3>
                <p className="text-gray-600">
                  Oferecemos suporte e manutenção para garantir que seu site sempre esteja atualizado e funcionando perfeitamente.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-black-primary mb-4">
              Vamos criar o site da sua empresa?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa em Porto Alegre a crescer online.
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-colors"
            >
              Falar com um Especialista
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
