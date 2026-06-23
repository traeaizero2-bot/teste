'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';

export default function LandingPages() {
  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Landing Pages', item: '/landing-pages' }
        ]} 
      />
      <ServiceSchema 
        name="Criação de Landing Pages" 
        description="Criação de landing pages de alta conversão, otimizadas para capturar leads e aumentar vendas em Porto Alegre e região."
        serviceType="WebDesign"
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
              Landing Pages de Alta Conversão em Porto Alegre
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl">
              Transforme visitantes em clientes com landing pages profissionais, otimizadas para conversão, desenvolvidas pelo estúdio dois.du em Porto Alegre, RS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-accent mb-6">
                O que é uma Landing Page?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Uma landing page é uma página única, focada em um único objetivo: converter visitantes em leads ou clientes. Ideal para campanhas de marketing digital em Porto Alegre.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Diferente de um site tradicional, a landing page remove distrações e direciona o visitante para uma ação específica: preencher um formulário, fazer uma compra ou entrar em contato.
              </p>
              
              <h3 className="text-lg font-semibold text-green-primary mt-8 mb-4">
                Nossas Landing Pages incluem:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Design moderno e alinhado à sua identidade visual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Copywriting persuasivo e focado em conversão</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Formulários otimizados para captura de leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>CTAs (Call to Action) estrategicamente posicionados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Responsividade para todos os dispositivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Integração com ferramentas de e-mail marketing</span>
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
                Aumente suas conversões hoje!
              </h3>
              <p className="text-gray-700 mb-6">
                Solicite sua landing page profissional e comece a capturar mais leads para o seu negócio em Porto Alegre.
              </p>
              <Link 
                href="/contato" 
                className="w-full flex items-center justify-center bg-green-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-secondary transition-colors"
              >
                Criar Minha Landing Page
              </Link>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-black-primary mb-4">
              Pronto para converter mais?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos criar uma landing page que realmente funciona para o seu negócio em Porto Alegre.
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-colors"
            >
              Falar Conosco
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
