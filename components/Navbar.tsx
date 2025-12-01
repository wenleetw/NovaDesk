import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'glass shadow-sm'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => window.scrollTo(0,0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && window.scrollTo(0,0)}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-nova-primary to-nova-secondary flex items-center justify-center shadow-lg shadow-indigo-200 transition-transform group-hover:scale-105">
              <Zap className="text-white w-5 h-5 fill-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-gray-900 group-hover:text-nova-primary transition-colors">
              NovaDesk
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-nova-primary transition-colors">
              Features
            </a>
            <a href="#demo" className="text-sm font-medium text-gray-600 hover:text-nova-primary transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-nova-primary transition-colors">
              Pricing
            </a>
            <button type="button" className="text-sm font-medium text-gray-700 px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all">
              Log In
            </button>
            <button type="button" className="text-sm font-medium text-white px-5 py-2.5 rounded-full btn-gradient shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-100 rounded-lg"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 pb-8 pt-4 absolute w-full shadow-soft top-20 left-0">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              Features
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <button type="button" className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Log In
              </button>
              <button type="button" className="w-full py-3 rounded-xl btn-gradient text-white font-medium shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;