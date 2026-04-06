/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Instagram, 
  Linkedin, 
  Eye, 
  ThumbsUp, 
  MapPin,
  ExternalLink,
  MoreHorizontal,
  Mail,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Behance = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12h2a2.1 2.1 0 1 1 0 4H9V8h2a2.1 2.1 0 1 1 0 4H9z" />
    <path d="M17 12a2 2 0 1 1 0 4h-2v-4h2z" />
    <path d="M15 10h4" />
  </svg>
);

const projects = [
  {
    title: "Design UI/UX Website SMAN 1 Karawang",
    category: "UI/UX Design",
    image: "/gambar 1.png",
    link: "https://www.behance.net/gallery/174706483/Design-UIUX-Website-SMAN-1-Karawang"
  },
  {
    title: "Desk Calendar Design Disparpora Kab Karawang",
    category: "Graphic Design",
    image: "/Gambar 2.png",
    link: "https://www.behance.net/gallery/243798881/Desk-Calender-Design-Disparpora-Kab-Karawang"
  },
  {
    title: "Design Calendar Disparpora Kab Karawang",
    category: "Graphic Design",
    image: "/gambar 3.png",
    link: "https://www.behance.net/gallery/243799909/Design-Calender-Disparpora-Kab-Karawang"
  },
  {
    title: "Rains Collagen Design Packaging",
    category: "Packaging Design",
    image: "/gambar 4.png",
    link: "https://www.behance.net/gallery/181341921/Rains-Collagen-Design-Packaging"
  },
  {
    title: "Design Packaging Premium Rice Karawang",
    category: "Packaging Design",
    image: "/gambar 5.png",
    link: "https://www.behance.net/gallery/180671887/DESIGN-PACKAGING-PREMIUM-RICE-KARAWANG"
  },
  {
    title: "Potato Chips Design Packaging - Mr Potato",
    category: "Packaging Design",
    image: "/gambar 6.png",
    link: "https://www.behance.net/gallery/182325949/Potato-Chips-Design-Packaging-For-Sumbition-Mr-Potato"
  },
  {
    title: "Sribufood Restaurant Design Food Packaging",
    category: "Packaging Design",
    image: "/gambar 7.png",
    link: "https://www.behance.net/gallery/191949523/Sribufood-Restaurant-Design-Food-Packaging"
  },
  {
    title: "Design of Health Supplement Products",
    category: "Product Design",
    image: "/gambar 8.png",
    link: "https://www.behance.net/gallery/224634539/Design-of-health-supplement-products-for-exercising"
  },
  {
    title: "Design Packaging Foodbox Sribu",
    category: "Packaging Design",
    image: "/gambar 9.jpeg",
    link: "https://www.behance.net/gallery/180430355/Desig-Packaging-Foodbox-Srbu"
  }
];

const certificateSlides = [
  "/cv 1.png",
  "/cv 2.png",
  "/cv 4.jpeg",
  "/cv 3.jpeg"
];

