'use client';

import { Download, Mail } from 'lucide-react';

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

  // Download resume function
  const handleDownloadResume = async () => {
    try {
      // Source file in public folder
      const sourceFileName = 'SHALINI-RESUME.pdf';
      // Properly encode the filename for URL (handles spaces and parentheses)
      const encodedFileName = encodeURIComponent(sourceFileName);
      const filePath = `/${encodedFileName}`;
      
      // Desired download filename
      const downloadFileName = 'Shalini_M_Resume.pdf';
      
      // Fetch the file
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error('File not found');
      }
      
      // Convert response to blob
      const blob = await response.blob();
      
      // Create download link with blob URL
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = downloadFileName; // Set custom download filename
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup after a short delay to ensure download starts
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Resume file not found. Please ensure the PDF file is in the public folder.');
    }
  };

  return (
    <div
      id="home"
      className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center min-h-[calc(120vh-80px)] text-[#18181b]"
      style={{
        backgroundImage: `url('/assert/hero-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up delay-100">
            <span
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, #f8b849, #e5a943, #d19b3c, #be8d36, #ac7f30)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Hi, I&apos;m{' '}
            </span>
            <span
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, #f8b849, #e5a943, #d19b3c, #be8d36, #ac7f30)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shalini M
            </span>
          </h1>
          <p
            className="text-xl sm:text-2xl mb-6 animate-fade-in-up delay-200"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, #f8b849, #e5a943, #d19b3c, #be8d36, #ac7f30)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fullstack Developer
          </p>
          <p className="text-lg max-w-3xl text-center mx-auto mb-8 leading-relaxed opacity-90 animate-fade-in-up delay-300 text-[#fafafa]">
            Passionate fullstack developer building scalable applications. I
            focus on exceptional user experiences and robust backend solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up delay-400">
          <button
            className="px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center"
            style={{
              border: '1px solid #fafafa',
              backgroundColor: 'transparent',
              color: '#fafafa',
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
              color: 'var(--accent-color)',
            }}
            onClick={handleDownloadResume}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
