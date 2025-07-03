// src/app/components/Testimonials.tsx
"use client";

import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const whatsappNumber = "916290939189"; // Replace with actual number
  const whatsappMessage =
    "Hi Doctor, I want to book an appointment after reading your testimonials.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const testimonials = [
    {
      id: "1",
      name: "Jennifer Wilson",
      treatment: "Dental Implants",
      rating: 5,
      text: "Dr. Rajat Majumdar and his team transformed my smile completely. The dental implant procedure was much more comfortable than I expected, and the results exceeded my expectations!",
    },
    {
      id: "2",
      name: "Michael Chen",
      treatment: "Cosmetic Dentistry",
      rating: 5,
      text: "The teeth whitening and veneer treatment I received was absolutely amazing. The staff was professional, caring, and made sure I was comfortable throughout.",
    },
    {
      id: "3",
      name: "Sarah Davis",
      treatment: "Oral Surgery",
      rating: 5,
      text: "I was nervous about my wisdom tooth extraction, but Dr. Rajat Majumdar made the entire experience stress-free. The pain management was excellent.",
    },
    {
      id: "4",
      name: "Robert Johnson",
      treatment: "General Dentistry",
      rating: 5,
      text: "Been coming here for 5 years now. The preventive care and regular checkups have kept my teeth in perfect condition. The entire team treats you like family.",
    },
    {
      id: "5",
      name: "Lisa Martinez",
      treatment: "Emergency Care",
      rating: 5,
      text: "When I had a dental emergency on a weekend, Dr. Rajat Majumdar was available immediately. The quick response and expert care saved my tooth.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 ${
              i < rating ? "fill-current" : "stroke-current fill-transparent"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="py-8 md:py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-32 md:w-72 h-32 md:h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-40 md:w-96 h-40 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        {/* Compact Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full mb-3 md:mb-6">
            <Quote className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
            <span className="text-xs md:text-sm font-medium text-blue-700">
              Patient Stories
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight">
            What Our Patients
            <span className="text-blue-600 block">Say About Us</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Real stories from patients who experienced our{" "}
            <span className="font-semibold text-blue-600">
              exceptional dental care
            </span>
            .
          </p>
        </div>

        {/* Compact Main Testimonial */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative border border-gray-100 overflow-hidden">
            {/* Background Pattern - Hidden on mobile */}
            <div className="absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 transform translate-x-4 md:translate-x-6 lg:translate-x-8 -translate-y-4 md:-translate-y-6 lg:-translate-y-8 hidden sm:block"></div>

            {/* Compact Quote Icon */}
            <div className="absolute top-3 md:top-4 lg:top-6 left-3 md:left-4 lg:left-6 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center">
              <Quote className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
            </div>

            <div className="relative z-10 pt-6 md:pt-8">
              {/* Compact Rating */}
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="bg-yellow-50 p-2 md:p-3 rounded-lg md:rounded-2xl">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              {/* Compact Testimonial Text */}
              <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 text-center leading-relaxed mb-6 md:mb-8 font-light px-2">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              {/* Compact Patient Info */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-md">
                  <span className="text-blue-600 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold text-xs md:text-sm">
                    {testimonials[currentTestimonial].treatment}
                  </span>
                </div>
              </div>
            </div>

            {/* Compact Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Compact Testimonial Dots */}
        <div className="flex justify-center space-x-2 md:space-x-3 mb-8 md:mb-12 lg:mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-blue-600 w-6 md:w-8 shadow-lg"
                  : "bg-gray-300 hover:bg-blue-400 w-2 md:w-3"
              }`}
            />
          ))}
        </div>

        {/* Compact Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-8 md:mb-12">
          <div className="text-center bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
              4.9
            </div>
            <div className="text-gray-600 font-medium mb-1 md:mb-2 text-xs md:text-sm">
              Average Rating
            </div>
            <div className="flex justify-center">{renderStars(5)}</div>
          </div>
          <div className="text-center bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium text-xs md:text-sm">
              Google Reviews
            </div>
          </div>
          <div className="text-center bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
              98%
            </div>
            <div className="text-gray-600 font-medium text-xs md:text-sm">
              Recommend Us
            </div>
          </div>
          <div className="text-center bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
              1000+
            </div>
            <div className="text-gray-600 font-medium text-xs md:text-sm">
              Happy Patients
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 max-w-md lg:max-w-lg mx-auto">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              Ready to Join Our Happy Patients?
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Book your appointment and experience exceptional dental care.
            </p>
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-32 right-20 w-3 h-3 lg:w-4 lg:h-4 bg-blue-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="hidden md:block absolute bottom-40 left-16 w-4 h-4 lg:w-6 lg:h-6 bg-blue-500 rounded-full animate-bounce delay-700 opacity-50"></div>
    </section>
  );
};