type Tab = 'portofolio' | 'about';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('portofolio');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % certificateSlides.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + certificateSlides.length) % certificateSlides.length);
  };

  // Auto-slideshow effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isModalOpen) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % certificateSlides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans text-gray-800">
      <style>{`
        :root {
          --red-garuda: #C41E3A;
          --concrete-grey: #E5E7EB;
          --dark-charcoal: #1A1A1A;
        }
      `}</style>

      {/* Banner Section */}
      <div className="relative w-full h-[350px] bg-black overflow-hidden">
        <img 
          src="banner.png" 
          className="w-full h-full object-cover" 
          alt="Banner"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Profile Card - Now Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6 w-full max-w-md mb-8"
          >
            <div className="flex flex-col items-center border-b pb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md -mt-20 bg-gray-200">
                <img 
                  src="https://scontent-sin2-1.xx.fbcdn.net/v/t39.30808-6/661825632_26497108009942312_7683288610411077849_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=oVTRXnHszKAQ7kNvwEWWl4c&_nc_oc=Adq6mvj0fbgUimX61RAtH6OGO7Vf-YVJYIz4ELs8JtSSYwaEbAoJ3QCq8F4hPOf6Xf1DLZpOyqkw4i6qylk-zAiV&_nc_zt=23&_nc_ht=scontent-sin2-1.xx&_nc_gid=aPkV2h7Pt_lNtRE5eccPJg&_nc_ss=7a3a8&oh=00_Af1wpa54qFUD1b863ezNx_p5j5lsTex75XrGje1p7y8bpQ&oe=69D42D4E" 
                  alt="Profile"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="mt-4 text-xl font-bold">Raka Yanuar F</h2>
              <div className="flex items-center mt-1 text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span>Available for Hire</span>
              </div>
              <div className="flex items-center mt-1 text-gray-500 text-sm italic">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Karawang, Indonesia</span>
              </div>
            </div>

            <div className="py-6 flex justify-around border-b text-center">
              <div className="px-4">
                <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Email</span>
                <span className="font-bold text-xs break-all">rakayf308@gmail.com</span>
              </div>
              <div className="px-4 border-l border-gray-100">
                <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Phone</span>
                <span className="font-bold text-xs whitespace-nowrap">+62 8515 5504 880</span>
              </div>
            </div>

            <div className="pt-6 text-center">
              <p className="text-sm leading-relaxed text-gray-600">
                I am Raka Yanuar F, focusing on UI/UX Design and Graphic Design based in Karawang.
                Passionately creating modern and functional digital experiences.
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-gray-600">
                <a href="https://www.behance.net/rakayanuarf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all hover:scale-110"><Behance className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/raka_yanuar/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all hover:scale-110"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/raka-yanuar-f-6a6928205/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <main className="w-full pb-20">
            <div className="flex justify-center space-x-12 mb-10 border-b border-gray-200 overflow-x-auto whitespace-nowrap">
              <button 
                onClick={() => setActiveTab('portofolio')}
                className={`${activeTab === 'portofolio' ? 'text-green-600 border-green-500' : 'text-gray-500 border-transparent'} border-b-2 pb-4 font-bold uppercase tracking-widest text-xs transition-all cursor-pointer`}
              >
                Portofolio
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`${activeTab === 'about' ? 'text-green-600 border-green-500' : 'text-gray-500 border-transparent'} border-b-2 pb-4 font-bold uppercase tracking-widest text-xs transition-all cursor-pointer`}
              >
                About
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'portofolio' && (
                <motion.div 
                  key="portofolio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {projects.map((project, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="group relative bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] bg-gray-200 overflow-hidden relative">
                        <img 
                          src={project.image} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          alt={project.title}
                          referrerPolicy="no-referrer"
                        />
                      </a>
                      <div className="p-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <h4 className="font-bold text-sm truncate group-hover:text-green-600 transition-colors">
                            {project.title}
                          </h4>
                        </a>
                        <p className="text-xs text-gray-500 mt-1">{project.category}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'about' && (
                <motion.div 
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  {/* CV Content */}
                  <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-800">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                      <div className="w-full md:w-1/3">
                        <img 
                          src="https://scontent-sin2-1.xx.fbcdn.net/v/t39.30808-6/661825632_26497108009942312_7683288610411077849_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=oVTRXnHszKAQ7kNvwEWWl4c&_nc_oc=Adq6mvj0fbgUimX61RAtH6OGO7Vf-YVJYIz4ELs8JtSSYwaEbAoJ3QCq8F4hPOf6Xf1DLZpOyqkw4i6qylk-zAiV&_nc_zt=23&_nc_ht=scontent-sin2-1.xx&_nc_gid=aPkV2h7Pt_lNtRE5eccPJg&_nc_ss=7a3a8&oh=00_Af1wpa54qFUD1b863ezNx_p5j5lsTex75XrGje1p7y8bpQ&oe=69D42D4E" 
                          className="w-full aspect-square rounded-2xl object-cover shadow-lg mb-6"
                          alt="Raka Yanuar Firdaus"
                          referrerPolicy="no-referrer"
                        />
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Education</h3>
                            <p className="font-bold text-sm">University of Singaperbangsa Karawang</p>
                            <p className="text-xs text-gray-500">Bachelor of Informatics Engineering (2016 - 2020)</p>
                            <p className="text-xs mt-1">GPA: 3.31</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {['UI/UX Design', 'Graphic Design', 'IT Support', 'Packaging Design', 'Product Design'].map(s => (
                                <span key={s} className="px-2 py-1 bg-gray-100 rounded text-[10px] font-medium">{s}</span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Applications</h3>
                            <div className="grid grid-cols-2 gap-2 text-[10px]">
                              <span>• Figma</span>
                              <span>• Adobe Photoshop</span>
                              <span>• Adobe Illustrator</span>
                              <span>• Corel Draw</span>
                              <span>• MS Office</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-2/3 space-y-8">
                        <div>
                          <h2 className="text-3xl font-bold mb-4">Raka Yanuar Firdaus</h2>
                          <p className="text-gray-600 leading-relaxed">
                            Hi, I'm Raka, a graduate of S1 Informatics Engineering from the University of Singaperbangsa Karawang (2020). 
                            With a strong passion for Graphic Design and IT Support, I have gained years of experience in these fields. 
                            I am eager to bring my expertise to your company and contribute meaningfully in the areas of design and IT.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold border-b-2 border-gray-100 pb-2 mb-4">Work Experience</h3>
                          <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-gray-100">
                              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7.5px] top-1.5"></div>
                              <h4 className="font-bold">CV Syamjaya Palugada Nusantara</h4>
                              <p className="text-xs text-gray-500 mb-2">Graphic Designer (2022 - 2025)</p>
                              <p className="text-sm text-gray-600">Responsible for creating a wide range of visual materials including logos, banners, book covers, social media content, and UI/UX elements.</p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-gray-100">
                              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7.5px] top-1.5"></div>
                              <h4 className="font-bold">HK Motorworks West Cikampek</h4>
                              <p className="text-xs text-gray-500 mb-2">Graphic Designer | IT Support (2021 - 2025)</p>
                              <p className="text-sm text-gray-600">Managed merchandise design, content creation for social media, and provided technical IT support for computer systems and CCTV.</p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-gray-100">
                              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7.5px] top-1.5"></div>
                              <h4 className="font-bold">Kementerian Perhubungan</h4>
                              <p className="text-xs text-gray-500 mb-2">Graphic Designer (2024 - 2025)</p>
                              <p className="text-sm text-gray-600">Designed materials for leadership meetings, including presentation templates, brochures, and website UI/UX interfaces.</p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-gray-100">
                              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7.5px] top-1.5"></div>
                              <h4 className="font-bold">Dinas Pekerjaan Umum dan Penataan Ruang</h4>
                              <p className="text-xs text-gray-500 mb-2">Staff | IT Support (2021 - 2022)</p>
                              <p className="text-sm text-gray-600">Digitized archives, processed floor plan images, and provided technical support for software and hardware issues.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold border-b-2 border-gray-100 pb-2 mb-4">Certificates</h3>
                          <button 
                            onClick={() => {
                              setCurrentSlide(0);
                              setIsModalOpen(true);
                            }}
                            className="w-full bg-gray-50 p-4 rounded-xl flex items-center gap-4 hover:bg-green-50 transition-all cursor-pointer group border border-transparent hover:border-green-200 text-left"
                          >
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                              <CheckCircle className="text-green-500 w-6 h-6" />
                            </div>
                            <div>
                              <p className="font-bold text-sm group-hover:text-green-700 transition-colors">Sertifikat Kompetensi BNSP</p>
                              <p className="text-xs text-gray-500">Instruktur (Instructor) - 2025</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
          
          <footer className="w-full py-12 border-t border-gray-200 text-center">
            <p className="text-gray-400 text-xs uppercase tracking-widest">
              © 2026 Raka Yanuar F
            </p>
          </footer>
        </div>
      </div>
      {/* Certificate Slideshow Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setActiveTab('about');
                }}
                className="absolute -top-12 right-0 p-2 text-white hover:text-green-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center group">
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={certificateSlides[currentSlide]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none pointer-events-none"
                    alt={`Certificate ${currentSlide + 1}`}
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                  />
                </AnimatePresence>

                <button 
                  onClick={nextSlide}
                  className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex gap-2">
                {certificateSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentSlide ? 'bg-green-500 w-6' : 'bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>
              
              <p className="mt-4 text-white/60 text-sm font-medium uppercase tracking-widest">
                Slide {currentSlide + 1} of {certificateSlides.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
