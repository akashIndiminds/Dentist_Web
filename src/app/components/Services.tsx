// src/app/components/Services.tsx
"use client";

import React from "react";
import {
  Smile,
  Scissors,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Sparkles,
  CheckCircle,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "general",
      title: "General Dentistry",
      description:
        "Complete dental care for families including cleanings and fillings.",
      icon: Shield,
      features: ["Cleanings", "Fillings", "Root Canal", "Prevention"],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with advanced cosmetic procedures.",
      icon: Smile,
      features: ["Whitening", "Veneers", "Makeovers", "Bonding"],
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-100 to-blue-200",
    },
    {
      id: "surgery",
      title: "Oral Surgery",
      description:
        "Expert surgical procedures including implants and extractions.",
      icon: Scissors,
      features: ["Implants", "Wisdom Teeth", "Extractions", "Grafting"],
      gradient: "from-blue-700 to-blue-800",
      bgGradient: "from-blue-200 to-blue-300",
    },
    {
      id: "emergency",
      title: "Emergency Care",
      description: "24/7 emergency services for urgent dental needs.",
      icon: Clock,
      features: ["Same-Day", "24/7 Care", "Pain Relief", "Emergency"],
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // WhatsApp booking function
  const bookWhatsApp = () => {
    const whatsappNumber = "916290939189";
    const whatsappMessage = "Hi Doctor, I want to book an appointment for dental treatment. Please let me know your available slots.";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section
      id="services"
      className="py-8 md:py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 md:w-64 h-24 md:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 md:w-80 h-32 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        {/* Compact Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full mb-3 md:mb-4">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
            <span className="text-xs md:text-sm font-medium text-blue-700">
              Our Services
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight">
            Comprehensive
            <span className="text-blue-600 block">Dental Services</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Complete dental care using{" "}
            <span className="font-semibold text-blue-600">
              latest technology
            </span>
            .
          </p>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 border border-gray-100 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Pattern */}
                <div
                  className={`absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br ${service.bgGradient} rounded-full opacity-20 transform translate-x-4 sm:translate-x-6 -translate-y-4 sm:-translate-y-6`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${service.gradient} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 transition-all duration-300 shadow-md relative z-10`}
                >
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Compact Features */}
                  <ul className="grid grid-cols-2 gap-1 sm:gap-2 mb-3 md:mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-100 rounded-full flex items-center justify-center mr-1 sm:mr-2 flex-shrink-0">
                          <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600" />
                        </div>
                        <span className="font-medium truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Compact Learn More Button */}
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group/btn transition-colors duration-300 text-xs sm:text-sm"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Fixed CTA Section with Different Actions */}
        <div className="text-center">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 max-w-lg md:max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Star className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-xs md:text-sm lg:text-base">
                Premium Care
              </span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              Ready to Transform Your Smile?
            </h3>

            <p className="text-gray-600 mb-4 md:mb-6 lg:mb-8 text-sm md:text-base lg:text-lg leading-relaxed">
              Book instantly via WhatsApp or get in touch for more information.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              {/* WhatsApp Instant Booking */}
              <button
                onClick={bookWhatsApp}
                className="group bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center text-sm md:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                Book via WhatsApp
              </button>

              {/* Contact Form */}
              <button
                onClick={scrollToContact}
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center text-sm md:text-base"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Get in Touch
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500">
              <span className="inline-flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Instant booking available • Quick response guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-32 right-20 w-3 h-3 lg:w-4 lg:h-4 bg-blue-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="hidden md:block absolute bottom-40 left-16 w-4 h-4 lg:w-6 lg:h-6 bg-blue-500 rounded-full animate-bounce delay-700 opacity-50"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}