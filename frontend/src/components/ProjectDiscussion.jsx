import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectDiscussion = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-green-100 py-24 px-6 text-center text-white overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/project.png')] bg-cover bg-center opacity-10"></div>
      {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div> */}

      {/* Main Content */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900 "
        >
          Let’s Discuss{" "}
          <span className="text-[#1c5a3bff]">Your Project</span>
        </motion.h2>

        <motion.p
          variants={fadeIn(0.2)}
          className="text-gray-700 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to take your business to the next level? Let’s collaborate to
          build digital experiences that inspire, engage, and deliver results.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={fadeIn(0.4)}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            {
              icon: <FaPhoneAlt />,
              text: "+92 (304) 153-6470",
            },
            {
              icon: <FaEnvelope />,
              text: "clickmarketing@gmail.com",
            },
            {
              icon: <FaClock />,
              text: "24/7 Support",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-3 bg-[#1c5a3bff] backdrop-blur-md px-5 py-3 rounded-full shadow-lg transition"
            >
              <span className="text-white text-lg">{item.icon}</span>
              <span className="text-gray-100 font-medium ">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeIn(0.6)}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#1c5a3bff] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 border-[#1c5a3bff] text-[#1c5a3bff] font-semibold px-10 py-4 rounded-full hover:bg-[#1c5a3bff] hover:text-white transition-all duration-300"
          >
            Email Us Directly
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative Glow Circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-green-400/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-300/20 blur-3xl rounded-full"></div>
    </motion.section>
  );
};

export default ProjectDiscussion;
