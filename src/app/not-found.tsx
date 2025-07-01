// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Phone, Calendar } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Dr. Smith</h1>
            <p className="text-sm text-gray-600">Dental Care & Oral Surgery</p>
          </div>
        </div>

        {/* 404 Content */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-500 mb-4">404</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            The page may have been moved, deleted, or you may have mistyped the URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Quick Links
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href="/services"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900 mb-1">Our Services</h4>
              <p className="text-sm text-gray-600">Explore our dental treatments</p>
            </Link>
            <Link 
              href="/about"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900 mb-1">About Us</h4>
              <p className="text-sm text-gray-600">Learn about our practice</p>
            </Link>
            <Link 
              href="/appointment"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <Calendar className="h-5 w-5 text-blue-500 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Book Appointment</h4>
              <p className="text-sm text-gray-600">Schedule your visit</p>
            </Link>
            <Link 
              href="/contact"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <Phone className="h-5 w-5 text-blue-500 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Contact Us</h4>
              <p className="text-sm text-gray-600">Get in touch with us</p>
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 font-medium">
            Dental Emergency? Call us at 
            <a href="tel:5551234567" className="underline ml-1">(555) 123-4567</a>
          </p>
          <p className="text-red-600 text-sm mt-1">Available 24/7 for urgent dental care</p>
        </div>
      </div>
    </div>
  );
}