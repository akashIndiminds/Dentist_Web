// src/app/components/About.tsx
"use client";

import { Users, CheckCircle, Sparkles, MessageCircle } from "lucide-react";

export default function About() {
  const whatsappNumber = "916290939189"; // Replace with actual number
  const whatsappMessage =
    "Hi Doctor, I want to know more about your dental practice.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const stats = [
    { number: "15+", label: "Years Experience", icon: Users },
    { number: "1000+", label: "Happy Patients", icon: Users },
    { number: "50+", label: "Awards Won", icon: Users },
    { number: "99%", label: "Success Rate", icon: Users },
  ];

  const highlights = [
    "Advanced digital dentistry",
    "Personalized treatment plans",
    "Comfortable environment",
    "Emergency care 24/7",
    "Insurance & financing",
    "Bilingual staff available",
  ];

  const scrollToTeam = () => {
    const element = document.querySelector("#team");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-8 md:py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-32 md:w-72 h-32 md:h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-40 md:w-96 h-40 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
                <span className="text-xs md:text-sm font-medium text-blue-700">
                  Premium Dental Care
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Passionate About Your
                <span className="text-blue-600 block">Dental Health</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                With over{" "}
                <span className="font-semibold text-blue-600">
                  15 years of experience
                </span>{" "}
                in comprehensive dental care, Dr. Rajat Majumdar provides
                highest quality dental services in a comfortable, modern
                environment. Our practice combines{" "}
                <span className="font-semibold text-blue-700">
                  advanced technology
                </span>{" "}
                with personalized care.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We specialize in general dentistry and oral surgery, from
                routine cleanings to complex surgical interventions. Our goal is
                optimal oral health and the beautiful smile you&apos;ve always
                wanted.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-white/70 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToTeam}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center text-sm md:text-base"
              >
                <Users className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                Meet Our Team
              </button>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center text-sm md:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Image & Stats - Mobile Optimized */}
          <div className="relative order-first lg:order-last">
            {/* Main Image - Much smaller on mobile */}
            <div className="relative">
              <div className="aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg md:shadow-xl">
                {/* Animated elements - only on larger screens */}
                <div className="absolute top-4 md:top-8 right-4 md:right-8 w-8 h-8 md:w-16 md:h-16 bg-blue-200/50 rounded-full animate-pulse hidden md:block"></div>
                <div className="absolute bottom-6 md:bottom-12 left-4 md:left-8 w-6 h-6 md:w-12 md:h-12 bg-blue-300/40 rounded-full animate-pulse delay-700 hidden md:block"></div>

                <div className="text-center relative z-10">
                  {/* Doctor Avatar - Smaller on mobile */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-2 md:mb-4 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold">
                      Dr
                    </span>
                  </div>
                  <div className="bg-white/90 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl shadow-md">
                    <p className="text-gray-600 font-medium text-xs md:text-sm">
                      Dr. Rajat Majumdar
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Hidden on mobile */}
              <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-12 h-12 md:w-24 md:h-24 bg-blue-300 rounded-full opacity-30 animate-pulse hidden lg:block"></div>
              <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-16 h-16 md:w-32 md:h-32 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000 hidden lg:block"></div>
            </div>

            {/* Stats Cards - Compact on mobile */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4 md:mt-6 lg:mt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 shadow-md hover:shadow-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl mx-auto mb-2 md:mb-3 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <IconComponent className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating elements - Hidden on mobile and tablet */}
            <div className="absolute -z-10 top-8 md:top-16 right-8 md:right-16 w-3 h-3 md:w-6 md:h-6 bg-blue-400 rounded-full animate-bounce delay-500 opacity-60 hidden lg:block"></div>
            <div className="absolute -z-10 bottom-16 md:bottom-32 left-6 md:left-12 w-2 h-2 md:w-4 md:h-4 bg-blue-500 rounded-full animate-bounce delay-1000 opacity-70 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
