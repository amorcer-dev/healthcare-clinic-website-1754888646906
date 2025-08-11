"use client";

import React from 'react';

interface WidgetBookConsultationProps {
  title?: string;
  zoomText?: string;
  subheading?: string;
  description?: string;
  features?: string[];
  imageSrc?: string;
  onBookAppointment?: () => void;
  className?: string;
}

export const WidgetBookConsultation: React.FC<WidgetBookConsultationProps> = ({
  title = "Book Consultation",
  zoomText = "zoom",
  subheading = "Ready to take the next step in your health journey?",
  description = "Schedule a personal consultation with me to discuss your concerns, get expert advice, and create a care plan tailored just for you.",
  features = [
    "Convenient virtual or in-person visits",
    "All questions welcome, no referral needed",
    "Easy, secure online booking"
  ],
  imageSrc = "/Storefront/Doctor Widget/Book Consultation/AbstractGradient.png",
  onBookAppointment,
  className = ""
}) => {
  return (
    <div className={`w-[360px] rounded-2xl p-8 relative ${className}`} 
         style={{
           background: 'linear-gradient(135deg, #01715E 0%, #029F85 100%)'
         }}>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img 
            src="/Storefront/Doctor Widget/Book Consultation/BookConsultation.svg" 
            alt="Book Consultation" 
            className="w-5 h-5 mr-2"
          />
          <h3 className="text-white font-sans text-xl font-bold">
            {title}
          </h3>
        </div>
        <img 
          src="/Storefront/Doctor Widget/Book Consultation/logos_zoom.svg" 
          alt="Zoom" 
          className="w-10 h-10"
        />
      </div>

      {/* Subheading */}
      <h4 className="text-white font-sans text-base font-bold mb-2">
        {subheading}
      </h4>

      {/* Description */}
      <p className="text-white/80 font-sans text-sm mb-4">
        {description}
      </p>

      {/* Features List */}
      <div className="mb-6">
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
              <span className="text-white/80 font-sans text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Abstract Visual Element */}
      <div className="mb-6">
        <img
          src="/Storefront/Doctor Widget/Video/VideoImage.png"
          alt="Abstract gradient"
          className="w-full h-16 rounded-lg object-cover"
        />
      </div>

      {/* Book Appointment Button */}
      <div className="w-full">
        <button
          onClick={onBookAppointment}
          className="w-full bg-white text-teal-800 font-sans font-semibold py-3 px-6 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}; 