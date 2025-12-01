import React from 'react';
import { Bot, ShieldCheck, Zap, Layers, Globe, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Contextual AI",
    description: "Our AI understands your project history, offering suggestions that actually make sense for your specific workflow."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Automation",
    description: "Automate repetitive tasks with natural language. Just ask NovaDesk to 'organize my weekly report' and it's done."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption for all your data. We are SOC2 compliant and ISO 27001 certified for peace of mind."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Unified Workspace",
    description: "Connect Slack, Jira, Notion, and Drive. Access everything from a single command line interface."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Real-time Collaboration",
    description: "Work together with your team and AI agents in real-time. Comments, edits, and suggestions sync instantly."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Adaptive Learning",
    description: "NovaDesk learns from your corrections. The more you use it, the better it gets at anticipating your needs."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-nova-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 tracking-tight">
            Everything you need to <br />
            <span className="text-gradient-primary">work smarter</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Powerful features designed to reduce cognitive load and help you focus on what truly matters—creating value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 group hover:-translate-y-1 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-200 transition-all duration-300">
                <div className="text-indigo-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;