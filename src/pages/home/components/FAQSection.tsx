
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const FAQSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Cât durează dezvoltarea unui proiect AI?',
      answer: 'Depinde de complexitate: un prototip simplu poate fi gata în 7 zile, iar un sistem complex poate dura 2-3 luni. Oferim estimări clare după analiza inițială.'
    },
    {
      question: 'Cum asigurați confidențialitatea datelor?',
      answer: 'Semnăm acorduri de confidențialitate stricte, folosim infrastructură securizată și respectăm GDPR. Datele tale rămân proprietatea ta exclusivă.'
    },
    {
      question: 'Lucrați cu date sensibile?',
      answer: 'Da, avem experiență cu date medicale, financiare și legale. Implementăm măsuri de securitate suplimentare și respectăm toate reglementările specifice domeniului.'
    },
    {
      question: 'Oferiți mentenanță după lansare?',
      answer: 'Absolut! Oferim pachete de mentenanță care includ monitorizare, actualizări și optimizări continue pentru a menține performanța optimă.'
    },
    {
      question: 'Ce licențe folosiți pentru cod?',
      answer: 'Codul dezvoltat pentru tine îți aparține 100%. Folosim doar tehnologii open-source sau cu licențe comerciale transparente, fără dependențe ascunse.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Întrebări <span className="text-[#FFD77B]">Frecvente</span>
          </h2>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Răspunsuri la cele mai comune întrebări despre serviciile noastre
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00FFF5] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <i className="ri-arrow-down-line text-2xl text-[#00FFF5]"></i>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nu găsești răspunsul la întrebarea ta?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-[#00FFF5] to-[#FFD77B] text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Contactează-ne direct
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
