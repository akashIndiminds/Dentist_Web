// src/app/components/WhatsAppFloat.tsx
"use client";

import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappNumber = "916290939189";
  const whatsappMessage = "Hi Doctor, I want to book an appointment. Please let me know your available slots.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section element
      const heroSection = document.querySelector('#home');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        
        // Show button when user scrolls past hero section (with some buffer)
        const shouldShow = heroBottom < window.innerHeight * 0.3; // Show when 70% of hero is scrolled past
        setIsVisible(shouldShow);
      }
    };

    // Check for mobile menu state
    const checkMobileMenu = () => {
      // Check if mobile menu is open by looking for the menu state
      const mobileMenu = document.querySelector('.lg\\:hidden.fixed.inset-x-0.bg-white');
      
      if (mobileMenu) {
        const isMenuVisible = !mobileMenu.classList.contains('-translate-y-full');
        setIsMobileMenuOpen(isMenuVisible);
      }
    };

    // Initial check
    handleScroll();
    checkMobileMenu();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    
    // Check for mobile menu changes with MutationObserver
    const observer = new MutationObserver(checkMobileMenu);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Don't show if mobile menu is open or if still in hero section
  const shouldHideButton = !isVisible || isMobileMenuOpen;

  return (
    <>
      {/* WhatsApp Floating Button - Smart visibility */}
      <div className={`fixed bottom-10 right-3 z-40 transition-all duration-500 transform ${
        shouldHideButton 
          ? 'translate-y-20 opacity-0 pointer-events-none scale-75' 
          : 'translate-y-0 opacity-100 pointer-events-auto scale-100'
      }`}>
        
        {/* Tooltip */}
        {showTooltip && !shouldHideButton && (
          <div className="absolute bottom-full right-0 mb-3 w-56 sm:w-64 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 transform animate-bounce-in">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  Quick Appointment
                </h4>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  Chat with Dr. Rajat on WhatsApp for instant booking!
                </p>
                <div className="flex items-center mt-2 text-xs text-green-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available now
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
          </div>
        )}

        {/* Main Container - Logo upar, Text niche */}
        <div className="flex flex-col items-center space-y-2 group">
          
          {/* WhatsApp Logo Button */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:rotate-3"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(false)}
          >
            {/* Ripple Effects */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-green-300 animate-ping opacity-15 animation-delay-200"></div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            {/* WhatsApp Icon - Custom SVG */}
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white group-hover:rotate-12 transition-transform duration-300 relative z-10 drop-shadow-sm"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </a>

          {/* Book Appointment Text - Niche */}
          <div className="text-center opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="text-xs sm:text-sm font-medium text-gray-700 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200 hover:border-green-200 transition-all duration-300">
              Book Appointment
            </span>
          </div>
        </div>


      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3) translateY(20px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) translateY(-10px);
            opacity: 0.8;
          }
          70% {
            transform: scale(0.9) translateY(0px);
            opacity: 0.9;
          }
          100% {
            transform: scale(1) translateY(0px);
            opacity: 1;
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }

        /* Enhanced breathing effect */
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .group:hover .relative {
          animation: breathe 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};