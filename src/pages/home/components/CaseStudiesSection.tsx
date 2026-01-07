// CaseStudiesSection.tsx - modificat cu id="studii"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

const CaseStudiesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      title: 'RetailPredict',
      problem: 'Predicția stocurilor pentru retailer cu 50+ magazine',
      solution: 'Model ML pentru forecasting bazat pe date istorice și tendințe',
      result: '35% reducere waste, 20% creștere profit',
      image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20analytics%20dashboard%20showing%20inventory%20prediction%20charts%2C%20sales%20forecasting%20graphs%2C%20and%20stock%20optimization%20metrics%20with%20clean%20blue%20and%20white%20interface%20design&width=800&height=600&seq=retail-predict&orientation=landscape'
    },
    {
      title: 'VoiceClassify',
      problem: 'Clasificarea automată a apelurilor în call center',
      solution: 'Sistem NLP pentru analiza sentiment și categorisire',
      result: '60% reducere timp procesare, 90% acuratețe',
      image: 'https://readdy.ai/api/search-image?query=Voice%20recognition%20and%20call%20center%20analytics%20interface%20with%20waveform%20visualizations%2C%20sentiment%20analysis%20charts%2C%20and%20automated%20classification%20system%20in%20modern%20dark%20theme&width=800&height=600&seq=voice-classify&orientation=landscape'
    },
    {
      title: 'DocStream',
      problem: 'Procesarea automată a documentelor legale',
      solution: 'OCR + NLP pentru extragerea și structurarea informațiilor',
      result: '80% reducere timp manual, 95% acuratețe extragere',
      image: 'https://readdy.ai/api/search-image?query=Document%20processing%20automation%20interface%20showing%20OCR%20text%20extraction%2C%20legal%20document%20analysis%2C%20and%20structured%20data%20organization%20with%20professional%20blue%20and%20gray%20design&width=800&height=600&seq=doc-stream&orientation=landscape'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [caseStudies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="studii" className="py-20 px-6 bg-gradient-to-b from-white/5 to-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Studii de <span className="text-[#FFD77B]">Caz</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Proiecte reale care demonstrează puterea AI-ului aplicat în business
          </p>
        </motion.div>

        <div className="relative">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 p-12">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-80 object-cover object-top rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-4xl font-bold mb-6 text-[#00FFF5]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {study.title}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-[#FFD77B]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Problemă
                          </h4>
                          <p className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {study.problem}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-[#FFD77B]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Soluție
                          </h4>
                          <p className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {study.solution}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-[#FFD77B]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Rezultat
                          </h4>
                          <p className="text-[#00FFF5] font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {study.result}
                          </p>
                        </div>
                      </div>

                      <Button
                        variant="primary"
                        className="mt-8 bg-gradient-to-r from-[#00FFF5] to-[#FFD77B] text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 w-fit"
                      >
                        Vezi demo complet
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#00FFF5] w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
