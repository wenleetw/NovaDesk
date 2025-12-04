import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center gap-2 mb-6 group cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-nova-primary to-nova-secondary flex items-center justify-center shadow-lg shadow-indigo-900/20 transition-transform group-hover:rotate-12">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                NovaDesk
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              Redefining the modern workspace with artificial intelligence. Built for the future of work.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => handleSectionClick('features')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('demo')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('pricing')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 NovaDesk Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-400 hover:-translate-y-1 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 hover:-translate-y-1 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 hover:-translate-y-1 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
