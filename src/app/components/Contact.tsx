'use client'

import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Sparkles,
  Star,
  Shield,
  Heart
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    isEmergency: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: { target: { checked?: any; name?: any; value?: any; type?: any } }) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 123-4567',
      subtext: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
      action: 'tel:5551234567',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@drsmithdental.com',
      subtext: 'We\'ll respond within 24 hours',
      action: 'mailto:info@drsmithdental.com',
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-100 to-blue-200'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Dental Street',
      subtext: 'City, State 12345',
      action: 'https://maps.google.com',
      gradient: 'from-blue-700 to-blue-800',
      bgGradient: 'from-blue-200 to-blue-300'
    },
    {
      icon: Clock,
      title: 'Emergency',
      details: '24/7 Available',
      subtext: 'Call for urgent dental needs',
      action: 'tel:5551234567',
      gradient: 'from-blue-800 to-blue-900',
      bgGradient: 'from-blue-300 to-blue-400'
    }
  ]

  const services = [
    'General Consultation',
    'Teeth Cleaning',
    'Cosmetic Dentistry',
    'Oral Surgery',
    'Emergency Care',
    'Dental Implants',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <MessageSquare className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact Us
              <span className="text-blue-600 block">Today ✨</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help with all your dental needs. Contact us today to schedule your appointment 
              or get answers to your <span className="font-semibold text-blue-600">questions</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <a
                  key={index}
                  href={info.action}
                  className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 text-center relative overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.bgGradient} rounded-full opacity-30 transform translate-x-6 -translate-y-6`}></div>
                  
                  {/* Enhanced Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2 text-lg">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {info.subtext}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Info */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Enhanced Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
                    <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-700">Book Appointment</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Schedule Your Visit
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Fill out the details below and we'll contact you to schedule your visit at a convenient time.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Enhanced Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-black"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-black"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-black"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Enhanced Service and Date */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-black"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-black"
                      />
                    </div>
                  </div>

                  {/* Enhanced Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none bg-white/80 text-black"
                      placeholder="Tell us about your dental concerns or questions..."
                    />
                  </div>

                  {/* Enhanced Emergency Checkbox */}
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
                    <input
                      type="checkbox"
                      name="isEmergency"
                      checked={formData.isEmergency}
                      onChange={handleChange}
                      className="w-5 h-5 text-red-600 bg-white border-red-300 rounded focus:ring-red-500"
                    />
                    <label className="text-sm text-red-700 font-medium">
                      This is a dental emergency (we'll contact you immediately)
                    </label>
                  </div>

                  {/* Enhanced Submit Button */}
                  <div className="pt-4">
                    {isSubmitted ? (
                      <div className="flex items-center justify-center space-x-3 text-green-600 bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                        <CheckCircle className="h-6 w-6" />
                        <span className="font-semibold text-lg">Thank you! We'll contact you soon.</span>
                      </div>
                    ) : (
                      <button 
                        onClick={handleSubmit}
                        className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                      >
                        <Send className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Send Appointment Request
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Information & Hours */}
            <div className="space-y-8">
              {/* Enhanced Office Hours */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 transform translate-x-6 -translate-y-6"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  Office Hours
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center py-3 px-4 bg-blue-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="font-bold text-blue-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-blue-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-bold text-blue-600">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Sunday</span>
                    <span className="font-medium text-gray-600">Emergency Only</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200">
                    <span className="text-red-700 font-bold">Emergency Care</span>
                    <span className="font-bold text-red-700">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Location */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 transform translate-x-6 -translate-y-6"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  Our Location
                </h3>
                <div className="space-y-6 relative z-10">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Star className="h-4 w-4 text-blue-600 mr-2" />
                      Address
                    </h4>
                    <p className="text-gray-700 font-medium">123 Dental Street<br />City, State 12345</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Shield className="h-4 w-4 text-blue-600 mr-2" />
                      Parking
                    </h4>
                    <p className="text-gray-700">Free parking available in our lot</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Heart className="h-4 w-4 text-blue-600 mr-2" />
                      Public Transportation
                    </h4>
                    <p className="text-gray-700">Bus routes 15, 22, and 45 stop nearby</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Quick Actions */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 mr-3 text-blue-600" />
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <button className="group w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Schedule Online
                  </button>
                  <button className="group w-full px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Live Chat Support
                  </button>
                  <a 
                    href="tel:5551234567"
                    className="group w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Emergency Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Find Us</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Easy to 
              <span className="text-blue-600 block">Locate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in the heart of the city with easy access and parking.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-96 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-blue-200/20 rounded-3xl"></div>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <p className="text-gray-700 text-xl font-semibold mb-2">Interactive Map Coming Soon</p>
                <p className="text-blue-600 font-medium text-lg">123 Dental Street, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="absolute bottom-40 left-16 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-700 opacity-50"></div>
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-1000 opacity-70"></div>

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
    </div>
  )
}