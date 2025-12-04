import React, { useState } from 'react';
import { Mail, Lock, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Log in:', formData);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-gray-900 relative flex flex-col items-center justify-center p-6">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Navbar with minimal variant */}
      <Navbar variant="minimal" darkMode />

      <div className="w-full max-w-lg relative z-10 mt-10">
        <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-14 relative overflow-hidden">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome back</h2>
            <p className="text-gray-500 text-base">
              Don't have an account?{' '}
              <button onClick={() => navigate('/signup')} className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
                Sign up
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
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

            {/* Divider */}
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-4 text-gray-400">Or with email</span>
                </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-5">
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="block w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                            Password
                        </label>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors">Forgot password?</a>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="block w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all font-medium"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center mt-2">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                        Remember me
                    </label>
                </div>
            </div>

            {/* Login Button */}
            <div className="mt-8">
                <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 rounded-xl btn-gradient px-3 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                    Log In
                </button>
            </div>

            <p className="text-xs text-center text-gray-400 mt-6">
                By logging in, you agree to our{' '}
                <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
