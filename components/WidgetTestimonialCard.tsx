"use client";

import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  age: number;
  condition: string;
  rating: number;
}

interface ServiceItem {
  name: string;
  icon: string;
}

interface EducationItem {
  college: string;
  activity: string;
}

interface DoctorData {
  name: string;
  specialty: string;
  experience: string;
  patients: string;
  rating: string;
  photoUrl: string;
  aboutText: string;
  education: EducationItem[];
  hospitals: string[];
  certificates: string[];
  languages: string[];
  testimonials: Testimonial[];
  services: ServiceItem[];
  conditions: string[];
  videoTitle?: string;
  videoUrl?: string;
  overallRating?: number;
  totalReviews?: number;
  recommendedRate?: number;
}

interface WidgetTestimonialCardProps {
  quote?: string;
  author?: string;
  age?: number;
  condition?: string;
  rating?: number;
  testimonialIndex?: number;
  className?: string;
  isDarkMode?: boolean;
}

// Fallback data
const defaultData = {
  quote: "Dr. Bellamy was incredibly thorough and caring. He took the time to explain everything clearly and made me feel comfortable throughout the entire process.",
  author: "Sarah Johnson",
  age: 45,
  condition: "Diabetes Management",
  rating: 5,
};

export const WidgetTestimonialCard: React.FC<WidgetTestimonialCardProps> = ({
  quote,
  author,
  age,
  condition,
  rating,
  testimonialIndex = 0,
  className = "",
  isDarkMode = false
}) => {
  const [savedDoctorData, setSavedDoctorData] = useState<DoctorData | null>(null);

  useEffect(() => {
    const loadData = () => {
      try {
        const saved = localStorage.getItem('doctorData');
        if (saved) {
          const parsed = JSON.parse(saved);
          setSavedDoctorData(parsed);
        }
      } catch (error) {
        console.error('Error loading doctor data:', error);
      }
    };

    loadData();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'doctorData' && e.newValue) {
        try {
          setSavedDoctorData(JSON.parse(e.newValue));
        } catch (err) {
          console.error('Error parsing doctor data from storage:', err);
        }
      }
    };

    const interval = setInterval(loadData, 1000);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const finalData = (() => {
    if (savedDoctorData?.testimonials?.[testimonialIndex]) {
      return savedDoctorData.testimonials[testimonialIndex];
    }
    return {
      quote: quote || defaultData.quote,
      author: author || defaultData.author,
      age: age || defaultData.age,
      condition: condition || defaultData.condition,
      rating: rating || defaultData.rating,
    };
  })();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-[#1C393B]' : 'bg-[#E0F3F0]'} ${className}`}>
      {/* Quote */}
      <div className="mb-6" style={{ maxHeight: '115px', overflow: 'hidden' }}>
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-sm font-medium leading-relaxed`}>
          "{finalData.quote}"
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold text-sm`}>
            {finalData.author}
          </span>
          <span className={`${isDarkMode ? 'text-white/80' : 'text-gray-600'} text-xs`}>
            {finalData.age} • {finalData.condition}
          </span>
        </div>

        <div className="flex justify-end items-start">
          <div className="flex items-center">
            <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-sm font-semibold`}>
              {finalData.rating.toFixed(1)}
            </span>
            <img
              src="/Storefront/Doctor Widget/Testimonials/Star2.svg"
              alt="Star"
              className="w-3 h-3 ml-1"
            />
          </div>
        </div>
      </div>

      {/* Debug Info */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-2 bg-white/50 rounded text-xs">
          <p>Data source: {savedDoctorData?.testimonials ? 'localStorage' : 'defaults'}</p>
          <p>Testimonial index: {testimonialIndex}</p>
          <p>Total testimonials: {savedDoctorData?.testimonials?.length || 0}</p>
          <p>Author: "{finalData.author}"</p>
        </div>
      )}
    </div>
  );
};

export default WidgetTestimonialCard;
