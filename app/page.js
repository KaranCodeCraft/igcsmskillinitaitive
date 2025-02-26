"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Count from "@/components/Count";
import SectorReport from "@/components/Report";
import Marquee from "react-fast-marquee";
import CampaignMarquee from "@/components/Campaign";
import Footer from "@/components/Footer";

const newsItems = [
  "The Union Cabinet approved the extension of the Skill India Programme (SIP) till 2026. The program will receive an outlay of ₹8,800 crore from 2022-23 to 2025-26.",
  "The SIDH offers online courses, basic and advanced training, and a toolkit incentive",
  "The PM-NAPS helps people transition from education to work by providing industry-specific skills",
  "The PMKVY 4.0 is a key component of the Skill India Programme",
];

const images = [
  "https://ardorcomm-media.com/wp-content/uploads/2023/09/News-on-Edu-15th-Sept-2023.webp",
  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201609/skill-development-school-647_091216105251.jpg?VersionId=fLcVcx0O2.EkBA_GB8NJ8z9u44jXWYmD&size=690:388",
  "https://i.ytimg.com/vi/qjAXFg56PRw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQjo3wfCuLgSe8jNiNlUxCyLocFQ",
];

const logos = [
  "https://www.ibef.org/assets/images/digital-india.png",
  "https://www.ibef.org/assets/images/gem.png",
  "https://www.ibef.org/assets/images/india-govt.png",
  "https://www.ibef.org/assets/images/swatch-bharat.png",
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section
        className="bg-gray-200 p-4 py-16"
        style={{
          backgroundImage:
            "url('https://www.ibef.org/assets/images/newheroback.jpg')",
        }}
      >
        <div className="container mx-auto grid md:grid-cols-3 gap-4">
          {/* News Section (Static) */}
          <div className="bg-gray-700 text-white p-4 rounded-md h-96 flex flex-col">
            <h2 className="text-xl font-semibold flex items-center border-l-4 border-orange-500 pl-2">
              NEWS{" "}
              <span className="text-gray-400 text-sm ml-2">(25 FEB 25)</span>
            </h2>
            {/* Static News List with manual scrolling */}
            <div className="h-80 overflow-y-hidden mt-3 space-y-3">
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="bg-white text-black p-2 rounded-md text-sm"
                >
                  {news}
                </div>
              ))}
            </div>
            <button className="hover:text-white hover:bg-orange-500 transition-colors duration-300 mt-3 bg-white text-black px-4 py-2 rounded-md flex w-1/3 items-center justify-center">
              MORE <ChevronRight className="ml-2" size={16} />
            </button>
          </div>

          {/* Image Slider Section */}
          <div className="col-span-2 relative overflow-hidden rounded-md">
            <motion.div
              key={currentIndex}
              className="w-full h-64 md:h-96 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[currentIndex]}
                alt="Banner"
                className="w-full h-full object-contain rounded-md"
              />
            </motion.div>
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
      <div className="bg-green-600 text-white p-2 px-4 md:px-20">
        <Marquee>
          The Union Cabinet on Friday approved continuation and restructuring of the ‘Skill India Programme (SIP)’ till 2026 with an outlay of Rs 8,800 crore from the period of 2022-23 to 2025-26.
 
Three components — Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY 4.0), Pradhan Mantri National Apprenticeship Promotion Scheme (PM-NAPS) and the Jan Shikshan Sansthan (JSS) scheme — are now combined under the composite central sector scheme, the SIP. 
 
“These initiatives aim to provide structured skill development, on-the-job training (OJT), and community-based learning, ensuring that both urban and rural populations, including marginalised communities, have access to high-quality vocational education,” said the Union Cabinet in a statement.  
        </Marquee>
      </div>
      <Count />
      <SectorReport />
      <CampaignMarquee />
      <div className="relative bg-gray-100 py-14 overflow-hidden">
        <Marquee
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-48 h-24 flex-shrink-0 bg-white shadow-lg rounded-lg p-2 mx-4"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <Footer/>
    </>
  );
}
