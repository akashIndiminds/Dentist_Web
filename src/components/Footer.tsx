// src/components/Footer.tsx
'use client';

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Oral Surgery',
    'Emergency Care',
    'Dental Implants',
    'Teeth Whitening'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Practice Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. [Your Name]</h3>
                <p className="text-gray-400 text-sm">Dental Care & Oral Surgery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing exceptional dental care with advanced technology and a personal touch. 
              Your smile is our priority, and your comfort is our commitment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Dental Street</p>
                  <p className="text-gray-300">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:5551234567" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:info@dentalcare.com" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  info@dentalcare.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8AM-6PM</p>
                  <p className="text-gray-300">Sat: 9AM-3PM</p>
                  <p className="text-primary-400">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>© 2025 Dr. [Your Name]. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for healthy smiles.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="hover:text-primary-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};
