import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form:', formData);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-white text-gray-900 relative flex flex-col">
      
      <Navbar />

      <main className="flex-1 relative z-10 mt-20 bg-slate-200 text-gray-900">
        {/* Background Decoration within the section */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
             <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[100px] animate-blob"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/* Left Panel - Get in Touch (Light Background) */}
                <div className="lg:col-span-5 space-y-12 lg:-mt-16">
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-gray-900">
                        Get in touch
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        Have questions about our plans, features, or enterprise solutions? We're here to help you redefine your workspace.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-sm group-hover:border-indigo-100 group-hover:shadow-indigo-100 transition-all">
                        <Mail className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email us</h3>
                        <p className="text-gray-500 text-sm mb-1">Our team typically responds within 2 hours.</p>
                        <a href="mailto:hello@novadesk.app" className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium">hello@novadesk.app</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-sm group-hover:border-indigo-100 group-hover:shadow-indigo-100 transition-all">
                        <MessageSquare className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Live Chat</h3>
                        <p className="text-gray-500 text-sm mb-1">Available Mon-Fri, 9am-6pm EST.</p>
                        <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium">Start a conversation</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-sm group-hover:border-indigo-100 group-hover:shadow-indigo-100 transition-all">
                        <MapPin className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Office</h3>
                        <p className="text-gray-500 text-sm">
                            123 Innovation Drive, Suite 400<br />
                            San Francisco, CA 94103
                        </p>
                        </div>
                    </div>
                </div>
                </div>

                {/* Right Panel - Form (White Card) */}
                <div className="lg:col-span-7 lg:pl-12">
                <div className="bg-white rounded-xl shadow-2xl shadow-gray-200/50 p-8 md:p-12 lg:p-14 text-gray-900 relative overflow-hidden border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                            <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                            placeholder="John Doe"
                            required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-700">Work Email</label>
                            <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                            placeholder="john@company.com"
                            required
                            />
                        </div>
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-bold text-gray-700">Company Website (Optional)</label>
                        <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                            placeholder="www.company.com"
                        />
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-gray-700">How can we help?</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={5}
                            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all resize-none font-medium"
                            placeholder="Tell us about your needs..."
                            required
                        />
                        </div>

                        <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-10 py-4 rounded-xl btn-gradient text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all duration-300 group text-base"
                        >
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        </div>
                    </form>
                </div>
                </div>

            </div>
            </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
