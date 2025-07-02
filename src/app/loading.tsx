// src/app/loading.tsx
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-2xl">D</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dr. Rajat Majumdar</h1>
            <p className="text-gray-600">Dental Care & Oral Surgery</p>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="inline-flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-lg text-gray-600 mb-2">Loading...</p>
        <p className="text-sm text-gray-500">Please wait while we prepare your content</p>
      </div>
    </div>
  );
}