'use client';

import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  // Smooth scroll function for buttons
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      id="home"
      className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center min-h-[calc(120vh-80px)] text-[#18181b]"
      style={{
        background: `
          linear-gradient(135deg, #311e25 0%, #311e25 25%, #311e25 50%, #311e25 75%, #311e25 100%),
          linear-gradient(45deg, #311e25 0%, #311e25 20%, #311e25 40%, #311e25 60%, #311e25 80%, #311e25 100%),
          linear-gradient(-45deg, #311e25 0%, #311e25 25%, #311e25 50%, #311e25 75%, #311e25 100%)
        `,
        backgroundSize: '100% 100%, 400px 400px, 400px 400px',
        backgroundPosition: '0 0, 0 0, 200px 200px',
      }}
    >
      {/* Geometric overlay pattern for distinct boxes */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.15) 65%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0.12) 65%, transparent 70%),
            linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.08) 55%, transparent 60%)
          `,
          backgroundSize: '600px 600px, 500px 500px, 800px 800px',
          backgroundPosition: '0 0, 300px 300px, 150px 150px',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up delay-100" style={{ color: 'var(--accent-color)' }}>
            Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Shalini M</span>
          </h1>
          <p
            className="text-xl sm:text-2xl mb-6 animate-fade-in-up delay-200"
            style={{ color: 'var(--accent-color)' }}
          >
            Fullstack Developer at Ascodelabs
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed opacity-90 animate-fade-in-up delay-300 text-[#fafafa]">
            Passionate fullstack developer building scalable applications with
            React, Next.js, and Python.I focus on exceptional user experiences
            and robust backend solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up delay-400">
          <button
            className="px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center"
            style={{
              border: '2px solid var(--accent-color)',
              backgroundColor: 'transparent',
              color: '#fafafa'
            }}
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </button>
          <button
            className="px-6 py-3 rounded-lg bg-transparent hover:opacity-80 transition-opacity border flex items-center"
            style={{
              border: '2px solid var(--accent-color)',
              backgroundColor: 'transparent',
              color: '#fafafa'
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </button>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in-up delay-500">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fafafa] transition-all duration-200 transform hover:scale-110 hover:opacity-80 no-underline"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fafafa] transition-all duration-200 transform hover:scale-110 hover:opacity-80 no-underline"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-[#fafafa] transition-all duration-200 transform hover:scale-110 hover:opacity-80 no-underline"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
