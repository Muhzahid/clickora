import React from "react";
import serviceImg from "../../public/back.png"; // 🖼️ use your image path

const ServicesSections = () => {
  return (
    <section className="relative bg-[#262E33] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold border-l-4 border-green-500 pl-4">
            Services
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Our software development company delivers corporate and consumer
            applications based on our profound understanding of technologies and
            the markets they operate in. With our professional mindset, we look
            beyond technology to offer viable solutions for your particular
            business context.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={serviceImg}
            alt="Services Illustration"
            className="w-[80%] max-w-md rounded-2xl border-4 border-green-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Decorative Wave Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.13,103.59,29.28,158,17.39,70-15.64,136.72-57.67,206-66.63,89.3-11.45,173.61,26.43,261,36,74.65,8.13,147.46-12.91,221-24,62.13-9.39,120.94-5.9,180,7.19V0Z"
            opacity=".25"
            className="fill-gray-500"
          ></path>
          <path
            d="M0,0V15.81C47.79,37.94,103.59,45.09,158,33.2c70-15.64,136.72-57.67,206-66.63,89.3-11.45,173.61,26.43,261,36,74.65,8.13,147.46-12.91,221-24,62.13-9.39,120.94-5.9,180,7.19V0Z"
            opacity=".5"
            className="fill-gray-400"
          ></path>
          <path
            d="M0,0V5.63C47.79,27.76,103.59,34.91,158,23.02c70-15.64,136.72-57.67,206-66.63,89.3-11.45,173.61,26.43,261,36,74.65,8.13,147.46-12.91,221-24,62.13-9.39,120.94-5.9,180,7.19V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesSections;
