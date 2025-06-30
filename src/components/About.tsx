// src/components/About.tsx
'use client';

import React from 'react';
import { Award, Users, Clock, Heart, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '1000+', label: 'Happy Patients', icon: Users },
    { number: '50+', label: 'Awards Won', icon: Award },
    { number: '99%', label: 'Success Rate', icon: Heart },
  ];

  const highlights = [
    'Advanced digital dentistry technology',
    'Personalized treatment plans',
    'Comfortable, spa-like environment',
    'Emergency care available 24/7',
    'Insurance and financing options',
    'Bilingual staff available'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Passionate About Your 
                <span className="text-primary-500 block">Dental Health</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in comprehensive dental care, Dr. [Name] 
                is committed to providing the highest quality dental services in a comfortable, 
                modern environment. Our practice combines advanced technology with a gentle, 
                personalized approach to ensure every patient receives exceptional care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in both general dentistry and oral surgery, offering everything 
                from routine cleanings and cosmetic procedures to complex surgical interventions. 
                Our goal is to help you achieve and maintain optimal oral health while creating 
                the beautiful smile you've always wanted.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Meet Our Team
              </Button>
              <Button variant="outline">
                Our Technology
              </Button>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">Dr</span>
                  </div>
                  <p className="text-gray-600">Dr. [Name] professional photo</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500 rounded-full opacity-10"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <IconComponent className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
