// src/components/Services.tsx
'use client';

import React from 'react';
import { 
  Smile, 
  Heart, 
  Scissors, 
  Shield, 
  Clock, 
  Star,
  ChevronRight 
} from 'lucide-react';
import { Button } from './ui/Button';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'general',
      title: 'General Dentistry',
      description: 'Comprehensive dental care for the whole family including cleanings, fillings, and preventive treatments.',
      icon: Shield,
      features: ['Regular Cleanings', 'Cavity Fillings', 'Root Canal Therapy', 'Preventive Care'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures and cutting-edge technology.',
      icon: Smile,
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers', 'Bonding'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'surgery',
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including implants, extractions, and advanced oral surgery.',
      icon: Scissors,
      features: ['Dental Implants', 'Wisdom Teeth', 'Tooth Extraction', 'Bone Grafting'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'emergency',
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental needs and pain relief.',
      icon: Clock,
      features: ['Same-Day Treatment', '24/7 Availability', 'Pain Relief', 'Emergency Surgery'],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine cleanings to complex oral surgery, we provide complete dental care 
            using the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group card hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-primary-500 hover:text-primary-600 font-semibold group">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
