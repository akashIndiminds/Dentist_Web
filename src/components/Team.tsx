// src/components/Team.tsx
'use client';

import React from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Dr. [Your Name]',
      role: 'Lead Dentist & Oral Surgeon',
      bio: 'Specialized in comprehensive dental care with advanced training in oral surgery and cosmetic dentistry.',
      image: '/images/team/doctor.jpg',
      specialties: ['General Dentistry', 'Oral Surgery', 'Cosmetic Dentistry', 'Dental Implants'],
      education: ['DDS - University of Dental Medicine', 'Oral Surgery Residency', 'Advanced Implantology Certificate']
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'Dental Hygienist',
      bio: 'Passionate about preventive care and patient education with 8 years of experience.',
      image: '/images/team/hygienist.jpg',
      specialties: ['Preventive Care', 'Teeth Cleaning', 'Patient Education'],
      education: ['Associate in Dental Hygiene', 'Continuing Education in Periodontics']
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      role: 'Dental Assistant',
      bio: 'Dedicated to ensuring patient comfort and supporting all dental procedures.',
      image: '/images/team/assistant.jpg',
      specialties: ['Patient Care', 'Surgical Assistance', 'Digital Imaging'],
      education: ['Certified Dental Assistant', 'Radiology Certification']
    },
    {
      id: '4',
      name: 'Jennifer Smith',
      role: 'Office Manager',
      bio: 'Manages appointments, insurance, and ensures smooth office operations.',
      image: '/images/team/manager.jpg',
      specialties: ['Office Management', 'Insurance Coordination', 'Patient Relations'],
      education: ['Business Administration', 'Healthcare Management Certificate']
    }
  ];

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to providing you with the highest 
            quality dental care in a comfortable and welcoming environment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group card text-center hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-primary-500 text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-500 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center justify-center">
                  <Award className="h-4 w-4 mr-1" />
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.specialties.slice(0, 2).map((specialty, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                  {member.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      +{member.specialties.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  Education
                </h4>
                <div className="space-y-1">
                  {member.education.slice(0, 1).map((edu, idx) => (
                    <p key={idx} className="text-xs text-gray-600">
                      {edu}
                    </p>
                  ))}
                  {member.education.length > 1 && (
                    <p className="text-xs text-gray-500">
                      +{member.education.length - 1} more credentials
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team Values</h3>
            <p className="text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Compassionate Care</h4>
              <p className="text-gray-600 text-sm">We treat every patient with kindness, understanding, and respect.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">We strive for the highest standards in everything we do.</p>
            </div>
            <div className="text-center">
              <GraduationCap className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h4>
              <p className="text-gray-600 text-sm">We stay current with the latest dental techniques and technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
