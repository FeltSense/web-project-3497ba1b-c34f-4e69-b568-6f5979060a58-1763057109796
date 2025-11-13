'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Full access to all features',
    'Priority customer support',
    'Advanced analytics dashboard',
    'Custom integrations',
    'Dedicated account manager',
    'Monthly strategy sessions',
    'Security & compliance tools',
    'API access',
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our comprehensive solution designed to scale with your business needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12 md:p-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Professional Plan</h3>
                  <p className="text-blue-100">Everything you need to succeed</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-semibold flex items-center space-x-1">
                    <Zap size={16} />
                    <span>Popular</span>
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline space-x-2">
                  <span className="text-6xl md:text-7xl font-bold text-white">$29</span>
                  <span className="text-2xl text-blue-100">/month</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-blue-600 text-center px-8 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Get Started Now
              </a>

              <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100 text-sm">
                <div className="flex items-center space-x-2">
                  <Check size={16} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check size={16} />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">30-Day</div>
              <div className="text-gray-600">Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}