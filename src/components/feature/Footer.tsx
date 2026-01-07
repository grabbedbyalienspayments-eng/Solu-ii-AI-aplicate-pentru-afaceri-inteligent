import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const modalContent = {
    termeni: {
      title: 'Termeni și Condiții',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">1. Acceptarea Termenilor</h3>
        <p class="text-gray-300 mb-4">Prin accesarea și utilizarea serviciilor NeuraLab, acceptați să fiți legat de acești Termeni și Condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați serviciile noastre.</p>

        <h3 class="text-2xl font-bold text-white mb-4">2. Servicii Oferite</h3>
        <p class="text-gray-300 mb-4">NeuraLab oferă servicii de consultanță și dezvoltare în domeniul inteligenței artificiale, incluzând dar nelimitându-se la: prototipare AI, implementare RAG, automatizări conversaționale și MLOps.</p>

        <h3 class="text-2xl font-bold text-white mb-4">3. Proprietate Intelectuală</h3>
        <p class="text-gray-300 mb-4">Codul dezvoltat specific pentru proiectul dumneavoastră vă aparține în totalitate. NeuraLab păstrează drepturile asupra framework-urilor și tool-urilor generice dezvoltate intern.</p>

        <h3 class="text-2xl font-bold text-white mb-4">4. Confidențialitate și NDA</h3>
        <p class="text-gray-300 mb-4">Toate proiectele sunt acoperite de acorduri de confidențialitate stricte. Datele și informațiile dumneavoastră nu vor fi divulgate terților fără consimțământul explicit.</p>

        <h3 class="text-2xl font-bold text-white mb-4">5. Garanții și Limitări</h3>
        <p class="text-gray-300 mb-4">Oferim garanție de 30 de zile pentru corectarea bug-urilor din codul livrat. Nu garantăm rezultate de business specifice, ci doar implementarea tehnică conform specificațiilor agreate.</p>

        <h3 class="text-2xl font-bold text-white mb-4">6. Plăți și Facturare</h3>
        <p class="text-gray-300 mb-4">Plățile se efectuează conform calendarului stabilit în contract. Acceptăm plăți prin transfer bancar și factură fiscală conform legislației românești.</p>

        <h3 class="text-2xl font-bold text-white mb-4">7. Modificări ale Termenilor</h3>
        <p class="text-gray-300 mb-4">NeuraLab își rezervă dreptul de a modifica acești termeni. Clienții existenți vor fi notificați cu 30 de zile înainte de intrarea în vigoare a oricăror modificări semnificative.</p>
      `
    },
    confidentialitate: {
      title: 'Politica de Confidențialitate',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">1. Introducere</h3>
        <p class="text-gray-300 mb-4">NeuraLab respectă confidențialitatea datelor personale și se angajează să le protejeze conform GDPR și legislației românești aplicabile în domeniul protecției datelor.</p>

        <h3 class="text-2xl font-bold text-white mb-4">2. Date Colectate</h3>
        <p class="text-gray-300 mb-4">Colectăm următoarele categorii de date:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Date de identificare: nume, prenume, funcție</li>
          <li>Date de contact: email, telefon</li>
          <li>Date despre proiect: descriere tehnică, obiective business</li>
          <li>Date de comunicare: istoricul conversațiilor și meeting-urilor</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">3. Scopul Prelucrării</h3>
        <p class="text-gray-300 mb-4">Utilizăm datele pentru:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Furnizarea serviciilor de consultanță și dezvoltare AI</li>
          <li>Comunicarea legată de proiecte</li>
          <li>Îmbunătățirea calității serviciilor</li>
          <li>Respectarea obligațiilor legale (fiscale, contabile)</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">4. Partajarea Datelor</h3>
        <p class="text-gray-300 mb-4">Nu vindem sau închiriem datele dumneavoastră. Le partajăm doar cu:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Procesatori de plăți (pentru facturare)</li>
          <li>Furnizori de servicii cloud (AWS, Google Cloud) - cu garanții de securitate</li>
          <li>Autorități publice (doar la cerere legală)</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">5. Drepturile Dumneavoastră</h3>
        <p class="text-gray-300 mb-4">Conform GDPR, aveți dreptul la:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Acces la datele personale</li>
          <li>Rectificarea datelor incorecte</li>
          <li>Ștergerea datelor ("dreptul de a fi uitat")</li>
          <li>Restricționarea prelucrării</li>
          <li>Portabilitatea datelor</li>
          <li>Opoziție față de prelucrare</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">6. Securitatea Datelor</h3>
        <p class="text-gray-300 mb-4">Implementăm măsuri de securitate avansate: criptare end-to-end, autentificare multi-factor, backup-uri regulate și acces restrictionat bazat pe roluri.</p>

        <h3 class="text-2xl font-bold text-white mb-4">7. Perioada de Stocare</h3>
        <p class="text-gray-300 mb-4">Păstrăm datele pentru:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Date proiect: durata contractului + 3 ani</li>
          <li>Date financiare: 10 ani (conform legislației fiscale)</li>
          <li>Date marketing: până la retragerea consimțământului</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">8. Contact DPO</h3>
        <p class="text-gray-300 mb-4">Pentru orice întrebări despre protecția datelor: contact@neuralab.ro sau 070 000 000</p>
      `
    },
    gdpr: {
      title: 'GDPR - Protecția Datelor',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">Conformitatea NeuraLab cu GDPR</h3>
        <p class="text-gray-300 mb-4">NeuraLab este pe deplin conformă cu Regulamentul (UE) 2016/679 privind protecția datelor cu caracter personal (GDPR) și Legea 190/2018 din România.</p>

        <h3 class="text-2xl font-bold text-white mb-4">1. Operator de Date</h3>
        <p class="text-gray-300 mb-4"><strong>NeuraLab</strong><br/>București, România<br/>Email: contact@neuralab.ro<br/>Telefon: 070 000 000</p>

        <h3 class="text-2xl font-bold text-white mb-4">2. Temeiuri Legale</h3>
        <p class="text-gray-300 mb-4">Prelucrăm datele pe baza:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li><strong>Contract:</strong> Pentru executarea serviciilor de consultanță AI</li>
          <li><strong>Consimțământ:</strong> Pentru comunicări marketing și newsletter</li>
          <li><strong>Interes legitim:</strong> Pentru îmbunătățirea serviciilor și securitate</li>
          <li><strong>Obligație legală:</strong> Pentru conformare fiscală și legală</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">3. Transferuri Internaționale</h3>
        <p class="text-gray-300 mb-4">Când folosim servicii cloud internationale (AWS, Google Cloud), ne asigurăm că:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Există clauze contractuale standard UE</li>
          <li>Date sunt stocate preferențial în UE</li>
          <li>Aplicăm criptare pentru date în tranzit și în repaus</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">4. Evaluarea Impactului (DPIA)</h3>
        <p class="text-gray-300 mb-4">Pentru proiecte care implică prelucrarea datelor sensibile sau la scară largă, efectuăm Evaluări de Impact asupra Protecției Datelor înainte de începerea implementării.</p>

        <h3 class="text-2xl font-bold text-white mb-4">5. Breach Notification</h3>
        <p class="text-gray-300 mb-4">În cazul unei încălcări a securității datelor, vom:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Notifica ANSPDCP în maximum 72 ore</li>
          <li>Informa persoanele afectate fără întârzieri nejustificate</li>
          <li>Documenta incidentul și măsurile corective</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">6. Procesatori și Subprocesatori</h3>
        <p class="text-gray-300 mb-4">Lucrăm doar cu procesatori care oferă garanții suficiente pentru implementarea măsurilor tehnice și organizatorice adecvate. Avem contracte GDPR-compliant cu toți partenerii.</p>

        <h3 class="text-2xl font-bold text-white mb-4">7. Dreptul la Plângere</h3>
        <p class="text-gray-300 mb-4">Aveți dreptul de a depune o plângere la:<br/><strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong><br/>B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București<br/>Tel: +40.318.059.211<br/>Email: anspdcp@dataprotection.ro</p>

        <h3 class="text-2xl font-bold text-white mb-4">8. Actualizări Politică</h3>
        <p class="text-gray-300 mb-4">Această politică a fost actualizată ultima dată la: 07.01.2025. Vom publica orice modificări viitoare pe website și vom notifica clienții activi cu 30 de zile înainte.</p>
      `
    },
    cookies: {
      title: 'Politica Cookies',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">Ce sunt Cookie-urile?</h3>
        <p class="text-gray-300 mb-4">Cookie-urile sunt fișiere text mici stocate pe dispozitivul dumneavoastră care ne ajută să oferim o experiență mai bună și să înțelegem cum este folosit website-ul nostru.</p>

        <h3 class="text-2xl font-bold text-white mb-4">Tipuri de Cookie-uri Utilizate</h3>
        
        <h4 class="text-xl font-bold text-white mb-3 mt-4">1. Cookie-uri Esențiale (Obligatorii)</h4>
        <p class="text-gray-300 mb-4">Necesare pentru funcționarea de bază a site-ului:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Cookie-uri de sesiune pentru autentificare</li>
          <li>Cookie-uri pentru securitate și prevenirea fraudei</li>
          <li>Cookie-uri pentru preferințe de bază (limba)</li>
        </ul>

        <h4 class="text-xl font-bold text-white mb-3 mt-4">2. Cookie-uri de Performanță (Opționale)</h4>
        <p class="text-gray-300 mb-4">Colectează informații anonime despre utilizare:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Google Analytics (paginile vizitate, durata sesiunii)</li>
          <li>Metrici de performanță (viteza de încărcare)</li>
          <li>Heat maps (cum interacționați cu site-ul)</li>
        </ul>

        <h4 class="text-xl font-bold text-white mb-3 mt-4">3. Cookie-uri Funcționale (Opționale)</h4>
        <p class="text-gray-300 mb-4">Îmbunătățesc experiența:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Reținerea preferințelor de afișare</li>
          <li>Chat live și suport</li>
          <li>Video embedding (YouTube, Vimeo)</li>
        </ul>

        <h4 class="text-xl font-bold text-white mb-3 mt-4">4. Cookie-uri de Marketing (Opționale)</h4>
        <p class="text-gray-300 mb-4">Pentru publicitate targetată:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Google Ads remarketing</li>
          <li>LinkedIn Insight Tag</li>
          <li>Facebook Pixel</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Cookie-uri Terțe Părți</h3>
        <p class="text-gray-300 mb-4">Folosim servicii terțe care pot seta propriile cookie-uri:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li><strong>Google Analytics:</strong> Analiză trafic</li>
          <li><strong>Cloudflare:</strong> Securitate și CDN</li>
          <li><strong>Stripe:</strong> Procesare plăți (dacă aplicabil)</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Gestionarea Cookie-urilor</h3>
        <p class="text-gray-300 mb-4">Puteți controla cookie-urile prin:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li><strong>Banner-ul de cookie-uri:</strong> La prima vizită, puteți alege ce tipuri acceptați</li>
          <li><strong>Setările browserului:</strong> Blocați sau ștergeți cookie-urile</li>
          <li><strong>Opt-out tools:</strong> Google Analytics Opt-out Browser Add-on</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Instrucțiuni Browser</h3>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
          <li><strong>Firefox:</strong> Options → Privacy & Security</li>
          <li><strong>Safari:</strong> Preferences → Privacy</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Impact Respingere</h3>
        <p class="text-gray-300 mb-4">Dacă respingeți cookie-urile opționale:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Site-ul va funcționa normal pentru funcțiile de bază</li>
          <li>Nu veți vedea conținut personalizat</li>
          <li>Anumite funcționalități avansate pot fi limitate</li>
          <li>Nu vom putea îmbunătăți experiența bazat pe comportamentul dvs.</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Durata Cookie-urilor</h3>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li><strong>Sesiune:</strong> Expiră când închideți browser-ul</li>
          <li><strong>Persistente:</strong> 30 zile - 2 ani (funcție de tip)</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Actualizări</h3>
        <p class="text-gray-300 mb-4">Această politică poate fi actualizată periodic. Data ultimei modificări: 07.01.2025</p>

        <h3 class="text-2xl font-bold text-white mb-4">Contact</h3>
        <p class="text-gray-300 mb-4">Pentru întrebări: contact@neuralab.ro sau 070 000 000</p>
      `
    }
  };

  return (
    <>
      <footer className="bg-[#0B0F14] border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo și descriere */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                NeuraLab
              </h3>
              <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                AI care lucrează pentru tine. Soluții inteligente pentru afaceri moderne.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00FFF5] transition-all duration-300">
                  <i className="ri-linkedin-fill text-white text-lg"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00FFF5] transition-all duration-300">
                  <i className="ri-github-fill text-white text-lg"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00FFF5] transition-all duration-300">
                  <i className="ri-twitter-x-line text-white text-lg"></i>
                </a>
              </div>
            </div>

            {/* Navigare */}
            <div>
              <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Navigare
              </h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('despre')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Despre Noi
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('servicii')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Servicii
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('studii')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Studii de Caz
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => openModal('termeni')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Termeni și Condiții
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('confidentialitate')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Politica de Confidențialitate
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('gdpr')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    GDPR
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('cookies')} className="text-gray-400 hover:text-[#00FFF5] transition-colors duration-300 text-sm text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Politica Cookies
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <i className="ri-mail-line text-[#00FFF5]"></i>
                  <a href="mailto:contact@neuralab.ro" className="hover:text-[#00FFF5] transition-colors">
                    contact@neuralab.ro
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <i className="ri-phone-line text-[#00FFF5]"></i>
                  <a href="tel:+40700000000" className="hover:text-[#00FFF5] transition-colors">
                    070 000 000
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <i className="ri-map-pin-line text-[#00FFF5] mt-1"></i>
                  <span>București, România</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400 text-center md:text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                © {currentYear} NeuraLab. Toate drepturile rezervate.
              </div>

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

      {/* Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-[#1a1f2e] border-2 border-[#00FFF5]/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#1a1f2e] border-b border-white/10 p-6 flex justify-between items-center">
              <h2 
                className="text-3xl font-bold text-[#00FFF5]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {modalContent[activeModal as keyof typeof modalContent].title}
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#00FFF5] transition-all duration-300"
              >
                <i className="ri-close-line text-2xl text-white"></i>
              </button>
            </div>
            
            <div 
              className="p-6 text-gray-300 prose prose-invert max-w-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
              dangerouslySetInnerHTML={{ 
                __html: modalContent[activeModal as keyof typeof modalContent].content 
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
