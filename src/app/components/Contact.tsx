// src/app/components/Contact.tsx
"use client";

import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  CheckCircle,
  Shield,
  Navigation,
  Route
} from 'lucide-react'

// Google Map Component
function GoogleMapComponent() {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // RG's Smile Zone & Implant - Actual clinic location
  const officeLocation = {
    lat: 22.5065442,
    lng: 88.3306577,
    address: "157/1, SN Roy Rd, Buroshibtalla, New Alipore, Kolkata, West Bengal 700034",
    name: "RG's Smile Zone & Implant"
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
    // Direct link to the clinic
    const clinicURL = "https://www.google.com/maps/place/RG%27s+Smile+Zone+%26+Implant+%7C+Best+dentist+In+New+Alipore/@22.5065491,88.3280828,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0270af1b69ad61:0xa53b6ea5ba440a61!8m2!3d22.5065442!4d88.3306577!16s%2Fg%2F1v8g9fgq?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    
    // If user location is available, open directions
    if (userLocation) {
      const directionsURL = `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${officeLocation.lat},${officeLocation.lng}`
      window.open(directionsURL, '_blank')
    } else {
      // Just open the clinic location
      window.open(clinicURL, '_blank')
    }
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
      {/* Map Container - Fully Responsive Heights */}
      <div className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
        {/* Google Maps Embed for RG's Smile Zone */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.654567!2d88.3280828!3d22.5065491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270af1b69ad61%3A0xa53b6ea5ba440a61!2sRG%27s%20Smile%20Zone%20%26%20Implant%20%7C%20Best%20dentist%20In%20New%20Alipore!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        {/* Overlay Controls - Responsive */}
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-5 shadow-lg border border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
              {/* Location Info */}
              <div className="flex items-start space-x-3 flex-1">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base lg:text-lg leading-tight">RG&apos;s Smile Zone</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-tight">New Alipore, Kolkata</p>
                  {userLocation && (
                    <p className="text-blue-600 text-xs md:text-sm font-medium mt-1">
                      📍 {calculateDistance()} miles away
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 md:space-x-3 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={getCurrentLocation}
                  disabled={isLoading}
                  className="flex-1 sm:flex-none px-3 py-2 md:px-4 md:py-2.5 bg-blue-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-md hover:shadow-lg"
                >
                  <Navigation className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{isLoading ? 'Finding...' : 'My Location'}</span>
                </button>
                
                <button
                  onClick={openInGoogleMaps}
                  className="flex-1 sm:flex-none px-3 py-2 md:px-4 md:py-2.5 bg-green-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-green-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <Route className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Directions</span>
                </button>
              </div>
            </div>

            {/* Status Messages */}
            {error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-xs md:text-sm">{error}</p>
              </div>
            )}

            {userLocation && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-xs md:text-sm font-medium">
                  ✅ Location found! Click directions for route.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
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
      details: 'info@rgssmilezone.com',
      subtext: 'Quick response guaranteed',
      action: 'mailto:info@rgssmilezone.com',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'New Alipore, Kolkata',
      subtext: 'Easy parking available',
      action: 'https://www.google.com/maps/place/RG%27s+Smile+Zone+%26+Implant+%7C+Best+dentist+In+New+Alipore/@22.5065491,88.3280828,17z',
      gradient: 'from-blue-700 to-blue-800'
    }
  ]

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
              <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
              <span className="text-sm md:text-base font-medium text-blue-700">Get In Touch</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Contact Us
              <span className="text-blue-600 block">Today ✨</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Book your appointment via WhatsApp or visit our clinic in New Alipore, Kolkata.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 md:py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              const isExternal = info.title === 'WhatsApp' || info.title === 'Visit Us'
              return (
                <a
                  key={index}
                  href={info.action}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : ""}
                  className="group bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 text-center relative overflow-hidden"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1 text-sm md:text-base lg:text-lg">
                    {info.details}
                  </p>
                  <p className="text-xs md:text-sm lg:text-base text-gray-600">
                    {info.subtext}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Office Info Section */}
      <section className="py-8 md:py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Office Hours */}
            <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                Office Hours
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-blue-50 rounded-xl">
                  <span className="text-gray-700 text-sm md:text-base font-medium">Mon - Fri</span>
                  <span className="font-bold text-blue-600 text-sm md:text-base">8AM - 6PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-blue-50 rounded-xl">
                  <span className="text-gray-700 text-sm md:text-base font-medium">Saturday</span>
                  <span className="font-bold text-blue-600 text-sm md:text-base">9AM - 3PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600 text-sm md:text-base font-medium">Sunday</span>
                  <span className="font-medium text-gray-600 text-sm md:text-base">Emergency</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200">
                  <span className="text-red-700 text-sm md:text-base font-bold">Emergency</span>
                  <span className="font-bold text-red-700 text-sm md:text-base">24/7</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                Location
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-blue-50 p-3 md:p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2 flex items-center">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
                    Address
                  </h4>
                  <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
                    157/1, SN Roy Rd, Buroshibtalla<br />
                    New Alipore, Kolkata, West Bengal 700034
                  </p>
                </div>
                <div className="bg-blue-50 p-3 md:p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2 flex items-center">
                    <Shield className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mr-2" />
                    Parking
                  </h4>
                  <p className="text-gray-700 text-xs md:text-sm lg:text-base">Free parking available</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
              <span className="text-sm md:text-base font-medium text-blue-700">Find Us</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Easy to 
              <span className="text-blue-600">Locate</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Located in the heart of New Alipore, Kolkata with easy access and free parking.
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