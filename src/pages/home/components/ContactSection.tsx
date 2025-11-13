import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validare email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('Te rog să introduci o adresă de email validă.');
      return;
    }

    // Validare textarea - maxim 500 caractere
    if (formData.message.length > 500) {
      setSubmitMessage('Mesajul nu poate depăși 500 de caractere.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('projectType', formData.projectType);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4au0cjbpm5d1fqikieg', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitMessage('Mulțumim! Te vom contacta în 24h.');
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        setSubmitMessage('A apărut o eroare. Te rog să încerci din nou.');
      }
    } catch (error) {
      setSubmitMessage('A apărut o eroare. Te rog să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Să vorbim despre <span className="text-[#00FFF5]">proiectul</span> tău
          </h2>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Completează formularul și îți vom răspunde în maximum 24 de ore
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl" />
          
          <form 
            onSubmit={handleSubmit}
            className="relative z-10 p-8 md:p-12"
            data-readdy-form
            id="contact-neuralab"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Nume *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFF5] transition-colors duration-300 text-sm"
                  placeholder="Numele tău complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFF5] transition-colors duration-300 text-sm"
                  placeholder="adresa@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="projectType" className="block text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Tip proiect
              </label>
              <div className="relative">
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#00FFF5] transition-colors duration-300 text-sm pr-8 appearance-none"
                >
                  <option value="">Selectează tipul proiectului</option>
                  <option value="prototip">Prototip AI</option>
                  <option value="automatizare">Automatizare</option>
                  <option value="consultanta">Consultanță</option>
                  <option value="altceva">Altceva</option>
                </select>
                <i className="ri-arrow-down-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Mesaj *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                maxLength={500}
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFF5] transition-colors duration-300 resize-none text-sm"
                placeholder="Descrie-ne proiectul tău și cum te putem ajuta..."
              />
              <div className="text-right text-gray-400 text-xs mt-1">
                {formData.message.length}/500 caractere
              </div>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="group relative overflow-hidden bg-gradient-to-r from-[#00FFF5] to-[#FFD77B] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                </span>
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {submitMessage && (
                <motion.p
                  className={`mt-4 text-center ${submitMessage.includes('Mulțumim') ? 'text-[#00FFF5]' : 'text-red-400'}`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitMessage}
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;