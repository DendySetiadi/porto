"use client";

import { useState, useEffect } from 'react';


export default function Home() {
  type CertType = {
  image: string;
  title: string;
};

const [selectedCert, setSelectedCert] = useState<CertType | null>(null);

  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    { title: "ABSA Indonesian National Football Team's", desc: "Aspect-Based Sentiment Analysis on the Indonesian National Football Team's Instagram comments using the Naive Bayes algorithm.", link: "/demo" },
    { title: "Frontend Application", desc: "A mobile application for car rental services built using Android Studio, Java, and Firebase for real-time data management and authentication.", link: "https://github.com/DendySetiadi/Cartogo2" },
    { title: "Todo ListWeb", desc: "A clean and minimal To-Do List web application designed to help users organize and track their daily tasks with ease.", link: "https://revou-coding-camp.github.io/codingcamp-18-aug-25-DendySetiadi/" },
  ];

  const certificates = [
    {
      image: "/certificate1.png",
      title: "Penulis Paper 'Aspect-Based Sentiment Analysis of Indonesian Football Team's Instagram Comments using Naive Bayes.'"
    },
    {
      image: "/certificate2.png",
      title: "Intro to Software Engineering – RevoU (2025): HTML, CSS, JavaScript; proyek akhir aplikasi Todo List."
    },
    {
      image: "/certificate3.png",
      title: "SAP Overview (SAP University Partnership, 2025): Pengenalan SAP"
    }
  ];

  useEffect(() => {
    // Loading screen timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Loading selama 2.5 detik

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes slideOut {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes fadeInContent {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-slideOut {
          animation: slideOut 0.5s ease-out forwards;
        }

        .animate-fadeInContent {
          animation: fadeInContent 0.8s ease-out forwards;
        }

        [data-animate] {
          opacity: 0;
        }

        [data-animate].visible {
          opacity: 1;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #0d0d0d;
        }
      `}</style>

      {/* LOADING SCREEN - TURBO SNAIL */}
      {isLoading && (
        <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] flex flex-col items-center justify-center ${!isLoading ? 'animate-slideOut' : ''}`}>
          
          {/* Loading Bar Container - SMALLER */}
          <div className="relative w-[80%] max-w-2xl">
            
            {/* FIRE TRAIL BAR - Smaller */}
            <div className="relative h-12">
              
              {/* Fire Base Layer */}
              <div className="absolute inset-0 flex items-center">
                <div className="fire-base h-10 w-0 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600" 
                     style={{ 
                       animation: 'fireGrow 2.5s ease-out forwards',
                       filter: 'blur(15px)'
                     }}></div>
              </div>

              {/* Fire Middle Layer */}
              <div className="absolute inset-0 flex items-center">
                <div className="h-8 w-0 bg-gradient-to-r from-yellow-400 via-orange-600 to-red-700" 
                     style={{ 
                       animation: 'fireGrow 2.5s ease-out forwards',
                       filter: 'blur(8px)',
                       animationDelay: '0.05s'
                     }}></div>
              </div>

              {/* Fire Top Layer - Brightest */}
              <div className="absolute inset-0 flex items-center">
                <div className="h-6 w-0 bg-gradient-to-r from-yellow-200 via-orange-400 to-red-500" 
                     style={{ 
                       animation: 'fireGrow 2.5s ease-out forwards',
                       filter: 'blur(4px)',
                       animationDelay: '0.1s'
                     }}></div>
              </div>

              {/* Fire Particles Flying - Fewer */}
              <div className="absolute inset-0 overflow-visible">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="fire-particle absolute w-2 h-2 bg-orange-500 rounded-full blur-sm"
                    style={{ 
                      left: `${i * 20}%`,
                      animation: `fireParticle 1s ease-out infinite`,
                      animationDelay: `${i * 0.4}s`
                    }}></div>
                ))}
              </div>

              {/* Ground Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-900 via-orange-900 to-red-900 opacity-50"></div>

              {/* TURBO SNAIL - SMALLER */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0" 
                   style={{ 
                     animation: 'snailMove 2.5s ease-out forwards'
                   }}>
                <div className="relative">
                  
                  {/* Fire Trail Behind Snail */}
                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-24 h-12">
                    {/* flames */}
                    <div className="flame absolute right-0 w-5 h-5 bg-orange-500 rounded-full blur-md animate-pulse"></div>
                    <div className="flame absolute right-4 w-4 h-4 bg-red-500 rounded-full blur-md" style={{animationDelay: '0.1s'}}></div>
                    <div className="flame absolute right-8 w-3 h-3 bg-orange-600 rounded-full blur-sm" style={{animationDelay: '0.15s'}}></div>
                    <div className="flame absolute right-12 w-2 h-2 bg-yellow-500 rounded-full blur-sm" style={{animationDelay: '0.2s'}}></div>
                    
                    {/* Smoke effect */}
                    <div className="absolute right-2 -top-2 w-4 h-4 bg-gray-500/40 rounded-full blur-lg animate-pulse"></div>
                  </div>
                  
                  {/* Snail Image - SMALLER */}
                  <div className="relative">
                    {/* Glow effect behind snail */}
                    <div className="absolute inset-0 w-24 h-24 blur-xl opacity-50 animate-pulse bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>
                    
                    {/* Main Snail Image */}
                    <div className="relative w-24 h-24 animate-mega-bounce">
                      <img 
                        src="/turbo.png" 
                        alt="Turbo Snail" 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]"
                      />
                    </div>
                    
                    {/* Exhaust Flames */}
                    <div className="absolute -left-5 top-5 w-3 h-3 bg-orange-500 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute -left-7 top-8 w-2 h-2 bg-red-500 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  </div>
                  
                  {/* Speed Lines */}
                  <div className="absolute -left-14 top-1/2 -translate-y-1/2 opacity-90 space-y-1">
                    <div className="w-10 h-1 bg-gradient-to-r from-white to-transparent animate-pulse"></div>
                    <div className="w-8 h-1 bg-gradient-to-r from-red-400 to-transparent animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-6 h-1 bg-gradient-to-r from-orange-400 to-transparent animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>

                  {/* Turbo Boost Effect */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                    <div className="w-1 h-8 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes fireGrow {
              0% { width: 0%; }
              100% { width: 100%; }
            }

            @keyframes snailMove {
              0% { left: -50px; }
              100% { left: calc(100% - 50px); }
            }

            @keyframes mega-bounce {
              0%, 100% { 
                transform: translateY(0) scale(1) rotate(-1deg); 
              }
              50% { 
                transform: translateY(-5px) scale(1.03) rotate(1deg); 
              }
            }

            .animate-mega-bounce {
              animation: mega-bounce 0.4s ease-in-out infinite;
            }

            /* Fire particles flying up */
            @keyframes fireParticle {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              50% {
                transform: translateY(-20px) scale(0.8);
                opacity: 0.6;
              }
              100% {
                transform: translateY(-40px) scale(0.3);
                opacity: 0;
              }
            }

            /* Fire effects */
            .flame {
              animation: intense-flicker 0.2s ease-in-out infinite;
            }

            @keyframes intense-flicker {
              0%, 100% { 
                opacity: 1; 
                transform: scale(1) translateY(0);
              }
              25% { 
                opacity: 0.7; 
                transform: scale(1.2) translateY(-2px);
              }
              50% { 
                opacity: 0.5; 
                transform: scale(0.9) translateY(1px);
              }
              75% { 
                opacity: 0.8; 
                transform: scale(1.1) translateY(-1px);
              }
            }
          `}</style>
        </div>
      )}

      {/* MAIN CONTENT - With Entry Animation */}
      <div className={!isLoading ? 'animate-fadeInContent' : 'opacity-0'}>

      {/* NAVBAR */}
      <nav className="fixed w-full p-5 flex justify-between items-center bg-black/70 backdrop-blur-md z-50 border-b border-white/10 animate-fadeInUp">
        <h1 className="text-xl font-bold tracking-wide text-white">GDS</h1>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-start justify-center px-10 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] pt-24">
        <div className="flex max-w-6xl w-full items-start gap-10 flex-col md:flex-row">

          
<section className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:px-10 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] pt-24">
  {/* FOTO BESAR + KECIL */}
  <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
    <img
      src="/foto3.jpg"
      alt="Main Photo"
      className="w-56 md:w-64 h-64 sm:h-72 md:h-[28rem] object-cover rounded-lg shadow-xl"
    />
    {/* FOTO KECIL 1 */}
    <img
      src="/foto1.jpg"
      alt="Photo 1"
      className="w-24 h-28 md:w-40 md:h-56 object-cover rounded-lg shadow-lg absolute top-0 right-4 md:right-6"
    />
    {/* FOTO KECIL 2 */}
    <img
      src="/foto2.jpg"
      alt="Photo 2"
      className="w-24 h-28 md:w-40 md:h-56 object-cover rounded-lg shadow-lg absolute bottom-0 right-4 md:right-6"
    />
  </div>

  {/* TEKS HERO */}
  <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 text-center md:text-left px-4 md:px-6 lg:px-12">
    <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg leading-tight">
      Gregorius Dendy Setiadi
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-300 tracking-wide">
      Machine Learning | Front End
    </p>
    <a
      href="#projects"
      className="px-6 py-3 bg-red-500 text-white hover:bg-red-600 rounded-lg shadow-lg transition-all duration-300 text-lg md:text-xl w-full sm:w-auto max-w-[220px] mx-auto md:mx-0"
    >
      See My Work
    </a>
  </div>
</section>


        </div>
      </section>

      {/* ABOUT */}
      <section 
        id="about" 
        data-animate
        className={`py-20 px-10 max-w-4xl mx-auto text-center text-white ${visibleSections.has('about') ? 'visible animate-fadeInUp' : ''}`}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg text-gray-300 mb-6">
          Computer Engineering graduate with expertise in software engineering, machine learning,
          and application development. Experienced in handling academic projects and certified
          training programs using Java, web technologies, and mobile applications. Adaptable,
          detail-oriented, and capable of collaborating in teams as well as solving problems
          independently. Focused on building a career by contributing to the development of
          innovative technology solutions.
        </p>
      </section>

      {/* EDUCATION */}
      <section 
        id="education" 
        data-animate
        className={`py-20 px-10 max-w-5xl mx-auto text-white ${visibleSections.has('education') ? 'visible animate-fadeInUp' : ''}`}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-8">
          {/* Bachelor Degree */}
          <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-white/10 hover:border-red-400/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Informatics</h3>
                <p className="text-lg text-red-400 font-semibold">Sanata Dharma University</p>
                <p className="text-gray-400 mt-1">Yogyakarta, Indonesia</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-gray-300 font-semibold">2021 - 2025</p>
                <p className="text-lg text-green-400 font-bold mt-1">GPA: 3.25</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-2 font-semibold">Thesis:</p>
              <p className="text-gray-300">
                "Aspect-Based Sentiment Analysis on the Indonesian National Football Team's Instagram Account Using the Naive Bayes Algorithm"
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-lg text-sm border border-red-500/20">Machine Learning</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">NLP</span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm border border-green-500/20">Software Engineering</span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-sm border border-purple-500/20">Web Development</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              Certifications & Training
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  onClick={() => cert && setSelectedCert(cert)}
                  className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-red-400/50 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-semibold">{cert.title}</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section 
        id="projects" 
        data-animate
        className={`py-20 bg-[#1a1a1a] text-white px-10 max-w-6xl mx-auto border-y border-white/10 ${visibleSections.has('projects') ? 'visible animate-fadeInUp' : ''}`}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div 
              key={i} 
              className="bg-[#242424] p-5 rounded-xl shadow hover:scale-105 hover:bg-[#2d2d2d] transition duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-300">{proj.desc}</p>
              <a 
                href={proj.link} 
                target={proj.link.startsWith('http') ? "_blank" : undefined}
                rel={proj.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-red-400 mt-3 inline-block hover:text-red-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section 
        id="contact" 
        data-animate
        className={`py-20 px-10 text-center max-w-4xl mx-auto text-white ${visibleSections.has('contact') ? 'visible animate-scaleIn' : ''}`}
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-4 text-gray-300">
          Email: <a href="mailto:dendysetiadi123@gmail.com" className="text-red-400 hover:text-red-300">dendysetiadi123@gmail.com</a>
        </p>

        <div className="flex justify-center items-center gap-6 mt-8">
          <a 
            href="https://github.com/DendySetiadi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            aria-label="GitHub"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-300 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/gregorius-dendy-linkein/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            aria-label="LinkedIn"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-300 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </a>

          <a 
            href="https://instagram.com/gregoriusdendyy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            aria-label="Instagram"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-300 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 bg-black/70">
        &copy; {new Date().getFullYear()} Dendy Setiadi. All rights reserved.
      </footer>

      </div>
      {/* END MAIN CONTENT */}

      {/* FLOATING WHATSAPP BUTTON - SHOW AFTER LOADING */}
      {!isLoading && (
        <a
          href="https://wa.me/6288216615880?text=Halo%20Dendy,%20saya%20tertarik%20dengan%20portfolio%20Anda!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] group animate-fadeInContent"
          aria-label="Contact via WhatsApp"
        >
          <div className="relative">
            {/* Pulse Ring Animation - RED */}
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
            
            {/* Main Button - RED */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
              {/* WhatsApp Icon */}
              <svg className="w-8 h-8 md:w-9 md:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-medium">
                Chat via WhatsApp
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </a>
      )}

      {/* MODAL LIGHTBOX */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-scaleIn"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img 
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="mt-4 text-center">
              <p className="text-white text-lg">{selectedCert.title}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}