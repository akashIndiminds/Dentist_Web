// src/components/Contact.tsx
'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageSquare,
  Send,
  CheckCircle 
} from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    isEmergency: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 123-4567',
      subtext: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
      action: 'tel:5551234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@dentalcare.com',
      subtext: 'Well respond within 24 hours',
      action: 'mailto:info@dentalcare.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Dental Street',
      subtext: 'City, State 12345',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Emergency',
      details: '24/7 Available',
      subtext: 'Call for urgent dental needs',
      action: 'tel:5551234567'
    }
  ];

  const services = [
    'General Consultation',
    'Teeth Cleaning',
    'Cosmetic Dentistry',
    'Oral Surgery',
    'Emergency Care',
    'Dental Implants',
    'Other'
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today to book your appointment or learn more about our services. 
            We're here to help you achieve your best smile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Book Your Appointment
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll contact you to schedule your visit at a convenient time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Service and Date */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
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
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your dental concerns or questions..."
                />
              </div>

              {/* Emergency Checkbox */}
              <div className="flex items-center space-x-3 bg-red-50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  id="isEmergency"
                  name="isEmergency"
                  checked={formData.isEmergency}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="isEmergency" className="text-sm text-red-700">
                  This is a dental emergency (we'll contact you immediately)
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                {isSubmitted ? (
                  <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>Thank you! We'll contact you soon.</span>
                  </div>
                ) : (
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Appointment Request
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                We're here to help with all your dental needs. Reach out through any of these convenient methods.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.action}
                    className="card hover:transform hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-primary-500 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.subtext}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-500" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between text-red-600">
                    <span>Emergency Care</span>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive map will be embedded here</p>
                <p className="text-sm text-gray-500 mt-1">123 Dental Street, City, State 12345</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button variant="secondary" className="w-full">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Online
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="h-5 w-5 mr-2" />
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};