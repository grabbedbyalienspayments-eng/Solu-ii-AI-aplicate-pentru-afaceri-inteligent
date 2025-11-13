
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00FFF5]/20 via-[#FFD77B]/20 to-[#00FFF5]/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(0,255,245,0.2) 0%, rgba(255,215,123,0.2) 50%, rgba(0,255,245,0.2) 100%)',
              'linear-gradient(45deg, rgba(255,215,123,0.2) 0%, rgba(0,255,245,0.2) 50%, rgba(255,215,123,0.2) 100%)',
              'linear-gradient(45deg, rgba(0,255,245,0.2) 0%, rgba(255,215,123,0.2) 50%, rgba(0,255,245,0.2) 100%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Animated light waves */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at ${50 + i * 20}% 50%, rgba(0,255,245,0.3) 0%, transparent 50%)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-[#00FFF5] to-[#FFD77B] bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ai un proiect AI?
          </h2>
          
          <motion.p
            className="text-2xl md:text-3xl mb-12 text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hai să-l testăm <span className="text-[#FFD77B]">împreună</span>
          </motion.p>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#00FFF5] rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
