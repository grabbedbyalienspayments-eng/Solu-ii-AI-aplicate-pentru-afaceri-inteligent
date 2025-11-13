
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../base/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'despre', 'servicii', 'studii', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'despre', label: 'Despre' },
    { id: 'servicii', label: 'Servicii' },
    { id: 'studii', label: 'Studii de caz' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 z-50 origin-left"
        style={{
          scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
        }}
      />
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <h1 className="text-2xl font-bold text-white font-poppins">
                Neura<span className="text-cyan-400">Lab</span>
              </h1>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <Button 
              variant="primary" 
              size="sm" 
              glow
              onClick={() => scrollToSection('contact')}
            >
              Cere ofertă
            </Button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
