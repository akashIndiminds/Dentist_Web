// src/app/components/Footer.tsx
"use client";
import { ChevronRight, Clock, Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Code, ExternalLink, Sparkles } from "lucide-react"

export const Footer = () => {
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

  // Portfolio link - Update this when you push to git
  const portfolioLink = "#portfolio" // Replace with actual portfolio URL later

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Footer - Compact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Top Section - Practice Info & Contact Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Practice Info - Enhanced Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 cursor-pointer overflow-hidden">
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-300/50 animate-ping"></div>
                {/* Main icon */}
                <span className="text-white font-bold text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">D</span>
                {/* Sparkle effects */}
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-300 animate-pulse opacity-80" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Dr. Rajat Majumdar
                </h3>
                <p className="text-blue-300 text-sm font-medium">Dental Care & Oral Surgery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Providing exceptional dental care with <span className="text-blue-300 font-semibold">advanced technology</span> and a personal touch. Your trusted dental partner for comprehensive oral health solutions.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-blue-500/25 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-blue-300 mb-4">Contact Information</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-700">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">157/1, SN Roy Road, New Alipore</p>
                  <p className="text-gray-400 text-xs">Kolkata, West Bengal 700034</p>
                </div>
              </div>
              
              <a href="tel:+916290939189" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-700 group">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-sm">
                  +91 62909 39189
                </span>
              </a>
              
              <a href="mailto:info@drrajatdental.com" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-700 group">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-sm">
                  info@drrajatdental.com
                </span>
              </a>
              
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-700">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">Mon-Fri: 9AM-7PM | Sat: 9AM-4PM</p>
                  <p className="text-emerald-300 font-semibold text-xs flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Services & Quick Links Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-700/50">
          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-blue-300 mb-3">Our Services</h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-blue-300 transition-all duration-200 flex items-center group text-sm text-left p-2 rounded-lg hover:bg-gray-800/30"
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
                  className="text-gray-300 hover:text-blue-300 transition-all duration-200 flex items-center group text-sm text-left p-2 rounded-lg hover:bg-gray-800/30"
                >
                  <ChevronRight className="h-3 w-3 mr-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Footer with Freelancer Credit */}
      <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright with Heart Animation */}
            <div className="flex items-center space-x-1 text-gray-400 text-xs text-center md:text-left">
              <span>© 2025 Dr. Rajat Majumdar. Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" />
              <span>for healthy smiles.</span>
            </div>
            
            {/* Freelancer Credit - Eye-catching */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Legal Links */}
              {/* <div className="flex items-center space-x-4 text-xs text-gray-400">
                <button onClick={() => scrollToSection('#home')} className="hover:text-blue-300 transition-colors">
                  Privacy Policy
                </button>
                <button onClick={() => scrollToSection('#home')} className="hover:text-blue-300 transition-colors">
                  Terms of Service
                </button>
              </div>
               */}
              {/* Freelancer Credit */}
              <a
                href={portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 border border-purple-500/30 hover:border-purple-400/50 px-3 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Code className="h-4 w-4 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xs font-medium text-purple-300 group-hover:text-purple-200 transition-colors">
                  Designed & Developed by
                </span>
                <span className="text-xs font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Your Name
                </span>
                <ExternalLink className="h-3 w-3 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CSS for enhanced animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </footer>
  )
}