// ServicesSection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      title: 'Prototip AI în 7 zile',
      description: 'Transformăm ideea ta într-un prototip funcțional în doar o săptămână.',
      icon: 'ri-flashlight-line',
      gradient: 'from-[#00FFF5] to-[#0080FF]'
    },
    {
      title: 'RAG pe datele tale',
      description: 'Implementăm sisteme de căutare inteligentă pe documentele și datele tale.',
      icon: 'ri-database-2-line',
      gradient: 'from-[#FFD77B] to-[#FF8C00]'
    },
    {
      title: 'Automatizări conversaționale',
      description: 'Chatboti și asistenți vocali care înțeleg contextul și oferă răspunsuri relevante.',
      icon: 'ri-chat-3-line',
      gradient: 'from-[#00FFF5] to-[#00FF80]'
    },
    {
      title: 'MLOps și monitorizare modele',
      description: 'Infrastructură robustă pentru deployment, monitorizare și optimizare continuă.',
      icon: 'ri-settings-3-line',
      gradient: 'from-[#FFD77B] to-[#FF6B6B]'
    }
  ];

  return (
    <section id="servicii" className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Servicii <span className="text-[#00FFF5]">AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Soluții complete de inteligență artificială adaptate nevoilor tale specifice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00FFF5] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
