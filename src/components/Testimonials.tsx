// src/components/Testimonials.tsx
'use client';

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Jennifer Wilson',
      treatment: 'Dental Implants',
      rating: 5,
      text: 'Dr. [Name] and his team transformed my smile completely. The dental implant procedure was much more comfortable than I expected, and the results exceeded my expectations. I can finally smile with confidence again!',
      image: '/images/testimonials/patient1.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      treatment: 'Cosmetic Dentistry',
      rating: 5,
      text: 'The teeth whitening and veneer treatment I received was absolutely amazing. The staff was professional, caring, and made sure I was comfortable throughout the entire process. Highly recommend!',
      image: '/images/testimonials/patient2.jpg'
    },
    {
      id: '3',
      name: 'Sarah Davis',
      treatment: 'Oral Surgery',
      rating: 5,
      text: 'I was nervous about my wisdom tooth extraction, but Dr. [Name] made the entire experience stress-free. The pain management was excellent, and recovery was much faster than anticipated.',
      image: '/images/testimonials/patient3.jpg'
    },
    {
      id: '4',
      name: 'Robert Johnson',
      treatment: 'General Dentistry',
      rating: 5,
      text: 'Been coming here for 5 years now. The preventive care and regular checkups have kept my teeth in perfect condition. The entire team treats you like family.',
      image: '/images/testimonials/patient4.jpg'
    },
    {
      id: '5',
      name: 'Lisa Martinez',
      treatment: 'Emergency Care',
      rating: 5,
      text: 'When I had a dental emergency on a weekend, Dr. [Name] was available immediately. The quick response and expert care saved my tooth. Truly grateful for the exceptional service.',
      image: '/images/testimonials/patient5.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-accent-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'fill-current' : 'stroke-current fill-transparent'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have experienced our exceptional dental care.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="h-16 w-16 text-primary-200 absolute top-4 left-4" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-light">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Patient Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-primary-500 font-medium">
                  {testimonials[currentTestimonial].treatment}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">500+</div>
            <div className="text-gray-600">Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">98%</div>
            <div className="text-gray-600">Recommend Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">1000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
};