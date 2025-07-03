// src/app/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";

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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappNumber = "916290939189"; // Replace with actual number
  const whatsappMessage = "Hi Doctor, I want to book an appointment.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 md:py-3 text-xs md:text-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                <span>157/1, SN Roy Rd, New Alipore, Kolkata 700034</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/30 px-2 md:px-3 py-1 rounded-full">
              <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
              <span className="font-medium">Emergency: 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 md:space-x-3 group cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg md:text-xl">
                  D
                </span>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Dr. Rajat Majumdar
                </h1>
                <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                  Dental Care & Oral Surgery
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <a
                href="tel:5551234567"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm lg:text-base"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">(555) 123-4567</span>
              </a>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                <span className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  WhatsApp
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-blue-100 space-y-3">
                  <a
                    href="tel:5551234567"
                    className="flex items-center space-x-2 text-blue-600 font-semibold px-4 py-3 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call: (555) 123-4567</span>
                  </a>
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Book via WhatsApp
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
