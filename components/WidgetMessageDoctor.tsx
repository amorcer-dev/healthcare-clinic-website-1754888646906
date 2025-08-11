import React from 'react';

interface WidgetMessageDoctorProps {
  title?: string;
  subheading?: string;
  description?: string;
  isDarkMode?: boolean;
  onMessageDoctor?: () => void;
  className?: string;
}

export const WidgetMessageDoctor: React.FC<WidgetMessageDoctorProps> = ({
  title = "Message Doctor",
  subheading = "Have a quick question?",
  description = "Send me a secure message about your health concerns, medication questions, or any other medical inquiries. I'll respond within 24 hours.",
  isDarkMode = false,
  onMessageDoctor,
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
            src="/Storefront/Doctor Widget/Message Doctor/Message.svg" 
            alt="Message Doctor" 
            className="w-5 h-5 mr-2"
          />
          <h3 className="text-white font-sans text-xl font-bold">
            {title}
          </h3>
        </div>
        <img 
          src="/Storefront/Doctor Widget/Message Doctor/Vector.svg" 
          alt="Message" 
          className="w-10 h-10"
        />
      </div>

      {/* Subheading */}
      <h4 className="text-white font-sans text-base font-bold mb-2">
        {subheading}
      </h4>

      {/* Description */}
      <p className="text-white/80 font-sans text-sm mb-6">
        {description}
      </p>

      {/* Message Doctor Button */}
      <div className="w-full">
        <button
          onClick={onMessageDoctor}
          className="w-full bg-white text-teal-800 font-sans font-semibold py-3 px-6 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
        >
          Message Doctor
        </button>
      </div>
    </div>
  );
}; 