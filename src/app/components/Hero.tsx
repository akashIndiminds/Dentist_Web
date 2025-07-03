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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Loading Overlay */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium">Loading...</p>
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

      {/* Content */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-opacity duration-1000 ${
        imageLoaded || imageError ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Premium Dental Care</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Smile is Our
            <span className="block text-yellow-300">Priority ✨</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced dental care with a <span className="font-semibold text-yellow-300">personal touch</span>. 
            Specializing in general dentistry, cosmetic procedures, and oral surgery.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm md:text-base">Happy Patients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">4.9★</div>
              <div className="text-sm md:text-base">Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base">Emergency</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hi Doctor, I want an appointment for dental consultation. Please let me know your availability."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book Appointment
            </a>
            <a
              href="tel:+919876543210"
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Emergency Call
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};