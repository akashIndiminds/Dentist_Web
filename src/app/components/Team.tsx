// src/app/components/Team.tsx
"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Heart,
  Users,
  MessageCircle,
} from "lucide-react";

export const Team = () => {
  const whatsappNumber = "916290939189"; // Replace with actual number
  const whatsappMessage =
    "Hi Doctor, I want to book an appointment with your team.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const teamMembers = [
    {
      id: "1",
      name: "Dr. Rajat Majumdar",
      role: "Lead Dentist & Oral Surgeon",
      bio: "Specialized in comprehensive dental care with advanced training in oral surgery.",
      specialties: [
        "General Dentistry",
        "Oral Surgery",
        "Cosmetic Dentistry",
        "Implants",
      ],
      education: [
        "DDS - Dental Medicine",
        "Oral Surgery Residency",
        "Implantology Certificate",
      ],
      experience: "15+ Years",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      role: "Dental Hygienist",
      bio: "Passionate about preventive care and patient education.",
      specialties: [
        "Preventive Care",
        "Teeth Cleaning",
        "Patient Education",
        "Oral Health",
      ],
      education: ["Associate in Dental Hygiene", "Continuing Education"],
      experience: "8 Years",
    },
    {
      id: "3",
      name: "Maria Rodriguez",
      role: "Dental Assistant",
      bio: "Dedicated to ensuring patient comfort and supporting procedures.",
      specialties: [
        "Patient Care",
        "Surgical Assistance",
        "Digital Imaging",
        "Sterilization",
      ],
      education: ["Certified Dental Assistant", "Radiology Certification"],
      experience: "6 Years",
    },
    {
      id: "4",
      name: "Jennifer Smith",
      role: "Office Manager",
      bio: "Manages appointments, insurance, and ensures smooth operations.",
      specialties: [
        "Office Management",
        "Insurance Coordination",
        "Patient Relations",
        "Scheduling",
      ],
      education: ["Business Administration", "Healthcare Management"],
      experience: "10 Years",
    },
  ];

  return (
    <section
      id="team"
      className="py-8 md:py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 md:w-80 h-40 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        {/* Compact Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full mb-3 md:mb-6">
            <Users className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
            <span className="text-xs md:text-sm font-medium text-blue-700">
              Our Team
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight">
            Meet Our Expert
            <span className="text-blue-600 block">Team</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Experienced professionals dedicated to providing{" "}
            <span className="font-semibold text-blue-600">
              exceptional care
            </span>{" "}
            in a welcoming environment.
          </p>
        </div>

        {/* Compact Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 border border-gray-100 text-center relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 transform translate-x-4 sm:translate-x-6 -translate-y-4 sm:-translate-y-6"></div>

              {/* Compact Photo */}
              <div className="relative mb-3 md:mb-4 lg:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md border-2 md:border-4 border-white">
                  <span className="text-blue-600 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold">
                  {member.experience}
                </div>
              </div>

              {/* Compact Info */}
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-2 md:mb-3 text-xs sm:text-sm md:text-base">
                {member.role}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4 lg:mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Compact Specialties */}
              <div className="mb-3 md:mb-4 lg:mb-6">
                <h4 className="text-xs md:text-sm font-bold text-gray-800 mb-2 md:mb-3 flex items-center justify-center">
                  <Award className="h-3 w-3 md:h-4 md:w-4 mr-1 text-blue-600" />
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                  {member.specialties.slice(0, 2).map((specialty, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {member.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-medium">
                      +{member.specialties.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Compact Education */}
              <div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600 font-medium">
                    {member.education[0]}
                  </p>
                  {member.education.length > 1 && (
                    <p className="text-xs text-gray-500">
                      +{member.education.length - 1} more
                    </p>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Compact Team Values */}
        <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full mb-3 md:mb-4">
              <Heart className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
              <span className="text-xs md:text-sm font-medium text-blue-700">
                Our Values
              </span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              What Drives Us Every Day
            </h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              Principles that guide our exceptional care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Compassionate Care
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We treat every patient with kindness and respect for their
                individual needs.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We strive for the highest standards in everything we do,
                ensuring exceptional results.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We stay current with the latest dental techniques and
                cutting-edge technology.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-6 md:mt-8 lg:mt-10">
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Book with Our Team
            </a>
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
};
