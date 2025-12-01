import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDemo from './components/ProductDemo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden bg-white text-gray-900 relative">
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Soft, bright pastel blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/80 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-purple-50/80 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <ProductDemo />
        <Pricing />
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-white text-nova-primary shadow-soft border border-gray-100 transition-all duration-300 z-50 hover:shadow-soft-hover hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;