
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const TechStackSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [isPaused, setIsPaused] = useState(false);

  const technologies = [
    { name: 'OpenAI', logo: 'https://readdy.ai/api/search-image?query=OpenAI%20logo%20clean%20minimalist%20design%20on%20transparent%20background&width=120&height=60&seq=openai-logo&orientation=landscape' },
    { name: 'LangChain', logo: 'https://readdy.ai/api/search-image?query=LangChain%20framework%20logo%20clean%20design%20on%20transparent%20background&width=120&height=60&seq=langchain-logo&orientation=landscape' },
    { name: 'Python', logo: 'https://readdy.ai/api/search-image?query=Python%20programming%20language%20logo%20clean%20design%20on%20transparent%20background&width=120&height=60&seq=python-logo&orientation=landscape' },
    { name: 'Next.js', logo: 'https://readdy.ai/api/search-image?query=Next.js%20framework%20logo%20clean%20minimalist%20design%20on%20transparent%20background&width=120&height=60&seq=nextjs-logo&orientation=landscape' },
    { name: 'Vercel', logo: 'https://readdy.ai/api/search-image?query=Vercel%20platform%20logo%20clean%20design%20on%20transparent%20background&width=120&height=60&seq=vercel-logo&orientation=landscape' },
    { name: 'HuggingFace', logo: 'https://readdy.ai/api/search-image?query=HuggingFace%20AI%20platform%20logo%20clean%20design%20on%20transparent%20background&width=120&height=60&seq=huggingface-logo&orientation=landscape' },
    { name: 'TensorFlow', logo: 'https://readdy.ai/api/search-image?query=TensorFlow%20machine%20learning%20framework%20logo%20clean%20design%20on%20transparent%20background&width=120&height=60&seq=tensorflow-logo&orientation=landscape' },
    { name: 'PyTorch', logo: 'https://readdy.ai/api/search-image?query=PyTorch%20deep%20learning%20framework%20logo%20clean%20design%20on%20transparent%20background&width=120&height=60&seq=pytorch-logo&orientation=landscape' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section id="tech-stack" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Stack <span className="text-[#FFD77B]">Tehnologic</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
            Lucrăm cu cele mai stabile framework-uri AI
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={isPaused ? {} : { x: [0, -50 * technologies.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-32 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center p-4 group-hover:bg-white/10 group-hover:border-[#00FFF5]/50 transition-all duration-300">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-400 mt-2 group-hover:text-[#00FFF5] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0B0F14] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0B0F14] to-transparent pointer-events-none" />
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Și multe altele, adaptate nevoilor specifice ale proiectului tău
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
