import React from 'react';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-default">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-nova-primary to-nova-secondary flex items-center justify-center shadow-lg shadow-indigo-100 transition-transform group-hover:rotate-12">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-display font-bold text-gray-900">
                NovaDesk
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Redefining the modern workspace with artificial intelligence. Built for the future of work.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 font-display">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 font-display">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 NovaDesk Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600 hover:-translate-y-1 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 hover:-translate-y-1 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 hover:-translate-y-1 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;