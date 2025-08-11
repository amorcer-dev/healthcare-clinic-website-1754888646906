"use client";

import React, { useState, useEffect } from 'react';
import { WidgetTestimonialCard } from "./WidgetTestimonialCard";

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

interface WidgetTestimonialCarouselProps {
  testimonials?: Testimonial[];
  overallRating?: number;
  totalReviews?: number;
  recommendedRate?: number;
  isDarkMode?: boolean;
  className?: string;
}

const defaultData = {
  testimonials: [
    {
      quote: "Dr. Bellamy was incredibly thorough and caring.",
      author: "Sarah Johnson",
      age: 45,
      condition: "Diabetes",
      rating: 5
    },
    {
      quote: "The best doctor I've ever had.",
      author: "Michael Chen",
      age: 52,
      condition: "Heart Disease",
      rating: 5
    },
    {
      quote: "Professional and genuinely caring.",
      author: "Emily Rodriguez",
      age: 38,
      condition: "Lung Disease",
      rating: 5
    }
  ],
  overallRating: 4.9,
  totalReviews: 127,
  recommendedRate: 98
};

export const WidgetTestimonialCarousel: React.FC<WidgetTestimonialCarouselProps> = ({
  testimonials,
  overallRating,
  totalReviews,
  recommendedRate,
  isDarkMode = false,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedDoctorData, setSavedDoctorData] = useState<DoctorData | null>(null);

  useEffect(() => {
    const loadData = () => {
      try {
        const saved = localStorage.getItem('doctorData');
        if (saved) {
          const parsedData = JSON.parse(saved);
          setSavedDoctorData(parsedData);
        }
      } catch (error) {
        console.error('Error loading doctor data:', error);
      }
    };

    loadData();
    const interval = setInterval(loadData, 1000);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'doctorData' && e.newValue) {
        try {
          setSavedDoctorData(JSON.parse(e.newValue));
        } catch (error) {
          console.error('Error parsing updated doctor data:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const finalData = {
    testimonials: savedDoctorData?.testimonials || testimonials || defaultData.testimonials,
    overallRating: savedDoctorData?.overallRating || overallRating || defaultData.overallRating,
    totalReviews: savedDoctorData?.totalReviews || totalReviews || defaultData.totalReviews,
    recommendedRate: savedDoctorData?.recommendedRate || recommendedRate || defaultData.recommendedRate
  };

  useEffect(() => {
    if (currentIndex >= finalData.testimonials.length) {
      setCurrentIndex(0);
    }
  }, [finalData.testimonials.length, currentIndex]);

  return (
    <div
      className={`w-[360px] rounded-2xl p-8 relative ${isDarkMode ? 'bg-[#20262F]' : 'bg-white'} ${className}`}
      style={{ border: '2px solid #029A80' }}
    >
      {/* Title */}
      <div className="flex items-center mb-6">
        <img
          src="/Storefront/Doctor Widget/Testimonials/Star1.svg"
          alt="Star"
          className="w-5 h-5 mr-2"
        />
        <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
          Patient Testimonials
        </h3>
      </div>

      {/* Testimonial Card */}
      <div className="mb-8">
        <WidgetTestimonialCard
          testimonialIndex={currentIndex}
          isDarkMode={isDarkMode}
          {...finalData.testimonials[currentIndex]}
        />

        {finalData.testimonials.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {finalData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Three-Column Stats */}
      <div className="grid grid-cols-3 gap-4 relative">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-bold`}>
              {finalData.overallRating}
            </p>
            <img
              src="/Storefront/Doctor Widget/Testimonials/Star2.svg"
              alt="Star"
              className="w-4 h-4 ml-1"
            />
          </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-xs`}>
            Overall Rating
          </p>
        </div>

        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2" />

        <div className="text-center">
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-sans text-lg font-bold mb-2`}>
            {finalData.totalReviews}
          </p>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-xs`}>
            Total Reviews
          </p>
        </div>

        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2" />

        <div className="text-center">
          <p className="text-[#00A085] font-sans text-lg font-bold mb-2">
            {finalData.recommendedRate}%
          </p>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-xs`}>
            Recommended Rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default WidgetTestimonialCarousel;
