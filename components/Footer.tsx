'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Zero1Partner from './Zero1Partner';
import { FaInstagram, FaBehance, FaLinkedinIn } from 'react-icons/fa';

type SiteSettings = {
  site_name: string;
  site_description: string;
  contact_email: string;
  whatsapp_number: string;
  instagram_link: string;
  facebook_link: string;
  linkedin_link: string;
  behance_link: string;
};

type Data = {
  siteSettings: SiteSettings;
  home: {
    title: string;
    description: string;
  };
};

const Footer = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !data) {
    return null;
  }

  return (
    <footer className="bg-green-primary py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Área do cliente */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">

            {/* Marca */}
            <div>
              <Link
                href="/"
                className="text-xl md:text-2xl font-bold text-white"
              >
                {data.siteSettings?.site_name || data.site?.name || 'dois.du'}
              </Link>

              <p className="mt-4 text-green-100 text-sm">
                {data.home?.description || data.site?.description || 'Transformando ideias em identidades memoráveis.'}
              </p>
            </div>

            {/* Redes */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Redes Sociais
              </h3>

              <div className="flex flex-col gap-3">
                {data.siteSettings?.instagram_link && (
                  <a
                    href={data.siteSettings.instagram_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-100 hover:text-orange-accent transition-colors"
                  >
                    <FaInstagram size={16} />
                    Instagram
                  </a>
                )}

                {data.siteSettings?.behance_link && (
                  <a
                    href={data.siteSettings.behance_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-100 hover:text-orange-accent transition-colors"
                  >
                    <FaBehance size={16} />
                    Behance
                  </a>
                )}

                {data.siteSettings?.linkedin_link && (
                  <a
                    href={data.siteSettings.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-100 hover:text-orange-accent transition-colors"
                  >
                    <FaLinkedinIn size={16} />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* Direitos */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Informações
              </h3>

              <p className="text-green-200 text-sm">
                © {new Date().getFullYear()} {data.siteSettings?.site_name || 'dois.du'}
              </p>

              <p className="text-green-200 text-sm mt-2">
                Todos os direitos reservados.
              </p>
            </div>

          </div>

          {/* Zero1 isolada na direita */}
          <div className="flex justify-end lg:min-w-[280px]">
            <Zero1Partner isDark={true} />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
