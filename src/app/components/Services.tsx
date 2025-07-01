// src/components/Services.tsx
'use client'

import React from 'react'
import { 
  Smile, 
  Heart, 
  Scissors, 
  Shield, 
  Clock, 
  Star,
  ChevronRight,
  Sparkles,
  CheckCircle
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'general',
      title: 'General Dentistry',
      description: 'Comprehensive dental care for the whole family including cleanings, fillings, and preventive treatments.',
      icon: Shield,
      features: ['Regular Cleanings', 'Cavity Fillings', 'Root Canal Therapy', 'Preventive Care'],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures and cutting-edge technology.',
      icon: Smile,
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers', 'Bonding'],
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-100 to-blue-200'
    },
    {
      id: 'surgery',
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including implants, extractions, and advanced oral surgery.',
      icon: Scissors,
      features: ['Dental Implants', 'Wisdom Teeth', 'Tooth Extraction', 'Bone Grafting'],
      gradient: 'from-blue-700 to-blue-800',
      bgGradient: 'from-blue-200 to-blue-300'
    },
    {
      id: 'emergency',
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental needs and pain relief.',
      icon: Clock,
      features: ['Same-Day Treatment', '24/7 Availability', 'Pain Relief', 'Emergency Surgery'],
      gradient: 'from-blue-800 to-blue-900',
      bgGradient: 'from-blue-300 to-blue-400'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive 
            <span className="text-blue-600 block">Dental Services</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine cleanings to complex oral surgery, we provide complete dental care 
            using the <span className="font-semibold text-blue-600">latest technology</span> and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.bgGradient} rounded-full opacity-20 transform translate-x-8 -translate-y-8`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Button */}
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group/btn transition-colors duration-300">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">Premium Care</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Smile?
            </h3>
            
            <p className="text-gray-600 mb-8 text-lg">
              Discover all our dental services and find the perfect treatment for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center">
                  View All Services
                  <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              
              <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center">
                  Book Consultation
                  <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="absolute bottom-40 left-16 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-700 opacity-50"></div>
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-1000 opacity-70"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}