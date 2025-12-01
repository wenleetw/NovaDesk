import React from 'react';
import { Search, Bell, Mic, MoreVertical, Send, FileText, CheckSquare, MessageSquare, Zap } from 'lucide-react';

const ProductDemo: React.FC = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-white">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-full blur-[80px] z-0 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 tracking-tight">
            Your Command Center
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Experience the future of productivity. NovaDesk integrates seamlessly into your daily routine.
          </p>
        </div>

        {/* Browser Mockup Window */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden animate-float">
          {/* Mockup Header */}
          <div className="h-12 bg-gray-50/50 border-b border-gray-100 flex items-center px-4 gap-2 backdrop-blur-sm">
            <div className="flex gap-2" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors"></div>
            </div>
            <div className="ml-4 flex-1 flex justify-center">
              <div className="bg-white/80 px-4 py-1.5 rounded-lg border border-gray-100 text-xs text-gray-400 flex items-center gap-2 shadow-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                novadesk.app/dashboard
              </div>
            </div>
          </div>

          {/* App Interface */}
          <div className="flex h-[650px]">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50/50 border-r border-gray-100 p-5 flex flex-col hidden md:flex backdrop-blur-sm">
              <div className="mb-8 font-bold text-gray-900 px-2 text-sm tracking-wide flex items-center gap-2">
                 <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
                   <Zap className="w-3 h-3 text-white fill-white" />
                 </div>
                 WORKSPACE
              </div>
              
              <div className="space-y-1" role="menu">
                <div className="flex items-center gap-3 px-3 py-2.5 bg-white text-indigo-600 shadow-soft border border-gray-100 rounded-xl cursor-pointer" role="menuitem">
                  <MessageSquare size={18} />
                  <span className="text-sm font-semibold">Assistant</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-white hover:shadow-sm rounded-xl cursor-pointer transition-all" role="menuitem">
                  <CheckSquare size={18} />
                  <span className="text-sm font-medium">Tasks</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-white hover:shadow-sm rounded-xl cursor-pointer transition-all" role="menuitem">
                  <FileText size={18} />
                  <span className="text-sm font-medium">Notes</span>
                </div>
              </div>

              <div className="mt-8 text-[11px] font-bold text-gray-400 px-3 mb-3 uppercase tracking-wider">Recent Files</div>
              <div className="space-y-1">
                 {['Q4 Marketing Strategy', 'Product Launch V2', 'Team Sync Notes'].map((item, i) => (
                   <div key={i} className="px-3 py-2 text-gray-500 text-sm hover:text-indigo-600 hover:bg-white hover:shadow-sm rounded-lg cursor-pointer truncate transition-all">
                     {item}
                   </div>
                 ))}
              </div>

              <div className="mt-auto flex items-center gap-3 px-2 pt-4 border-t border-gray-200/60">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 border-2 border-white shadow-sm"></div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-800">Alex Chen</div>
                  <div className="text-xs text-gray-400">Pro Plan</div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-white">
              {/* Header */}
              <div className="h-16 border-b border-gray-50 flex items-center justify-between px-6 bg-white">
                <div className="flex items-center gap-3 text-gray-400 bg-gray-50 px-4 py-2.5 rounded-full w-full max-w-md border border-gray-100 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white transition-all">
                  <Search size={18} />
                  <input 
                    type="text" 
                    placeholder="Search projects, tasks, or ask AI..." 
                    className="bg-transparent border-none outline-none text-sm text-gray-700 w-full placeholder-gray-400" 
                    aria-label="Search"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <button type="button" className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all relative" aria-label="Notifications">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                  </button>
                  <button type="button" className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all" aria-label="More options">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>

              {/* Chat View */}
              <div className="flex-1 p-8 overflow-y-auto space-y-8 bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {/* AI Message */}
                <div className="flex gap-5 max-w-3xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-100">
                    <Zap size={18} className="text-white fill-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-gray-900">NovaDesk AI</span>
                      <span className="text-xs text-gray-400">10:42 AM</span>
                    </div>
                    <div className="text-gray-600 text-[15px] leading-relaxed p-6 bg-gray-50 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm">
                      <p>I've analyzed the Q3 performance metrics you uploaded. Here are the key takeaways:</p>
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                          <span>User retention increased by <span className="text-gray-900 font-semibold">12%</span> month-over-month.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                          <span>The new "Smart Export" feature has the highest engagement.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                          <span>Churn rate dropped below 2% for the first time.</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-gray-500 text-sm font-medium border-t border-gray-200 pt-3">Would you like me to draft a summary email to the stakeholders?</p>
                    </div>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex gap-5 max-w-3xl ml-auto flex-row-reverse">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 flex-shrink-0 shadow-md border-2 border-white"></div>
                   <div className="space-y-2 flex flex-col items-end">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-gray-400">10:45 AM</span>
                      <span className="text-sm font-bold text-gray-900">You</span>
                    </div>
                    <div className="text-white text-[15px] leading-relaxed p-5 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl rounded-tr-none shadow-lg shadow-indigo-100">
                      <p>Yes, please draft that email. Make it concise and confident.</p>
                    </div>
                   </div>
                </div>

                 {/* AI Typing */}
                 <div className="flex gap-5 max-w-3xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-100">
                    <Zap size={18} className="text-white fill-white" />
                  </div>
                  <div className="flex items-center p-5 bg-gray-50 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-6 bg-white border-t border-gray-50">
                <div className="bg-white border border-gray-200 rounded-2xl p-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-200 transition-all shadow-sm">
                  <button type="button" className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors" aria-label="Voice input">
                     <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    placeholder="Message NovaDesk..." 
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 text-[15px] placeholder-gray-400 px-2"
                    aria-label="Message input"
                  />
                  <button type="button" className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200" aria-label="Send message">
                     <Send size={18} />
                  </button>
                </div>
                <div className="text-center mt-3">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
                      <Zap size={10} className="text-indigo-400" /> Powered by Gemini 2.0
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;