import React from 'react';
import { WidgetProfile } from '../components/WidgetProfile'
import { WidgetVideo } from '../components/WidgetVideo'
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'
import { WidgetServicesAndConditions } from '../components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '../components/WidgetTestimonialCarousel'
import { WidgetPricesAndPackages } from '../components/WidgetPricesAndPackages'
import { WidgetBookConsultation } from '../components/WidgetBookConsultation'
import { WidgetInsurances } from '../components/WidgetInsurances'
import { WidgetMessageDoctor } from '../components/WidgetMessageDoctor'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-white">
      {/* Mobile Layout - Single Column (Centered) */}
      <div className="custom:hidden flex flex-col items-center space-y-6">
      <WidgetProfile
        doctorName="Dr. Sarah Smith"
        specialty="Family Medicine"
        patients="2,500+"
        experience="10+ years"
        rating="4.9"
        imageSrc="/Storefront/Doctor Widget/DoctorImage.png"
        profileImage=""
        isDarkMode={false}
        className=""
      />
      <WidgetVideo
        title="Meet Dr. Bellamy"
        videoUrl=""
        isDarkMode={false}
        className=""
      />
      <WidgetAboutDoctor
        aboutText="Board-certified family physician with 10+ years of experience in telehealth and preventive care."
        education={[
        {
                "college": "Harvard Medical School",
                "activity": "MD"
        },
        {
                "college": "Johns Hopkins University",
                "activity": "Residency"
        }
]}
        hospitals={[
        "Massachusetts General Hospital",
        "Johns Hopkins Hospital"
]}
        certificates={[
        "Board Certified Family Medicine",
        "Telemedicine Certification"
]}
        languages={[
        "English",
        "Spanish",
        "French"
]}
        isDarkMode={false}
        className=""
      />
      <WidgetServicesAndConditions
        specializedServices={[
        {
                "name": "Annual Physicals",
                "icon": "🏥"
        },
        {
                "name": "Chronic Disease Management",
                "icon": "🏥"
        },
        {
                "name": "Mental Health",
                "icon": "🏥"
        }
]}
        conditions={[
        "Diabetes",
        "Hypertension",
        "Depression",
        "Anxiety"
]}
        isDarkMode={false}
        className=""
      />
      <WidgetTestimonialCarousel
        testimonials={[
        {
                "author": "Sarah J.",
                "age": 35,
                "condition": "Diabetes Management",
                "rating": 5,
                "quote": "Dr. Smith is amazing! Very thorough and caring."
        },
        {
                "author": "Mike C.",
                "age": 35,
                "condition": "Annual Physical",
                "rating": 5,
                "quote": "Convenient telehealth visits that actually work."
        },
        {
                "author": "Emily D.",
                "age": 35,
                "condition": "Mental Health",
                "rating": 5,
                "quote": "Professional, knowledgeable, and easy to talk to."
        }
]}
        overallRating={4.9}
        totalReviews={127}
        recommendedRate={98}
        isDarkMode={false}
        className=""
      />
      <WidgetPricesAndPackages
        consultationPricing={[
        {
                "name": "Initial Consultation",
                "price": "$120"
        },
        {
                "name": "Follow-Up Consultation",
                "price": "$90"
        },
        {
                "name": "Message Consultation",
                "price": "$25"
        }
]}
        packages={[
        {
                "name": "Diabetes Management",
                "price": "$250",
                "features": [
                        "2 visits free",
                        "Chat access 24x7",
                        "Diabetes Management"
                ]
        },
        {
                "name": "Chronic Care Management",
                "price": "$300",
                "features": [
                        "Monthly check-ins",
                        "Medication management",
                        "Lifestyle coaching"
                ]
        }
]}
        isDarkMode={false}
        className=""
      />
      <WidgetBookConsultation
        title="Book Consultation"
        zoomText="zoom"
        subheading="Ready to take the next step in your health journey?"
        description="Schedule a personal consultation with me to discuss your concerns, get expert advice, and create a care plan tailored just for you."
        features={[
        "Convenient virtual or in-person visits",
        "All questions welcome, no referral needed",
        "Easy, secure online booking"
]}
        imageSrc="/Storefront/Doctor Widget/Book Consultation/AbstractGradient.png"
        consultationImage=""
        className=""
      />
      <WidgetInsurances
        selectedInsurances={[
        {
                "name": "Aetna",
                "logo": "/Storefront/Doctor Widget/Insurances/aetna.svg"
        },
        {
                "name": "Cigna",
                "logo": "/Storefront/Doctor Widget/Insurances/cigna.svg"
        },
        {
                "name": "Humana",
                "logo": "/Storefront/Doctor Widget/Insurances/humana.svg"
        },
        {
                "name": "Empire Life",
                "logo": "/Storefront/Doctor Widget/Insurances/empirelife.svg"
        }
]}
        paymentOptions={[
        {
                "name": "Insurance copay/deductible"
        },
        {
                "name": "Health Savings Account (HSA)"
        },
        {
                "name": "Flexible Spending Account (FSA)"
        },
        {
                "name": "Cash/Credit card"
        },
        {
                "name": "Payment plans available"
        }
]}
        insuranceQuestions={{
        "description": "Our billing team is available to help with insurance questions and payment arrangements.",
        "phone": "(555) 123-4567",
        "email": "billing@drmitchell.com",
        "hours": "Mon-Fri 9AM-5PM EST"
}}
        isDarkMode={false}
        className=""
      />
      <WidgetMessageDoctor
        title="Message Doctor"
        subheading="Have a quick question?"
        description="Send me a secure message about your health concerns, medication questions, or any other medical inquiries. I'll respond within 24 hours."
        className=""
      />
      </div>
      
      {/* Desktop Layout - 3 Column Grid with Sticky Profile */}
      <div className="hidden custom:grid custom:grid-cols-3 custom:gap-6 custom:max-w-7xl custom:mx-auto">
        {/* Column 1: Sticky Profile Widget */}
        <div className="custom:sticky custom:top-8 custom:self-start space-y-6">
      <WidgetProfile
        doctorName="Dr. Sarah Smith"
        specialty="Family Medicine"
        patients="2,500+"
        experience="10+ years"
        rating="4.9"
        imageSrc="/Storefront/Doctor Widget/DoctorImage.png"
        profileImage=""
        isDarkMode={false}
        className=""
      />
        </div>
        
        {/* Column 2: First 4 widgets */}
        <div className="space-y-6">
      <WidgetVideo
        title="Meet Dr. Bellamy"
        videoUrl=""
        isDarkMode={false}
        className=""
      />
      <WidgetAboutDoctor
        aboutText="Board-certified family physician with 10+ years of experience in telehealth and preventive care."
        education={[
        {
                "college": "Harvard Medical School",
                "activity": "MD"
        },
        {
                "college": "Johns Hopkins University",
                "activity": "Residency"
        }
]}
        hospitals={[
        "Massachusetts General Hospital",
        "Johns Hopkins Hospital"
]}
        certificates={[
        "Board Certified Family Medicine",
        "Telemedicine Certification"
]}
        languages={[
        "English",
        "Spanish",
        "French"
]}
        isDarkMode={false}
        className=""
      />
      <WidgetServicesAndConditions
        specializedServices={[
        {
                "name": "Annual Physicals",
                "icon": "🏥"
        },
        {
                "name": "Chronic Disease Management",
                "icon": "🏥"
        },
        {
                "name": "Mental Health",
                "icon": "🏥"
        }
]}
        conditions={[
        "Diabetes",
        "Hypertension",
        "Depression",
        "Anxiety"
]}
        isDarkMode={false}
        className=""
      />
      <WidgetTestimonialCarousel
        testimonials={[
        {
                "author": "Sarah J.",
                "age": 35,
                "condition": "Diabetes Management",
                "rating": 5,
                "quote": "Dr. Smith is amazing! Very thorough and caring."
        },
        {
                "author": "Mike C.",
                "age": 35,
                "condition": "Annual Physical",
                "rating": 5,
                "quote": "Convenient telehealth visits that actually work."
        },
        {
                "author": "Emily D.",
                "age": 35,
                "condition": "Mental Health",
                "rating": 5,
                "quote": "Professional, knowledgeable, and easy to talk to."
        }
]}
        overallRating={4.9}
        totalReviews={127}
        recommendedRate={98}
        isDarkMode={false}
        className=""
      />
        </div>
        
        {/* Column 3: Next 4 widgets */}
        <div className="space-y-6">
      <WidgetPricesAndPackages
        consultationPricing={[
        {
                "name": "Initial Consultation",
                "price": "$120"
        },
        {
                "name": "Follow-Up Consultation",
                "price": "$90"
        },
        {
                "name": "Message Consultation",
                "price": "$25"
        }
]}
        packages={[
        {
                "name": "Diabetes Management",
                "price": "$250",
                "features": [
                        "2 visits free",
                        "Chat access 24x7",
                        "Diabetes Management"
                ]
        },
        {
                "name": "Chronic Care Management",
                "price": "$300",
                "features": [
                        "Monthly check-ins",
                        "Medication management",
                        "Lifestyle coaching"
                ]
        }
]}
        isDarkMode={false}
        className=""
      />
      <WidgetBookConsultation
        title="Book Consultation"
        zoomText="zoom"
        subheading="Ready to take the next step in your health journey?"
        description="Schedule a personal consultation with me to discuss your concerns, get expert advice, and create a care plan tailored just for you."
        features={[
        "Convenient virtual or in-person visits",
        "All questions welcome, no referral needed",
        "Easy, secure online booking"
]}
        imageSrc="/Storefront/Doctor Widget/Book Consultation/AbstractGradient.png"
        consultationImage=""
        className=""
      />
      <WidgetInsurances
        selectedInsurances={[
        {
                "name": "Aetna",
                "logo": "/Storefront/Doctor Widget/Insurances/aetna.svg"
        },
        {
                "name": "Cigna",
                "logo": "/Storefront/Doctor Widget/Insurances/cigna.svg"
        },
        {
                "name": "Humana",
                "logo": "/Storefront/Doctor Widget/Insurances/humana.svg"
        },
        {
                "name": "Empire Life",
                "logo": "/Storefront/Doctor Widget/Insurances/empirelife.svg"
        }
]}
        paymentOptions={[
        {
                "name": "Insurance copay/deductible"
        },
        {
                "name": "Health Savings Account (HSA)"
        },
        {
                "name": "Flexible Spending Account (FSA)"
        },
        {
                "name": "Cash/Credit card"
        },
        {
                "name": "Payment plans available"
        }
]}
        insuranceQuestions={{
        "description": "Our billing team is available to help with insurance questions and payment arrangements.",
        "phone": "(555) 123-4567",
        "email": "billing@drmitchell.com",
        "hours": "Mon-Fri 9AM-5PM EST"
}}
        isDarkMode={false}
        className=""
      />
      <WidgetMessageDoctor
        title="Message Doctor"
        subheading="Have a quick question?"
        description="Send me a secure message about your health concerns, medication questions, or any other medical inquiries. I'll respond within 24 hours."
        className=""
      />
        </div>
      </div>
      

    </main>
  );
}