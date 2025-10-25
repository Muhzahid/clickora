import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Digitizing from "../../public/Digitizing.png";
import Powered from "../../public/AI.jpeg";
import Banking from "../../public/banking.jpeg";
import Diagnostics from "../../public/Diagnostics.jpeg";
import Factories from "../../public/Factories.jpeg";
import Logistics from "../../public/Logistics.jpeg";
import Ecosystem from "../../public/Ecosystem.jpeg";
import SaaS from "../../public/sas.png";
import Learning from "../../public/Learning.png";

const industryData = {
  "AI/ML": [
    {
      title: "Digitizing Manufacturing Processes",
      desc: "A data aggregation, analytics and predictive maintenance application for Industry 4.0 readiness...",
      img: Digitizing,
    },
    {
      title: "AI-Powered Quality Control",
      desc: "Using machine learning models to detect defects and automate quality checks.",
      img: Powered,
    },
  ],
  Fintech: [
    {
      title: "Digital Banking Revolution",
      desc: "We build secure and scalable fintech solutions to empower global finance operations.",
      img: Banking,
    },
  ],
  Healthcare: [
    {
      title: "AI in Diagnostics",
      desc: "Predictive analysis and medical imaging solutions to improve patient outcomes.",
      img: Diagnostics,
    },
  ],
  Industrial: [
    {
      title: "Smart Factories",
      desc: "IoT-driven automation to optimize manufacturing and maintenance.",
      img: Factories,
    },
  ],
  "Supply Chain & Logistics": [
    {
      title: "Intelligent Fleet Tracking",
      desc: "AI-based route optimization and real-time analytics for global logistics.",
      img: Logistics,
    },
  ],
  IoT: [
    {
      title: "Connected Devices Ecosystem",
      desc: "IoT integration for smart cities, homes, and industries.",
      img: Ecosystem,
    },
  ],
  "Startup & SaaS": [
    {
      title: "Cloud SaaS Platforms",
      desc: "We empower startups with end-to-end SaaS solutions and scalable architecture.",
      img: SaaS,
    },
  ],
  EdTech: [
    {
      title: "Digital Learning Transformation",
      desc: "We create interactive, AI-enabled learning platforms for modern education.",
      img: Learning,
    },
  ],
};

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("AI/ML");
  const [slides, setSlides] = useState(industryData["AI/ML"]);

  useEffect(() => {
    setSlides(industryData[activeTab]);
  }, [activeTab]);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-10">
          Industries We Are Transforming Through Tech
        </h2>

        {/* Tabs (2 rows, 4 per row, equal width) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {Object.keys(industryData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full py-3 rounded font-medium border text-sm sm:text-base transition-all duration-300 ${
                activeTab === key
                  ? "bg-[#1c5a3bff] text-white border-[#1c5a3bff] shadow-md"
                  : "text-gray-700 border-[#1c5a3bff] hover:bg-[#1c5a3bff] hover:text-white"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="max-w-6xl mx-auto"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-2xl shadow-sm">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full md:w-1/2 h-64 object-cover rounded-2xl"
                />
                <div className="text-left p-4 md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{slide.desc}</p>
                  <button className="text-[#1c5a3bff] font-medium hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
