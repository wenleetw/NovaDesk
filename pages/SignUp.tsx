import React, { useState } from 'react';
import { Github, Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up:', formData);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-white text-gray-900 relative flex flex-col">
      
      {/* Navbar */}
      <Navbar variant="minimal" darkMode />
      
      <main className="flex-1 flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel - Gradient Background */}
        <div className="lg:w-1/2 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white relative overflow-hidden flex flex-col justify-center p-12 pt-28 lg:p-20 xl:p-24">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[100px] opacity-50"></div>

            <div className="relative z-10 max-w-md mx-auto lg:-mt-40">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                    Start your AI journey today.
                </h1>
                <p className="text-indigo-200 text-lg leading-relaxed mb-10">
                    Join the fastest growing workspace platform. No credit card required for the 14-day free trial.
                </p>

                <div className="space-y-4">
                    {[
                    'Access to all AI models',
                    'Unlimited projects',
                    'Team collaboration features',
                    '24/7 priority support',
                    ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/90">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="font-medium text-lg">{item}</span>
                    </div>
                    ))}
                </div>

                <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                        {[
                            'https://randomuser.me/api/portraits/women/21.jpg',
                            'https://randomuser.me/api/portraits/men/46.jpg',
                            'https://randomuser.me/api/portraits/women/63.jpg',
                            'https://randomuser.me/api/portraits/men/29.jpg',
                        ].map((src, i) => (
                            <img 
                                key={i} 
                                src={src}
                                alt={`User ${i + 1}`}
                                className="w-12 h-12 rounded-full border-2 border-indigo-900 object-cover"
                            />
                        ))}
                        </div>
                        <div>
                        <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400" />
                        </div>
                        <p className="text-indigo-200 text-sm mt-1 font-medium">Loved by 10,000+ users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Panel - White Background Form */}
        <div className="lg:w-1/2 bg-white flex flex-col justify-center px-8 py-16 md:p-12 lg:p-20 xl:p-24 relative">
             {/* Mobile-only background blobs */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 lg:hidden pointer-events-none"></div>

             <div className="max-w-md mx-auto w-full relative z-10">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Create an account</h2>
                    <p className="text-gray-500 text-lg">
                    Already have an account?{' '}
                    <button onClick={() => navigate('/login')} className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
                        Log in
                    </button>
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="block w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="block w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="block w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                                placeholder="8+ characters"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="flex w-full justify-center items-center rounded-xl btn-gradient px-3 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-white px-4 text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login - Full Width */}
                    <div className="space-y-3">
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                        >
                            <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-.19-.58z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span>Continue with Google</span>
                        </button>
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                        >
                            <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="#1877F2">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span>Continue with Facebook</span>
                        </button>
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                        >
                            <Github className="h-5 w-5 flex-shrink-0" />
                            <span>Continue with GitHub</span>
                        </button>
                    </div>

                    <p className="text-xs text-center text-gray-400 mt-6">
                        By creating an account, you agree to our{' '}
                        <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{' '}
                        <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    </p>
                </form>
             </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
