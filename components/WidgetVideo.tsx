"use client";

import React from 'react';

interface WidgetVideoProps {
  title?: string;
  videoUrl?: string;
  isDarkMode?: boolean;
  onPlay?: () => void;
  className?: string;
}

export const WidgetVideo: React.FC<WidgetVideoProps> = ({
  title = "Meet Dr. Bellamy",
  videoUrl,
  isDarkMode = false,
  onPlay,
  className = ""
}) => {
  return (
    <div className={`w-[360px] bg-gray-200 rounded-2xl overflow-hidden relative ${className}`}>
      {/* Video Container */}
      <div className="relative w-full h-48 bg-gray-300">
        {videoUrl ? (
          <video
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            controls
            preload="metadata"
          />
        ) : (
          <img
            src="/Storefront/Doctor Widget/Video/VideoImage.png"
            alt="Video preview"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        )}
        {/* Title in top-left corner */}
        <div className="absolute top-4 left-4 z-10">
          <h3 className="text-white font-sans font-bold text-lg">
            {title}
          </h3>
        </div>
        

      </div>
    </div>
  );
}; 

export default WidgetVideo;
