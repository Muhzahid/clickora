import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return setErrors(newErrors), Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
    } catch {
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white py-20 px-6 sm:px-10 lg:px-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mt-20 mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Let’s Work Together
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your business with innovative technology
          solutions? Get in touch with us today and let’s discuss how we can
          help you achieve your goals.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h3>

          <div className="space-y-6">
            {[
              {
                icon: <FaEnvelope size={20} />,
                title: "Email",
                lines: [
                  "clickmarketing@gmail.com",
                  "founderclickora@gmail.com",
                ],
              },
              {
                icon: <FaPhoneAlt size={20} />,
                title: "Phone",
                lines: ["+92 (304) 153-6470"],
              },
              {
                icon: <FaMapMarkerAlt size={20} />,
                title: "Office",
                lines: ["Lahore, Punjab, Pakistan"],
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1c5a3bff] flex items-center justify-center rounded-lg text-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm sm:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-[#1c5a3bff] text-white p-3 rounded-lg hover:bg-[#4f8666] transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/clickoraagency/"
                  className="bg-[#1c5a3bff] text-white p-3 rounded-lg hover:bg-[#4f8666] transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/Clickora.agency"
                  className="bg-[#1c5a3bff] text-white p-3 rounded-lg hover:bg-[#4f8666] transition"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white shadow-md rounded-xl p-6 sm:p-8 lg:p-10"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", placeholder: "Full Name" },
              { name: "email", placeholder: "Email Address" },
              { name: "phone", placeholder: "Phone Number" },
              { name: "organization", placeholder: "Organization" },
            ].map(({ name, placeholder }) => (
              <div key={name}>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`w-full border-0 border-b border-gray-300 focus:border-[#62a87d] focus:outline-none text-gray-700 py-2 transition-all ${errors[name] ? "border-red-500" : ""
                    }`}
                />
                {errors[name] && (
                  <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <div>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                className={`w-full border-0 border-b border-gray-300 focus:border-[#62a87d] focus:outline-none text-gray-700 py-2 resize-none transition-all ${errors.message ? "border-red-500" : ""
                  }`}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-[#1c5a3bff] text-white py-3 rounded-md font-semibold hover:bg-[#1c5a3bff] transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status && (
              <p
                className={`text-sm mt-3 text-center ${status.startsWith("✅") ? "text-green-600" : "text-red-500"
                  }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
    <Footer/>
    </>
  );
};

export default Contact
