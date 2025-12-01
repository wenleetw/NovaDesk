import React from 'react';
import { Check, X } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    frequency: '/month',
    description: 'Perfect for individuals exploring AI assistance.',
    features: [
      'Basic AI Chat (GPT-3.5 level)',
      '500MB Storage',
      'Task Management',
      'Community Support',
    ],
    notIncluded: ['Custom Agents', 'Team Collaboration', 'API Access'],
    cta: 'Start for Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$29',
    frequency: '/month',
    description: 'For power users who need advanced workflows.',
    features: [
      'Advanced AI (Gemini Pro/GPT-4)',
      'Unlimited Storage',
      'Priority Support',
      'Advanced Analytics',
      'Custom Agents'
    ],
    notIncluded: ['SSO & Audit Logs', 'Dedicated Account Manager'],
    cta: 'Get Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'Scalable security and control for large teams.',
    features: [
      'Everything in Professional',
      'SSO & SAML',
      'On-premise Deployment',
      'Dedicated Success Manager',
      'Custom SLA',
      'Audit Logs'
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that best fits your workflow needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                tier.popular
                  ? 'bg-white border-2 border-indigo-500 shadow-2xl shadow-indigo-100 scale-105 z-10'
                  : 'bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-gray-100'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-indigo-200">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-indigo-600' : 'text-gray-900'}`}>{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-display font-bold text-gray-900 tracking-tight">{tier.price}</span>
                <span className="text-gray-400 ml-1 font-medium">{tier.frequency}</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 h-10 leading-relaxed">{tier.description}</p>

              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm mb-8 transition-all duration-300 ${
                  tier.popular
                    ? 'btn-gradient text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-100'
                }`}
              >
                {tier.cta}
              </button>

              <div className="space-y-4">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`p-0.5 rounded-full ${tier.popular ? 'bg-indigo-100' : 'bg-gray-100'} mt-0.5`}>
                        <Check className={`w-3 h-3 ${tier.popular ? 'text-indigo-600' : 'text-gray-500'}`} />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
                {tier.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-40">
                    <div className="p-0.5 rounded-full bg-gray-50 mt-0.5">
                        <X className="w-3 h-3 text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;