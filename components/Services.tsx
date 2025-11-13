'use client';

import { Code, Rocket, Shield, Zap, Users, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business needs and drive digital transformation.',
    },
    {
      icon: Rocket,
      title: 'Product Innovation',
      description: 'From concept to launch, we help you build innovative products that captivate users and dominate markets with strategic design and development.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security infrastructure to protect your digital assets, ensuring data integrity and compliance with industry standards.',
    },
    {
      icon: Zap,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that optimize performance, reduce costs, and enable seamless operations across your entire organization.',
    },
    {
      icon: Users,
      title: 'Digital Consulting',
      description: 'Expert guidance on digital strategy, technology roadmaps, and transformation initiatives to keep your business ahead of the curve.',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Turn raw data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}