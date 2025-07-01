'use client';
import Image from 'next/image'; // Import Next.js Image component
import { Award, Calendar, CheckCircle, Clock, Shield, Sparkles, Star } from 'lucide-react';

// src/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Premium Dental Care</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Your Smile is Our</span>
                <span className="text-blue-600 block">Priority ✨</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced dental care with a <span className="font-semibold text-blue-600">personal touch</span>. Specializing in general dentistry, 
                cosmetic procedures, and oral surgery with <span className="font-semibold text-blue-700">state-of-the-art technology</span>.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">5-Star Reviews</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 font-medium">Licensed & Insured</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Book Your Consultation
                  <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Emergency Care
                  <Clock className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            {/* Enhanced Emergency Notice */}
            <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-lg">Emergency Care Available</p>
                <p className="text-gray-600">24/7 emergency dental services for urgent care</p>
              </div>
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Subtle animated elements */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-blue-200/50 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 left-8 w-12 h-12 bg-blue-300/40 rounded-full animate-pulse delay-700"></div>

                  <div className="text-center relative z-10">
                    <Image
                      src="/dental.png" // Path relative to the public folder
                      alt="Professional dental care"
                      width={400} // Adjust width to fit the container
                      height={375} // Adjust height to maintain 4/5 aspect ratio (300 * 5/4 = 375)
                      className="rounded-2xl mx-auto mb-6 shadow-xl object-cover"
                    />
                    {/* <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                      <p className="text-gray-600 font-medium">Professional dental care photo</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-pulse border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">1000+</p>
                  <p className="text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-pulse border border-white/20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Star className="text-white h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">4.9/5</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};