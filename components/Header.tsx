'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 md:py-3 bg-green-primary/95 backdrop-blur-md shadow-sm' 
          : 'py-4 md:py-6 bg-green-primary'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/Site/logo-doisdu.png" 
            alt="dois.du" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 md:gap-8">
          <Link href="/" className="text-white hover:text-orange-accent font-medium transition-colors text-sm md:text-base">
            INÍCIO
          </Link>
          <Link href="/sobre" className="text-white hover:text-orange-accent font-medium transition-colors text-sm md:text-base">
            SOBRE
          </Link>
          <Link href="/portfolio" className="text-white hover:text-orange-accent font-medium transition-colors text-sm md:text-base">
            PORTFÓLIO
          </Link>
          <Link href="/contato" className="text-white hover:text-orange-accent font-medium transition-colors text-sm md:text-base">
            CONTATO
          </Link>
        </nav>
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <motion.span 
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.span>
          <motion.span 
            className="w-6 h-0.5 bg-white"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          ></motion.span>
          <motion.span 
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={closeMenu}
              className="md:hidden fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-green-primary border-t border-green-secondary z-40"
            >
              <nav className="container mx-auto px-4 md:px-6 py-8 flex flex-col gap-4">
                <Link 
                  href="/" 
                  onClick={closeMenu} 
                  className="text-white hover:text-orange-accent font-medium transition-colors py-3 text-lg"
                >
                  Início
                </Link>
                <Link 
                  href="/sobre" 
                  onClick={closeMenu} 
                  className="text-white hover:text-orange-accent font-medium transition-colors py-3 text-lg"
                >
                  Sobre
                </Link>
                <Link 
                  href="/portfolio" 
                  onClick={closeMenu} 
                  className="text-white hover:text-orange-accent font-medium transition-colors py-3 text-lg"
                >
                  Portfólio
                </Link>
                <Link 
                  href="/contato" 
                  onClick={closeMenu} 
                  className="text-white hover:text-orange-accent font-medium transition-colors py-3 text-lg"
                >
                  Contato
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
