// src/app/components/WhatsAppFloat.tsx
"use client";

import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true); // New state for CTA buttons visibility

  const whatsappNumber = "916290939189";
  const whatsappMessage = "Hi Doctor, I want to book an appointment. Please let me know your available slots.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      // Check footer proximity
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const nearFooter = footerRect.top < windowHeight + 150;
        setIsNearFooter(nearFooter);
      }

      // Check if book appointment buttons are visible
      // Look for CTA buttons in hero section (you can adjust these selectors based on your hero component)
      const heroCtaButtons = document.querySelector('#home .flex.flex-col.sm\\:flex-row.gap-3'); // CTA buttons container
      if (heroCtaButtons) {
        const ctaRect = heroCtaButtons.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If CTA buttons are visible (with some buffer), hide the WhatsApp button
        const ctaVisible = ctaRect.bottom > 100 && ctaRect.top < windowHeight - 100;
        setIsInHeroSection(ctaVisible);
      } else {
        // Fallback: check for any element with book appointment text
        const bookButtons = document.querySelectorAll('a[href*="wa.me"], button');
        let ctaVisible = false;
        
        bookButtons.forEach(button => {
          if (button.textContent?.toLowerCase().includes('book appointment') || 
              button.textContent?.toLowerCase().includes('book') ||
              button.getAttribute('href')?.includes('wa.me')) {
            const buttonRect = button.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Check if this book appointment button is visible
            if (buttonRect.bottom > 100 && buttonRect.top < windowHeight - 100) {
              ctaVisible = true;
            }
          }
        });
        
        setIsInHeroSection(ctaVisible);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render the WhatsApp button if CTA buttons are visible
  if (isInHeroSection) {
    return null;
  }

  return (
    <>
      {/* WhatsApp Floating Button - Smart positioning */}
      <div className={`fixed right-4 z-50 transition-all duration-300 ${
        isNearFooter ? 'bottom-24' : 'bottom-4'
      }`}>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 w-56 sm:w-64 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 transform animate-pulse">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  Book Appointment
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  Chat with Dr. Rajat on WhatsApp for quick appointment booking!
                </p>
                <div className="flex items-center mt-2 text-xs text-green-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Online now
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
          </div>
        )}

        {/* Main Container - Logo upar, Text niche */}
        <div className="flex flex-col items-center space-y-2">
          
          {/* WhatsApp Logo Button */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(false)}
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-200"></div>

            {/* WhatsApp Icon - Custom SVG */}
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white group-hover:rotate-12 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </a>

          {/* Book Appointment Text - Niche */}
          <div className="text-center">
            <span className="text-xs sm:text-sm font-medium text-gray-700 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md border border-gray-200">
              Book Appointment
            </span>
          </div>
        </div>
      </div>

      {/* Simple CSS */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </>
  );
};