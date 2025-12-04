import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const About: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Years of Innovation', value: '3+' },
    { label: 'Active Users', value: '10k+' },
    { label: 'Countries Served', value: '50+' },
    { label: 'Team Members', value: '25' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Michael Ross',
      role: 'CTO & Co-founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'David Park',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Emily Watson',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-white text-gray-900">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-slate-200">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px]"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-8">
                    About NovaDesk
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight text-gray-900">
                    We're building the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">future of work</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                    NovaDesk was founded with a simple mission: to empower teams with AI-driven tools that make work more human, creative, and efficient.
                </p>
            </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2 font-display">{stat.value}</div>
                            <div className="text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We believe that AI shouldn't replace human creativity, but enhance it. Our tools are designed to remove the drudgery from daily tasks, freeing up your mind for big ideas.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Started in a garage in San Francisco, we've grown into a diverse team of engineers, designers, and dreamers, all united by a passion for better software.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'User-centric design',
                                'AI ethics and safety',
                                'Continuous innovation',
                                'Community driven'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        <CheckIcon />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                                alt="Team working together" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Global Team</div>
                                    <div className="text-xs text-gray-500">Remote-first culture</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">We hire the best talent, regardless of location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet the Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The people behind the pixels. We're a group of passionate individuals working to change how the world works.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative inline-block mb-6">
                                <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl shadow-indigo-100 mx-auto transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-indigo-600 font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to join the future?</h2>
                <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
                    Experience the power of NovaDesk today. Start your 14-day free trial and transform your workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => navigate('/signup')}
                        className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-indigo-50 transition-all hover:-translate-y-1"
                    >
                        Get Started Free
                    </button>
                    <button 
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                        Contact Sales <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

const CheckIcon = () => (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default About;

