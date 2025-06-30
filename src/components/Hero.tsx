// src/components/Hero.tsx
'use client';

import React from 'react';
import { Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Smile is Our
                <span className="text-primary-500 block">Priority</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced dental care with a personal touch. Specializing in general dentistry, 
                cosmetic procedures, and oral surgery with state-of-the-art technology.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex text-accent-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">5-Star Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary-500" />
                <span className="text-gray-600">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary-500" />
                <span className="text-gray-600">Licensed & Insured</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Book Your Consultation
              </Button>
              <Button variant="outline" size="lg">
                Emergency Care
              </Button>
            </div>

            {/* Emergency Notice */}
            <div className="flex items-center space-x-3 bg-accent-400/10 p-4 rounded-lg">
              <Clock className="h-6 w-6 text-accent-400" />
              <div>
                <p className="font-semibold text-gray-800">Emergency Care Available</p>
                <p className="text-sm text-gray-600">24/7 emergency dental services</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-400/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">Dr</span>
                    </div>
                    <p className="text-gray-600">Professional dental care photo will go here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">1000+</p>
                  <p className="text-xs text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">4.9/5</p>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
