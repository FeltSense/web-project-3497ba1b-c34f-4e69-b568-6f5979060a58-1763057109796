'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: 'Visionary leader with 15+ years driving tech innovation and business growth.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Expert in scalable architecture and cutting-edge software development.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      bio: 'Award-winning designer crafting exceptional user experiences.',
    },
    {
      name: 'David Thompson',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      bio: 'Leading engineering teams to deliver world-class solutions.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
      bio: 'Product strategist turning ideas into market-leading innovations.',
    },
    {
      name: 'James Wilson',
      role: 'Director of Security',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      bio: 'Cybersecurity expert protecting digital assets and infrastructure.',
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse group of passionate experts dedicated to delivering exceptional results and driving innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Working with TechBiz transformed our business. Their innovative solutions and dedicated team exceeded all expectations.',
                author: 'Robert Johnson',
                position: 'CEO, InnovateCorp',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              },
              {
                quote: 'The level of professionalism and expertise is unmatched. They delivered a complex project on time and within budget.',
                author: 'Jennifer Lee',
                position: 'CTO, DataStream',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
              },
              {
                quote: 'Exceptional service and results. TechBiz is now our go-to partner for all technology initiatives and digital projects.',
                author: 'Marcus Williams',
                position: 'Founder, StartupHub',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Quote className="text-blue-600 mb-4" size={40} />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}