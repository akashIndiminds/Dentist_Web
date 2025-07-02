// src/components/Contact.tsx
"use client";

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
  Shield,
  Navigation,
  Route
} from 'lucide-react'

// Google Map Component
function GoogleMapComponent() {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Dental office location
  const officeLocation = {
    lat: 40.7128, // Example: New York City coordinates
    lng: -74.0060,
    address: "123 Dental Street, City, State 12345"
  }

  const getCurrentLocation = () => {
    setIsLoading(true)
    setError(null)
    
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.")
      setIsLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        setIsLoading(false)
      },
      () => {
        setError("Unable to retrieve your location.")
        setIsLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    )
  }

  const openInGoogleMaps = () => {
    const destination = `${officeLocation.lat},${officeLocation.lng}`
    const origin = userLocation ? `${userLocation.lat},${userLocation.lng}` : ''
    const url = `https://www.google.com/maps/dir/${origin}/${destination}`
    window.open(url, '_blank')
  }

  const calculateDistance = () => {
    if (!userLocation) return null
    
    const R = 3959 // Earth's radius in miles
    const dLat = (officeLocation.lat - userLocation.lat) * Math.PI / 180
    const dLng = (officeLocation.lng - userLocation.lng) * Math.PI / 180
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(userLocation.lat * Math.PI / 180) * Math.cos(officeLocation.lat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const distance = R * c
    return distance.toFixed(1)
  }

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="h-64 md:h-80 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
        {/* Map iframe - Replace with your actual Google Maps embed */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTQuNCJX!5e0!3m2!1sen!2sus!4v1635959752463!5m2!1sen!2sus`}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        {/* Overlay Controls */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Location Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Our Dental Office</h3>
                  <p className="text-gray-600 text-xs">123 Dental Street, City, State</p>
                  {userLocation && (
                    <p className="text-blue-600 text-xs font-medium">
                      📍 {calculateDistance()} miles from your location
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={getCurrentLocation}
                  disabled={isLoading}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1 disabled:opacity-50"
                >
                  <Navigation className="h-3 w-3" />
                  <span>{isLoading ? 'Finding...' : 'My Location'}</span>
                </button>
                
                <button
                  onClick={openInGoogleMaps}
                  className="px-3 py-2 bg-green-600 text-white rounded-lg text-xs font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1"
                >
                  <Route className="h-3 w-3" />
                  <span>Directions</span>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-xs">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {userLocation && (
              <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-xs">
                  ✅ Location found! Distance calculated from your current position.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Open Now</p>
                  <p className="text-xs text-gray-600">Mon-Fri: 8AM-6PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Free Parking</p>
                  <p className="text-xs text-gray-600">On-site available</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Emergency</p>
                  <p className="text-xs text-gray-600">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 123-4567',
      subtext: 'Mon-Fri: 8AM-6PM',
      action: 'tel:5551234567',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@drsmithdental.com',
      subtext: 'Quick response guaranteed',
      action: 'mailto:info@drsmithdental.com',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Dental Street',
      subtext: 'City, State 12345',
      action: 'https://maps.google.com',
      gradient: 'from-blue-700 to-blue-800'
    },
    {
      icon: Clock,
      title: 'Emergency',
      details: '24/7 Available',
      subtext: 'Urgent care anytime',
      action: 'tel:5551234567',
      gradient: 'from-red-500 to-red-600'
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
      
      {/* Compact Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full mb-4">
              <MessageSquare className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Get In Touch</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Contact Us
              <span className="text-blue-600 block">Today ✨</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;re here to help with all your dental needs. Contact us today to schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Compact Contact Cards */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <a
                  key={index}
                  href={info.action}
                  className="group bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 text-center relative overflow-hidden"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1 text-sm md:text-base">
                    {info.details}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {info.subtext}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section - Closer Layout */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 transform translate-x-6 -translate-y-6"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full mb-3">
                    <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-700">Book Appointment</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Schedule Your Visit
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Fill out the details below and we&apos;ll contact you to schedule your visit.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Service and Date */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 rounded-lg resize-none text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your dental concerns..."
                    />
                  </div>

                  {/* Emergency Checkbox */}
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg border border-red-200">
                    <input
                      type="checkbox"
                      name="isEmergency"
                      checked={formData.isEmergency}
                      onChange={handleChange}
                      className="w-4 h-4 text-red-600 bg-white border-red-300 rounded focus:ring-red-500"
                    />
                    <label className="text-sm text-red-700 font-medium">
                      This is a dental emergency
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    {isSubmitted ? (
                      <div className="flex items-center justify-center space-x-3 text-green-600 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-semibold">Thank you! We&apos;ll contact you soon.</span>
                      </div>
                    ) : (
                      <button 
                        type="submit"
                        className="group w-full px-6 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                      >
                        <Send className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Send Request
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar Info - Takes 1 column */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 px-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Mon - Fri</span>
                    <span className="font-bold text-blue-600 text-sm">8AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Saturday</span>
                    <span className="font-bold text-blue-600 text-sm">9AM - 3PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-sm font-medium">Sunday</span>
                    <span className="font-medium text-gray-600 text-sm">Emergency</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                    <span className="text-red-700 text-sm font-bold">Emergency</span>
                    <span className="font-bold text-red-700 text-sm">24/7</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  Location
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center">
                      <CheckCircle className="h-3 w-3 text-blue-600 mr-2" />
                      Address
                    </h4>
                    <p className="text-gray-700 text-sm">123 Dental Street<br />City, State 12345</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center">
                      <Shield className="h-3 w-3 text-blue-600 mr-2" />
                      Parking
                    </h4>
                    <p className="text-gray-700 text-sm">Free parking available</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-3 text-blue-600" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="group w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Schedule Online
                  </button>
                  <button className="group w-full px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm">
                    <MessageSquare className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Live Chat
                  </button>
                  <a 
                    href="tel:5551234567"
                    className="group w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm"
                  >
                    <Phone className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Emergency Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full mb-4">
              <MapPin className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Find Us</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Easy to 
              <span className="text-blue-600">Locate</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re conveniently located with easy access and free parking.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <GoogleMapComponent />
          </div>
        </div>
      </section>
    </div>
  )
}