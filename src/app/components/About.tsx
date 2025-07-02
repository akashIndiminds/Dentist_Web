// src/app/components/About.tsx
'use client'

import { Users, CheckCircle, Sparkles } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Users },
    { number: '1000+', label: 'Happy Patients', icon: Users },
    { number: '50+', label: 'Awards Won', icon: Users },
    { number: '99%', label: 'Success Rate', icon: Users },
  ]

  const highlights = [
    'Advanced digital dentistry technology',
    'Personalized treatment plans',
    'Comfortable, spa-like environment',
    'Emergency care available 24/7',
    'Insurance and financing options',
    'Bilingual staff available'
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-700">Premium Dental Care</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Passionate About Your 
                <span className="text-blue-600 block">Dental Health</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over <span className="font-semibold text-blue-600">15 years of experience</span> in comprehensive dental care, Dr. Rajat Majumdar 
                is committed to providing the highest quality dental services in a comfortable, 
                modern environment. Our practice combines <span className="font-semibold text-blue-700">advanced technology</span> with a gentle, 
                personalized approach to ensure every patient receives exceptional care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in both general dentistry and oral surgery, offering everything 
                from routine cleanings and cosmetic procedures to complex surgical interventions. 
                Our goal is to help you achieve and maintain optimal oral health while creating 
                the beautiful smile you&apos;ve always wanted.
              </p>
            </div>

            {/* Enhanced Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/70 hover:shadow-md transition-all duration-300">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center">
                  Meet Our Team
                  <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center">
                  Our Technology
                  <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced Image & Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl">
                {/* Subtle animated elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-blue-200/50 rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 left-8 w-12 h-12 bg-blue-300/40 rounded-full animate-pulse delay-700"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-5xl font-bold">Dr</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
                    <p className="text-gray-600 font-medium">Dr. Rajat Majumdar professional photo</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl text-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Floating blue elements */}
            <div className="absolute -z-10 top-16 right-16 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-500 opacity-60"></div>
            <div className="absolute -z-10 bottom-32 left-12 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-1000 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  )
}