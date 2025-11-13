
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F14] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo și descriere */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              NeuraLab
            </h3>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              AI care lucrează pentru tine. Soluții inteligente pentru afaceri moderne.
            </p>
          </div>

          {/* Pagini */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Pagini
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Servicii
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Studii de Caz
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Servicii
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Prototip AI în 7 zile
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  RAG pe datele tale
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Automatizări conversaționale
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  MLOps și monitorizare
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <i className="ri-mail-line mr-2 text-[#00FFF5]"></i>
                contact@neuralab.ro
              </li>
              <li className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <i className="ri-phone-line mr-2 text-[#00FFF5]"></i>
                +40 123 456 789
              </li>
              <li className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <i className="ri-map-pin-line mr-2 text-[#00FFF5]"></i>
                București, România
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright și Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span>© {currentYear} NeuraLab. Toate drepturile rezervate.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#00FFF5] transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  Politica de confidențialitate
                </a>
                <a href="#" className="hover:text-[#00FFF5] transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  Termeni și condiții
                </a>
                <a href="#" className="hover:text-[#00FFF5] transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  GDPR
                </a>
              </div>
            </div>

            {/* Made by */}
            <div className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              Made by{' '}
              <a 
                href="https://websiteon.ro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#00FFF5] hover:text-[#FFD77B] transition-colors duration-300 font-semibold whitespace-nowrap"
              >
                WebsiteON.ro
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
