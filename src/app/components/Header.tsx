// src/app/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, MessageCircle, Stethoscope } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    // Add delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 120; // Approximate header height
        const elementPosition = (element as HTMLElement).offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  const whatsappNumber = "916290939189";
  const whatsappMessage = "Hi Doctor, I want to book an appointment.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Top Bar - Single Line */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-2 text-xs shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-200 transition-all duration-300 cursor-pointer group">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform" />
                <span className="font-medium text-xs sm:text-sm">+91 62909 39189</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 hover:text-blue-200 transition-all duration-300 cursor-pointer group">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 group-hover:bounce" />
                <span className="text-xs">Kolkata</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-emerald-500/90 px-2 sm:px-3 py-1 rounded-full hover:bg-emerald-500 transition-all duration-300 cursor-pointer group">
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-xs sm:text-sm">Emergency: 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100/50"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            
            {/* Logo */}
            <div
              className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Stethoscope className="text-white h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 truncate">
                  Dr. Rajat Majumdar
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 font-medium hidden sm:block">
                  Dental Care & Oral Surgery
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group py-2 px-3 xl:px-4 rounded-lg hover:bg-blue-50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <a
                href={`tel:+${whatsappNumber}`}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 group"
              >
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                <span className="hidden lg:inline text-sm">Call Now</span>
              </a>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-3 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="flex items-center relative z-10">
                  <MessageCircle className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="hidden lg:inline">WhatsApp</span>
                  <span className="lg:hidden">Chat</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-blue-50 transition-all duration-300 group relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)}>
          </div>
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 bg-white z-40 transform transition-all duration-500 ease-in-out shadow-2xl ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`} 
        style={{ 
          top: isScrolled ? '72px' : '120px', // Adjust based on header height
          height: isScrolled ? 'calc(100vh - 72px)' : 'calc(100vh - 120px)'
        }}>
          <div className="h-full overflow-y-auto">
            <div className="px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-4 rounded-xl transition-all duration-300 text-left group border border-transparent hover:border-blue-100"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isMenuOpen ? 'slideInDown 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{item.name}</span>
                      <div className="w-0 h-0.5 bg-blue-600 group-hover:w-6 transition-all duration-300 rounded-full"></div>
                    </div>
                  </button>
                ))}
                
                {/* Mobile CTA Section */}
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <a
                    href={`tel:+${whatsappNumber}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between text-blue-600 font-semibold px-4 py-4 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-blue-200 hover:border-blue-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Now</div>
                        <div className="text-sm text-gray-600">+91 62909 39189</div>
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full px-4 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div className="flex items-center space-x-3 relative z-10">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <div className="font-semibold">Book via WhatsApp</div>
                        <div className="text-sm text-emerald-100">Quick & Easy Appointment</div>
                      </div>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};