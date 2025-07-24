'use client';

import { Download, Github, Linkedin, Mail } from 'lucide-react';

const hero = () => {
  return (
    <div
      id="home"
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] text-[#18181b]"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up delay-100 text-[#fafafa]"
            >
              Hi, I'm <span className="text-[#fafafa]">Shalini M</span>
            </h1>
            <p
              className="text-xl sm:text-2xl mb-6 animate-fade-in-up delay-200 text-[#fafafa]"
            >
              Fullstack Developer at Ascodelabs
            </p>
            <p
              className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed opacity-90 animate-fade-in-up delay-300 text-[#fafafa]"
            >
              Passionate fullstack developer building scalable applications with
              React, Next.js, and Python.
              <br />I focus on exceptional user experiences and robust backend
              solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up delay-400">
            <button
              className="px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center bg-[#fafafa] text-[#18181b]"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </button>
            <button
              className="px-6 py-3 rounded-lg bg-transparent hover:opacity-80 transition-opacity border flex items-center border-[#fafafa] text-[#fafafa]"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up delay-500">
            <a
              href="#"
              className="text-[#fafafa] transition-all duration-200 transform hover:scale-110 hover:opacity-80"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-[#fafafa] transition-all duration-200 transform hover:scale-110 hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-[#fafafa] transition-all duration-200 transform hover:scale-110 hover:opacity-80"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
