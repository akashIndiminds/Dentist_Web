// src/app/components/Footer.tsx
"use client";
import { ArrowUp, ChevronRight, Clock, Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, MessageCircle } from "lucide-react"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappNumber = "919876543210" // Replace with actual number
  const whatsappMessage = "Hi Doctor, I want to book an appointment."
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const services = [
    'General Dentistry', 'Cosmetic Dentistry', 'Oral Surgery', 
    'Emergency Care', 'Dental Implants', 'Teeth Whitening'
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer - Compact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Top Section - Practice Info & Contact Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Rajat Majumdar</h3>
                <p className="text-blue-300 text-sm">Dental Care & Oral Surgery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Providing exceptional dental care with <span className="text-blue-300 font-semibold">advanced technology</span> and a personal touch.
            </p>
            
            {/* Social Links & WhatsApp */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                )
              })}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm ml-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-blue-300 mb-4">Contact Info</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">123 Dental Street</p>
                  <p className="text-gray-300 text-xs">City, State 12345</p>
                </div>
              </div>
              
              <a href="tel:5551234567" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-sm">
                  (555) 123-4567
                </span>
              </a>
              
              <a href="mailto:info@drrajatdental.com" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-sm">
                  info@drrajatdental.com
                </span>
              </a>
              
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</p>
                  <p className="text-blue-300 font-semibold text-xs">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Services & Quick Links Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-700">
          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-blue-300 mb-3">Our Services</h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center group text-sm text-left"
                >
                  <ChevronRight className="h-3 w-3 mr-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-blue-300 mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center group text-sm text-left"
                >
                  <ChevronRight className="h-3 w-3 mr-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400 text-xs text-center md:text-left">
              <span>© 2025 Dr. Rajat Majumdar. Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" />
              <span>for healthy smiles.</span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <button onClick={() => scrollToSection('#home')} className="hover:text-blue-300 transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => scrollToSection('#home')} className="hover:text-blue-300 transition-colors">
                Terms of Service
              </button>
              <button onClick={() => scrollToSection('#home')} className="hover:text-blue-300 transition-colors">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-40 transform hover:scale-110 no-print"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button> */}
    </footer>
  )
}