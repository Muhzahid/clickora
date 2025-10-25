import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FaGripLines } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom"; // ✅ added useLocation
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // ✅ detect current page

  const toggleMenu = () => setOpen(!open);

  // 🔹 Detect scroll position (same as before)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Check if current page is contact
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="fixed w-full z-50 transition-colors duration-500">
      {/* Top Bar */}
      <div
        className={`flex justify-between items-center px-4 sm:px-36 py-6 transition-all duration-500 
        ${isContactPage
            ? "bg-white text-black shadow-lg" // ✅ Contact page style
            : isScrolled
              ? "bg-[#1c5a3bff] shadow-lg text-white"
              : "bg-transparent text-white"
          }`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`text-3xl focus:outline-none z-[100] relative transition-colors duration-300 
          ${open
              ? "text-[#1c5a3bff]"
              : isContactPage
                ? "text-green-500" // ✅ Green on contact page
                : "text-white"
            }`}
        >
          {open ? <FiX /> : <FaGripLines />}
        </button>

        {/* Title */}
        <h2
          className="text-xl sm:text-3xl font-semibold tracking-[0.25em] ml-auto sm:ml-0 bg-gradient-to-r from-[#00ffcc] via-[#00e676] to-[#00bfa5] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,255,170,0.6)] uppercase"
          style={{ fontFamily: "'Orbitron', 'Rajdhani', sans-serif" }}
        >
          CLICKORA
        </h2>

        {/* Get Started Button */}
        <Link
          to="/services"
          className="hidden sm:block bg-[#62a87d] text-white px-6 sm:px-8 py-2 rounded-sm hover:bg-[#547168] transition duration-300 text-sm sm:text-base"
        >
          Get Started
        </Link>
      </div>

      {/* Fullscreen Overlay Navbar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white text-[#1c5a3bff] flex flex-col items-start justify-start px-6 sm:px-36 pt-24 sm:pt-36 space-y-5 font-semibold text-[18px] z-40"
          >
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
              <h1
                className="text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                CLICKORA
              </h1>


            </div>

            <Link to="/" onClick={toggleMenu} className="flex items-center gap-3 transition">
              <span className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-[#1c5a3bff] to-green-700 text-white text-2xl shadow-md hover:scale-105 transition-transform duration-300">
                <FaHome />
              </span>
              Home
            </Link>

            <Link to="/about" onClick={toggleMenu} className="flex items-center gap-3 transition">
              <span className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-[#1c5a3bff]  to-green-700 text-white text-2xl shadow-md hover:scale-105 transition-transform duration-300">
                <FaInfoCircle />
              </span>
              About
            </Link>

            <Link to="/services" onClick={toggleMenu} className="flex items-center gap-3 transition">
              <span className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-[#1c5a3bff]  to-green-700 text-white text-2xl shadow-md hover:scale-105 transition-transform duration-300">
                <FaServicestack />
              </span>
              Services
            </Link>

            <Link to="/contact" onClick={toggleMenu} className="flex items-center gap-3 transition">
              <span className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-[#1c5a3bff]  to-green-700 text-white text-2xl shadow-md hover:scale-105 transition-transform duration-300">
                <FaEnvelope />
              </span>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
