'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#works', label: 'Works' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full border-b z-50 bg-[#18181b] border-[rgba(250, 250, 250, 0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#fafafa]">Shalini M</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((items) => (
              <a
                key={items.href}
                href={items.href}
                className="hover:opacity-80 transition-opacity duration-200 font-medium text-[#fafafa]"
                onClick={() => setIsMenuOpen(false)}
              >
                {items.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:bg-white/10 text-[#fafafa]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(250, 250, 250, 0.1)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 transition-opacity duration-200 hover:opacity-80 text-[#fafafa]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
