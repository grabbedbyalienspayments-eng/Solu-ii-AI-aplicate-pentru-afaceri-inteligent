
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ProcessSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: 'ri-brain-line',
      title: 'Analiză & Scop',
      description: 'Înțelegem problema ta și definim obiectivele clare pentru soluția AI.',
      color: '#00FFF5'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Prototipare rapidă',
      description: 'Dezvoltăm un MVP funcțional pentru a testa conceptul și a valida abordarea.',
      color: '#FFD77B'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Lansare pilot',
      description: 'Implementăm soluția într-un mediu controlat pentru testare și optimizare.',
      color: '#00FFF5'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Optimizare continuă',
      description: 'Monitorizăm performanța și îmbunătățim constant modelul bazat pe feedback.',
      color: '#FFD77B'
    }
  ];

  return (
    <section id="process" className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Procesul <span className="text-[#00FFF5]">Nostru</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Metodologie structurată pentru livrarea de soluții AI de calitate
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00FFF5] via-[#FFD77B] to-[#00FFF5] transform -translate-y-1/2 rounded-full" />
          
          {/* Animated progress line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#00FFF5] to-[#FFD77B] transform -translate-y-1/2 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Icon container */}
                <motion.div
                  className="relative mx-auto mb-6"
                  animate={hoveredStep === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto relative z-10 border-4 border-white/20"
                    style={{ backgroundColor: step.color }}
                  >
                    <motion.i
                      className={`${step.icon} text-3xl text-black`}
                      animate={hoveredStep === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-0"
                    style={{ backgroundColor: step.color }}
                    animate={hoveredStep === index ? { opacity: 0.3, scale: 1.5 } : { opacity: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  animate={hoveredStep === index ? { y: -10 } : { y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 
                    className="text-xl font-bold mb-4 text-white"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      color: hoveredStep === index ? step.color : 'white'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
