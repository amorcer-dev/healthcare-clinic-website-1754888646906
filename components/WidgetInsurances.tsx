"use client";

import React from 'react';

interface InsuranceItem {
  name: string;
  logo: string;
}

interface PaymentOption {
  name: string;
}

interface InsuranceQuestions {
  description: string;
  phone: string;
  email: string;
  hours: string;
}

interface WidgetInsurancesProps {
  selectedInsurances?: InsuranceItem[];
  paymentOptions?: PaymentOption[];
  insuranceQuestions?: InsuranceQuestions;
  isDarkMode?: boolean;
  className?: string;
}

export const WidgetInsurances: React.FC<WidgetInsurancesProps> = ({
  selectedInsurances = [
    { name: "Aetna", logo: "/Storefront/Doctor Widget/Insurances/aetna.svg" },
    { name: "Cigna", logo: "/Storefront/Doctor Widget/Insurances/cigna.svg" },
    { name: "Humana", logo: "/Storefront/Doctor Widget/Insurances/humana.svg" },
    { name: "Empire Life", logo: "/Storefront/Doctor Widget/Insurances/empirelife.svg" }
  ],
  paymentOptions = [
    { name: "Insurance copay/deductible" },
    { name: "Health Savings Account (HSA)" },
    { name: "Flexible Spending Account (FSA)" },
    { name: "Cash/Credit card" },
    { name: "Payment plans available" }
  ],
  insuranceQuestions = {
    description: "Our billing team is available to help with insurance questions and payment arrangements.",
    phone: "(555) 123-4567",
    email: "billing@drmitchell.com",
    hours: "Mon-Fri 9AM-5PM EST"
  },
  isDarkMode = false,
  className = ""
}) => {
  return (
    <div className={`w-[360px] rounded-2xl p-8 relative ${isDarkMode ? 'bg-[#20262F]' : 'bg-white'} ${className}`} 
         style={{
           border: '2px solid #029A80'
         }}>
      
      {/* Header */}
      <div className="flex items-center mb-6">
        <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
          Insurances
        </h3>
      </div>

      {/* Accepted Insurances */}
      <div className="mb-6">
        <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-semibold mb-4`}>
          Accepted Insurances
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {selectedInsurances.slice(0, 4).map((insurance, index) => (
            <div key={index} className="flex items-center justify-center p-3 rounded-lg" 
                 style={{ backgroundColor: isDarkMode ? '#FFFFFF' : '#F5F5F5' }}>
              <img 
                src={insurance.logo}
                alt={insurance.name} 
                className="h-6 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fading Horizontal Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>

      {/* Payment Options */}
      <div className="mb-6">
        <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-semibold mb-4`}>
          Payment Options
        </h4>
        <div className="space-y-2">
          {paymentOptions.slice(0, 10).map((option, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-sm`}>
                {option.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Questions */}
      <div className="p-4 rounded-lg" 
           style={{
             backgroundColor: isDarkMode ? '#323232' : '#F5F5F5'
           }}>
        <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-base font-bold mb-2`}>
          Insurance Questions?
        </h4>
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-sm mb-4`}>
          {insuranceQuestions.description}
        </p>
        <div className="space-y-1 text-sm">
          <div className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
            <span className="font-medium">Phone:</span> {insuranceQuestions.phone}
          </div>
          <div className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
            <span className="font-medium">Email:</span> {insuranceQuestions.email}
          </div>
          <div className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
            <span className="font-medium">Hours:</span> {insuranceQuestions.hours}
          </div>
        </div>
      </div>
    </div>
  );
}; 