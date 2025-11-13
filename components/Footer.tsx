'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">TechBiz</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and success in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-start space-x-3">
              <Mail className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <a href="mailto:hello@techbiz.com" className="text-white hover:text-blue-400 transition-colors">
                  hello@techbiz.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="text-sm text-gray-400 mb-1">Phone</div>
                <a href="tel:+15551234567" className="text-white hover:text-blue-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="text-sm text-gray-400 mb-1">Address</div>
                <p className="text-white">123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TechBiz. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}