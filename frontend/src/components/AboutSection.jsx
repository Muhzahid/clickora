import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../public/pixel.jpg"; // 👈 Add your background image here

const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text Section */}
      <motion.div
        className="relative z-10 max-w-3xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold border-l-4 mb-6 border-green-500 pl-4 inline-block">
          About  <span className="text-green-400">CLICKORA</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto">
          Redefining the future of technology through innovation, integrity, and excellence,
          CLICKORA empowers businesses with transformative digital solutions that drive
          growth and efficiency. Guided by a passion for innovation and a commitment to
          quality, we deliver results that exceed expectations and set new industry standards.
        </p>

        <div className="flex justify-center items-center gap-10 flex-wrap">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-400">150+</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Projects Delivered
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-400">25+</h3>
            <p className="text-sm sm:text-base text-gray-300">Team Members</p>
          </div>
        </div>
      </motion.div>
    </section>


  );
};

export default AboutSection;
