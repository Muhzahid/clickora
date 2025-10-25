"use client";

import React from "react";
import { motion } from "framer-motion";
import linked from "../../public/linking.png";
import {
  FaClock,
  FaUsers,
  FaHeadset,
  FaMedal
} from "react-icons/fa";
import AboutSection from "../components/AboutSection";
import CoreValues from "../components/CoreValues";
import ProjectDiscussion from "../components/ProjectDiscussion";
import Footer from "../components/Footer";

const About = () => {
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    { icon: <FaMedal className="text-[#1c5a3bff] text-xl" />, title: "Industry Expertise", desc: "Years of proven experience across industries." },
    { icon: <FaUsers className="text-[#1c5a3bff] text-xl" />, title: "Dedicated Team", desc: "Skilled professionals committed to success." },
    { icon: <FaClock className="text-[#1c5a3bff] text-xl" />, title: "Timely Delivery", desc: "On-time completion with quality assurance." },
    { icon: <FaHeadset className="text-[#1c5a3bff] text-xl" />, title: "24/7 Support", desc: "Always here with round-the-clock help." },
  ];

  return (
    <>
      <AboutSection />
      <CoreValues />

      {/* Mission, Vision & Core Values Section */}
      <div className="px-4 sm:px-8 md:px-20 py-16 space-y-20 bg-[#f8f8f8]">
        <section className="space-y-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3d4a50]">
             Our Values
            </h2>
            <div className="w-32 sm:w-36 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-500 mt-6 max-w-3xl mx-auto">
              Our journey is guided by integrity, innovation, and impact — values that define who
              we are and how we work. Every project we undertake is a step toward creating a
              sustainable digital ecosystem where businesses grow confidently in a rapidly
              evolving world.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-[90rem] mx-auto">
            {/* Mission */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <h3 className="text-2xl font-semibold text-[#62a87d] mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Our mission is to empower businesses with cutting-edge IT services
                and transformative digital solutions that drive sustainable growth.
                We blend creativity, technology, and forward-thinking innovation to
                solve real-world challenges and unlock new opportunities.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <h3 className="text-2xl font-semibold text-[#62a87d] mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Our vision is to be a globally recognized leader in IT services
                and digital transformation, setting benchmarks for innovation and
                customer success. We aim to create a future where technology
                connects people, empowers communities, and drives inclusive growth.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              variants={slideFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <h3 className="text-2xl font-semibold text-[#62a87d] mb-4 relative z-10">Our Core Values</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 relative z-10">
                <li>Integrity and transparency in every interaction</li>
                <li>Customer-first approach and long-term relationships</li>
                <li>Continuous learning and innovation culture</li>
                <li>Commitment to sustainability and inclusivity</li>
              </ul>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>

            {/* Our Goals */}
            <motion.div
              variants={slideFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <h3 className="text-2xl font-semibold text-[#62a87d] mb-4 relative z-10">Our Goals</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Our goal is to consistently deliver measurable results for clients
                through data-driven strategies and scalable technologies. We aspire
                to become the go-to IT partner for organizations aiming to digitally
                transform and lead their industries with confidence and purpose.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#62a87d] to-[#3c6e71] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white py-16 px-4 max-w-[98rem] mx-auto sm:px-10 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 overflow-hidden"
      >
        {/* Left Image */}
        <motion.div variants={fadeInLeft} className="w-full lg:w-1/2 max-w-3xl mx-auto">
          <motion.img
            src={linked}
            alt="Developers working"
            className="rounded-[10px] shadow-xl w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInRight} className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Why Choose <span className="text-green-600">CLICKORA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 leading-relaxed"
          >
            From strategic planning to execution, we ensure that our digital solutions
            align with your vision, enhance performance, and create measurable impact
            in every aspect of your business.
          </motion.p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-start gap-3"
              >
                <div className="bg-green-100 p-3 rounded-lg">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="border border-[green-700] bg-[#1c5a3bff] text-white font-semibold px-8 py-3 rounded-md hover:bg-green-700 hover:text-white transition"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.section>

      <ProjectDiscussion />
      <Footer />
    </>
  );
};

export default About;
