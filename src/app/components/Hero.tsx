'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles, Loader2 } from 'lucide-react';

// src/components/Hero.tsx
export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Replace this with your actual image URL
  const backgroundImageUrl = "/images/dental-clinic-hero-bg.jpg"; // Your 16:9 background image
  
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageError(true);
    };
    img.src = backgroundImageUrl;
  }, [backgroundImageUrl]);

  // SVG Pattern Fallback Background
  const svgPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dental-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="25" r="8" fill="rgba(255,255,255,0.1)"/>
          <circle cx="25" cy="75" r="6" fill="rgba(255,255,255,0.08)"/>
          <circle cx="75" cy="75" r="7" fill="rgba(255,255,255,0.09)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dental-pattern)"/>
      <path d="M100,400 Q300,300 500,400 T900,400 L900,500 Q700,600 500,500 T100,500 Z" fill="rgba(255,255,255,0.05)"/>
      <circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.03)"/>
      <circle cx="1000" cy="600" r="120" fill="rgba(255,255,255,0.04)"/>
      <path d="M600,100 L620,120 L600,140 L580,120 Z" fill="rgba(255,255,255,0.1)"/>
      <path d="M300,600 L330,630 L300,660 L270,630 Z" fill="rgba(255,255,255,0.08)"/>
    </svg>
  `)}`;

  // Background style based on image loading state
  const backgroundStyle = imageLoaded && !imageError 
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.7)), url('${backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.7)), url('${svgPattern}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };

  return (
    <section id="home" className="relative min-h-[fit-content] flex items-center justify-center overflow-hidden">
      {/* Loading Overlay */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <Loader2 className="h-8 w-8 sm:h-12 sm:w-12 animate-spin mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-lg font-medium">Loading...</p>
          </div>
        </div>
      )}

      {/* Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          imageLoaded || imageError ? 'opacity-100' : 'opacity-0'
        }`}
        style={backgroundStyle}
      />

      {/* Content - Mobile First Responsive */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10 transition-opacity duration-1000 ${
        imageLoaded || imageError ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="text-center text-white">
          {/* Premium Badge - Mobile Optimized */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium">Premium Dental Care</span>
          </div>

          {/* Main Heading - Properly Responsive */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Your Smile is Our
            <span className="block text-yellow-300">Priority ✨</span>
          </h1>
          
          {/* Description - Mobile Friendly */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Advanced dental care with a <span className="font-semibold text-yellow-300">personal touch</span>. 
            <span className="hidden sm:inline"> Specializing in general dentistry, cosmetic procedures, and oral surgery.</span>
          </p>

          {/* Stats - Compact Mobile Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm md:text-base">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-sm md:text-base">Happy Patients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">4.9★</div>
              <div className="text-xs sm:text-sm md:text-base">Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base">Emergency</div>
            </div>
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href="https://wa.me/916290939189?text=Hi Doctor, I want an appointment for dental consultation. Please let me know your availability."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
              Book Appointment
            </a>
            <a
              href="tel:+916290939189"
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              Emergency Call
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on Mobile */}
      <div className="hidden sm:block absolute bottom-10 left-10 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute top-20 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};