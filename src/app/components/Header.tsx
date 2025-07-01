// src/components/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  MapPin,
  Star, 
  Shield, 
  Clock, 
  Award,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  ArrowUp,
  Sparkles,
  CheckCircle
} from 'lucide-react'

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 text-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <MapPin className="h-4 w-4" />
                <span>123 Dental Street, City, State 12345</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/30 px-3 py-1 rounded-full">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">Emergency: 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Dr. Smith</h1>
                <p className="text-sm text-gray-600">Dental Care & Oral Surgery</p>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Enhanced CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:5551234567" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </a>
              <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center">
                  Book Appointment
                  <Calendar className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-blue-100">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg">
                    Book Appointment
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}