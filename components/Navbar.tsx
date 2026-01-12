'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" aria-label="Machol Services - Return to top" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-brand-blue' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Wrench className={`w-6 h-6 transition-colors ${
                isScrolled ? 'text-white' : 'text-brand-yellow'
              }`} />
            </div>
            <div>
              <span className={`font-bold text-lg tracking-tight transition-colors ${
                isScrolled ? 'text-brand-blue-dark' : 'text-white'
              }`}>
                Machol
              </span>
              <span className={`font-bold text-lg transition-colors ${
                isScrolled ? 'text-brand-blue' : 'text-brand-yellow'
              }`}>
                Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-brand-yellow ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:404-597-4945"
              className="relative flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold px-5 py-2.5 rounded-full transition-all glow-yellow pulse-ring"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">404-597-4945</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              className={`md:hidden p-3 rounded-lg transition-colors ${
                isScrolled ? 'text-brand-blue-dark' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium hover:bg-brand-blue/5 hover:text-brand-blue rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
