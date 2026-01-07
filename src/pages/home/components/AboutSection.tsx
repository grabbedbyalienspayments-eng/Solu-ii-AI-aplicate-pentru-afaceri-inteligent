import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [counters, setCounters] = useState({ models: 0, reduction: 0, transparency: 0 });

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCounters(prev => ({
          models: prev.models < 10 ? prev.models + 1 : 10,
          reduction: prev.reduction < 80 ? prev.reduction + 2 : 80,
          transparency: prev.transparency < 100 ? prev.transparency + 3 : 100,
        }));
      }, 100);

      setTimeout(() => clearInterval(timer), 2000);
    }
  }, [inView]);

  const cards = [
    {
      icon: 'ri-search-line',
      title: 'Cercetare',
      description: 'Analizăm și testăm cele mai noi tehnologii AI pentru a găsi soluția perfectă.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Prototipare',
      description: 'Dezvoltăm rapid prototipuri funcționale pentru a valida conceptele.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scalare',
      description: 'Implementăm soluții robuste care cresc odată cu afacerea ta.'
    }
  ];

  return (
    <section id="despre" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20artificial%20intelligence%20neural%20network%20visualization%20with%20flowing%20data%20streams%2C%20geometric%20patterns%2C%20and%20digital%20connections%20in%20a%20futuristic%20tech%20environment%20with%20dark%20background%20and%20cyan%20blue%20accents&width=1920&height=800&seq=about-bg&orientation=landscape"
            alt="AI Background"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Despre <span className="text-[#00FFF5]">NeuraLab</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              NeuraLab este un studio românesc de inteligență artificială care dezvoltă soluții aplicate. 
              Credem că AI-ul nu înlocuiește oamenii — îi amplifică.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#00FFF5]/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#00FFF5] to-[#FFD77B]' : 'from-[#FFD77B] to-[#00FFF5]'} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${card.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Counters */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#00FFF5] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {counters.models}+
              </div>
              <div className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                modele custom livrate
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#FFD77B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {counters.reduction}%
              </div>
              <div className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                reducere timpi dezvoltare
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#00FFF5] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {counters.transparency}%
              </div>
              <div className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                transparență în cod
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
