// src/components/Team.tsx
'use client'

import React from 'react'
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users
} from 'lucide-react'

// Team Component
export const Team = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Dr. Rajat Majumdar',
      role: 'Lead Dentist & Oral Surgeon',
      bio: 'Specialized in comprehensive dental care with advanced training in oral surgery and cosmetic dentistry.',
      specialties: ['General Dentistry', 'Oral Surgery', 'Cosmetic Dentistry', 'Dental Implants'],
      education: ['DDS - University of Dental Medicine', 'Oral Surgery Residency', 'Advanced Implantology Certificate'],
      experience: '15+ Years'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'Dental Hygienist',
      bio: 'Passionate about preventive care and patient education with 8 years of experience.',
      specialties: ['Preventive Care', 'Teeth Cleaning', 'Patient Education'],
      education: ['Associate in Dental Hygiene', 'Continuing Education in Periodontics'],
      experience: '8 Years'
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      role: 'Dental Assistant',
      bio: 'Dedicated to ensuring patient comfort and supporting all dental procedures.',
      specialties: ['Patient Care', 'Surgical Assistance', 'Digital Imaging'],
      education: ['Certified Dental Assistant', 'Radiology Certification'],
      experience: '6 Years'
    },
    {
      id: '4',
      name: 'Jennifer Smith',
      role: 'Office Manager',
      bio: 'Manages appointments, insurance, and ensures smooth office operations.',
      specialties: ['Office Management', 'Insurance Coordination', 'Patient Relations'],
      education: ['Business Administration', 'Healthcare Management Certificate'],
      experience: '10 Years'
    }
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Users className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Our Team</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Meet Our Expert
            <span className="text-blue-600 block">Team</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced professionals are dedicated to providing you with the highest 
            quality dental care in a <span className="font-semibold text-blue-600">comfortable and welcoming</span> environment.
          </p>
        </div>

        {/* Enhanced Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 text-center relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 transform translate-x-6 -translate-y-6"></div>
              
              {/* Enhanced Photo */}
              <div className="relative mb-6">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border-4 border-white">
                  <span className="text-blue-600 text-2xl lg:text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {member.experience}
                </div>
              </div>

              {/* Enhanced Info */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3 text-sm lg:text-base">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Enhanced Specialties */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center justify-center">
                  <Award className="h-4 w-4 mr-1 text-blue-600" />
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.slice(0, 2).map((specialty, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {member.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                      +{member.specialties.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Enhanced Education */}
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 mr-1 text-blue-600" />
                  Education
                </h4>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600 font-medium">
                    {member.education[0]}
                  </p>
                  {member.education.length > 1 && (
                    <p className="text-xs text-gray-500">
                      +{member.education.length - 1} more credentials
                    </p>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Team Values */}
        <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-xl border border-white/20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Heart className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Our Values</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">What Drives Us Every Day</h3>
            <p className="text-gray-600 text-lg">The principles that guide our exceptional care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Compassionate Care</h4>
              <p className="text-gray-600 leading-relaxed">We treat every patient with kindness, understanding, and respect for their individual needs.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600 leading-relaxed">We strive for the highest standards in everything we do, ensuring exceptional results.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h4>
              <p className="text-gray-600 leading-relaxed">We stay current with the latest dental techniques and cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="absolute bottom-40 left-16 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-700 opacity-50"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}