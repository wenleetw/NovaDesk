import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  variant?: 'default' | 'minimal';
  darkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'default', darkMode = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMinimal = variant === 'minimal';

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`${isMinimal ? 'absolute' : 'fixed'} top-0 w-full z-50 transition-all duration-300 ${
        isMinimal
          ? 'bg-transparent'
          : mobileMenuOpen
            ? 'glass shadow-sm'
            : 'bg-white/80 backdrop-blur-md shadow-sm'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
              darkMode 
                ? 'bg-white/10 backdrop-blur-sm border border-white/10' 
                : 'bg-gradient-to-br from-nova-primary to-nova-secondary shadow-lg shadow-indigo-200'
            }`}>
              <Zap className="text-white w-5 h-5 fill-white" />
            </div>
            <span className={`text-xl font-display font-bold tracking-tight transition-colors ${
              darkMode 
                ? 'text-white group-hover:text-indigo-200' 
                : 'text-gray-900 group-hover:text-nova-primary'
            }`}>
              NovaDesk
            </span>
          </div>

          {/* Desktop Menu - Only show in default variant */}
          {!isMinimal && (
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" onClick={(e) => { e.preventDefault(); navigate('/#features'); }} className="text-base font-medium text-gray-600 hover:text-nova-primary transition-colors">
                Features
              </a>
              <a href="#demo" onClick={(e) => { e.preventDefault(); navigate('/#demo'); }} className="text-base font-medium text-gray-600 hover:text-nova-primary transition-colors">
                How it Works
              </a>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); navigate('/#pricing'); }} className="text-base font-medium text-gray-600 hover:text-nova-primary transition-colors">
                Pricing
              </a>
              <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} className="text-base font-medium text-gray-600 hover:text-nova-primary transition-colors">
                About
              </a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="text-base font-medium text-gray-600 hover:text-nova-primary transition-colors">
                Contact
              </a>
              <button 
                type="button" 
                onClick={() => navigate('/signup')}
                className="text-base font-medium text-white px-5 py-2.5 rounded-full btn-gradient shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          )}

          {/* Mobile Toggle - Only show in default variant */}
          {!isMinimal && (
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
          )}
        </div>
      </div>

      {/* Mobile Menu - Only show in default variant */}
      {!isMinimal && mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 pb-8 pt-4 absolute w-full shadow-soft top-20 left-0">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              onClick={(e) => { e.preventDefault(); navigate('/#features'); setMobileMenuOpen(false); }}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              Features
            </a>
            <a
              href="#demo"
              onClick={(e) => { e.preventDefault(); navigate('/#demo'); setMobileMenuOpen(false); }}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              onClick={(e) => { e.preventDefault(); navigate('/#pricing'); setMobileMenuOpen(false); }}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              Pricing
            </a>
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); navigate('/about'); setMobileMenuOpen(false); }}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); setMobileMenuOpen(false); }}
              className="text-base font-medium text-gray-600 hover:text-nova-primary py-2 border-b border-gray-50"
            >
              Contact
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <button 
                type="button" 
                onClick={() => {
                  navigate('/signup');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl btn-gradient text-white font-medium shadow-md"
              >
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
