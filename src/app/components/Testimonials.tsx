// src/components/Testimonials.tsx
'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: '1',
      name: 'Jennifer Wilson',
      treatment: 'Dental Implants',
      rating: 5,
      text: 'Dr. Smith and his team transformed my smile completely. The dental implant procedure was much more comfortable than I expected, and the results exceeded my expectations. I can finally smile with confidence again!'
    },
    {
      id: '2',
      name: 'Michael Chen',
      treatment: 'Cosmetic Dentistry',
      rating: 5,
      text: 'The teeth whitening and veneer treatment I received was absolutely amazing. The staff was professional, caring, and made sure I was comfortable throughout the entire process. Highly recommend!'
    },
    {
      id: '3',
      name: 'Sarah Davis',
      treatment: 'Oral Surgery',
      rating: 5,
      text: 'I was nervous about my wisdom tooth extraction, but Dr. Smith made the entire experience stress-free. The pain management was excellent, and recovery was much faster than anticipated.'
    },
    {
      id: '4',
      name: 'Robert Johnson',
      treatment: 'General Dentistry',
      rating: 5,
      text: 'Been coming here for 5 years now. The preventive care and regular checkups have kept my teeth in perfect condition. The entire team treats you like family.'
    },
    {
      id: '5',
      name: 'Lisa Martinez',
      treatment: 'Emergency Care',
      rating: 5,
      text: 'When I had a dental emergency on a weekend, Dr. Smith was available immediately. The quick response and expert care saved my tooth. Truly grateful for the exceptional service.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'fill-current' : 'stroke-current fill-transparent'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Quote className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Patient Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Our Patients
            <span className="text-blue-600 block">Say About Us</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real patients who have experienced our <span className="font-semibold text-blue-600">exceptional dental care</span>.
          </p>
        </div>

        {/* Enhanced Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative border border-white/20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
            
            {/* Enhanced Quote Icon */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Quote className="h-8 w-8 text-white" />
            </div>
            
            <div className="relative z-10 pt-8">
              {/* Enhanced Rating */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-50 p-3 rounded-2xl">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              {/* Enhanced Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-light">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Enhanced Patient Info */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold text-sm">
                    {testimonials[currentTestimonial].treatment}
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Enhanced Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 w-8 shadow-lg' 
                  : 'bg-gray-300 hover:bg-blue-400 w-3'
              }`}
            />
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-gray-600 font-medium mb-2">Average Rating</div>
            <div className="flex justify-center">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Google Reviews</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Recommend Us</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Happy Patients</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="absolute bottom-40 left-16 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-700 opacity-50"></div>
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-1000 opacity-70"></div>
    </section>
  )
}