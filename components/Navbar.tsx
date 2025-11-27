import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Destinations', href: '#delivery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-dark shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-500 group ${isScrolled ? 'bg-transparent' : 'bg-brand-950/30 backdrop-blur-md hover:bg-brand-950/40'}`}>
              <div className={`p-2 rounded-lg bg-gradient-to-br from-brand-800/80 to-brand-900/80 shadow-inner group-hover:from-brand-800 group-hover:to-brand-900 transition-all duration-500`}>
                <Globe size={26} className="text-accent-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight leading-none text-white drop-shadow-md group-hover:text-accent-50 transition-colors`}>
                  FRAY
                </span>
                <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] text-accent-200 font-medium uppercase drop-shadow-sm">
                  International Group
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-accent-300 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-accent-500 text-brand-900 text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:bg-accent-400 transition-all transform hover:-translate-y-0.5"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark absolute w-full top-full left-0 border-t border-brand-700/50 backdrop-blur-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-50 hover:text-accent-300 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                className="block w-full text-center px-5 py-3 rounded-full bg-accent-500 text-brand-900 font-bold hover:bg-accent-400"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;