import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden bg-slate-200">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-indigo-100 shadow-sm mb-8 animate-fade-in-up cursor-pointer hover:border-indigo-200 hover:bg-white transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">
              NovaDesk v2.0 is Live
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1] text-gray-900">
            Your Intelligent <br />
            <span className="text-gradient-primary relative">
               Workspace Assistant
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 opacity-60 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.0003 3.49997 75.0003 -1.50003 198.001 2.49997" stroke="currentColor" strokeWidth="3"/></svg>
            </span>
          </h1>

          {/* Subhead */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-light">
            NovaDesk unifies your tasks, documents, and team communication into one 
            AI-powered dashboard. Stop switching apps, start flowing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={() => navigate('/signup')}
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-gradient text-white font-semibold flex items-center justify-center gap-2 group shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 font-semibold flex items-center justify-center gap-2 transition-all shadow-soft hover:shadow-soft-hover group"
            >
              <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Users', value: '10k+' },
              { label: 'Integrations', value: '200+' },
              { label: 'Satisfaction', value: '99%' },
              { label: 'AI Uptime', value: '24/7' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-display font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm text-gray-500 mt-1 font-medium bg-gray-50 px-3 py-1 rounded-full">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;