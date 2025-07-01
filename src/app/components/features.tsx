'use client'

import { Shield, Heart, Award, Clock, Users, Microscope } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise diagnosis and treatment.",
      icon: Microscope,
    },
    {
      title: "Experienced Team",
      description: "Highly qualified professionals with years of experience.",
      icon: Users,
    },
    {
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your specific needs.",
      icon: Heart,
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency dental care when you need it most.",
      icon: Clock,
    },
    {
      title: "Quality Assurance",
      description: "Highest standards of care with proven results.",
      icon: Shield,
    },
    {
      title: "Award Winning",
      description: "Recognized excellence in dental care and patient satisfaction.",
      icon: Award,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Dental Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine advanced technology with compassionate care to deliver 
            exceptional dental services for patients of all ages.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}