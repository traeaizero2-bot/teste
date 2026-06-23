'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BreadcrumbListSchema from '@/components/schema/BreadcrumbListSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';

export default function DesenvolvimentoDeSistemas() {
  return (
    <main>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Desenvolvimento de Sistemas', item: '/desenvolvimento-de-sistemas' }
        ]} 
      />
      <ServiceSchema 
        name="Desenvolvimento de Sistemas" 
        description="Desenvolvimento de sistemas empresariais personalizados, automação de processos e aplicativos sob medida em Porto Alegre."
        serviceType="SoftwareDevelopment"
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
              Desenvolvimento de Sistemas em Porto Alegre
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl">
              Automatize processos e aumente a produtividade da sua empresa com sistemas personalizados desenvolvidos pelo estúdio dois.du em Porto Alegre, RS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-accent mb-6">
                Por que investir em um sistema personalizado?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cada empresa é única, e seus processos também são. Um sistema personalizado é desenvolvido especialmente para atender às necessidades específicas do seu negócio em Porto Alegre.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Não mais adaptação a softwares genéricos! Nós desenvolvemos soluções que se encaixam perfeitamente aos seus fluxos de trabalho, aumentando a eficiência e reduzindo custos.
              </p>
              
              <h3 className="text-lg font-semibold text-green-primary mt-8 mb-4">
                O que podemos desenvolver?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Sistemas de gerenciamento empresarial (ERP customizado)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Aplicativos web e mobile</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Sistemas de gerenciamento de projetos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Automação de processos repetitivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Integração entre sistemas existentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-primary text-xl mt-1">✓</span>
                  <span>Painéis de controle e dashboards</span>
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
                Vamos conversar sobre o seu projeto?
              </h3>
              <p className="text-gray-700 mb-6">
                Conte-nos sobre o seu negócio e os desafios que você enfrenta. Criaremos uma solução personalizada.
              </p>
              <Link 
                href="/contato" 
                className="w-full flex items-center justify-center bg-green-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-secondary transition-colors"
              >
                Solicitar Orçamento
              </Link>
              
              <div className="mt-8 pt-6 border-t border-gray-300">
                <h4 className="text-lg font-semibold text-orange-accent mb-4">
                  Atendemos em toda a RS:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>Porto Alegre</li>
                  <li>Região Metropolitana</li>
                  <li>Todo o Rio Grande do Sul</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-black-primary mb-4">
              Transforme sua empresa com tecnologia
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como um sistema personalizado pode ajudar o seu negócio em Porto Alegre a crescer.
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-colors"
            >
              Iniciar Projeto
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
