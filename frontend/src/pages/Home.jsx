import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PiLightbulbFilament } from "react-icons/pi";
import { BsShieldCheck } from "react-icons/bs";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Footer from "../components/Footer";
import MissionSection from "../components/MissionSection";
import FullscreenSlider from "../components/FullscreenSlider";
import Navbar from "../components/Navbar";
import InfoCards from "../components/InfoCards";
import ServicesSection from "../components/ServicesSection";
import IndustriesSection from "../components/IndustriesSection";
import { MdOutlineGroups } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import StoryMissionVision from "../components/StoryMissionVision";
import ContactForm from "../components/ContactSection";


// Page-level animation
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.4 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};


const Home = () => {
  const data = [
    {
      title: "Innovation",
      desc: "By embracing innovation and advanced technology, we transform complexity into clarity and drive meaningful digital change.",
      icon: <PiLightbulbFilament />,
    },
    {
      title: "Integrity",
      desc: "We foster lasting trust by communicating openly, acting ethically, and consistently keeping our commitments without compromise.",
      icon: <BsShieldCheck />,
    },
    {
      title: "Delivery",
      desc: "Our commitment to excellence ensures every project is delivered on time, with superior quality and tangible business results.",
      icon: <HiOutlineRocketLaunch />,
    },
    {
      title: "Collaboration",
      desc: "We believe great ideas thrive through teamwork, open communication, and shared purpose — creating solutions that inspire and succeed.",
      icon: <MdOutlineGroups />,
    },
    {
      title: "Creativity",
      desc: "Our creative mindset drives us to think beyond limits, crafting unique and impactful digital experiences that make brands stand out.",
      icon: <GiTeamIdea />,
    },
    {
      title: "Customer Focus",
      desc: "We put our clients at the heart of every decision, ensuring personalized experiences, lasting relationships, and measurable results.",
      icon: <RiCustomerService2Line />,
    },
  ];

  return (
    <>

      <div>
        <Navbar />
        <FullscreenSlider />
      </div>

      <div>
        <InfoCards />
      </div>

      <div>
        <ServicesSection />
      </div>

      <div>
        <IndustriesSection />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        className="overflow-hidden"
      >

        <div>
          <StoryMissionVision />
        </div>


        {/* ================= ESSENCE SECTION ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }} // 👈 again animate when enters view
          transition={{ duration: 0.8 }}
          className="px-6 py-20 bg-gray-50 overflow-hidden"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-center text-[#3d4a50]"
          >
            Essence of Clickora
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex text-center justify-center p-4 mb-6"
          >
            <div className="w-[750px] text-[18px] text-gray-600">
              <p>
                CLICKORA is a forward-thinking technology company committed to
                empowering businesses through innovative digital solutions. We blend
                technical excellence with creative insight to deliver impactful
                results that accelerate growth and long-term success.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mb-16 mx-auto">
            {data.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} // 👈 animate each time it appears
                transition={{
                  delay: i * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-xl border border-[#e6f4ec] relative overflow-hidden group"
              >
                {/* Floating Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-6 flex items-center justify-center w-16 h-16 text-[#3c6e71] text-[24px] rounded-full bg-[#e6f4ec] mx-auto group-hover:bg-[#1c5a3bff] group-hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </motion.div>

                {/* Text */}
                <h3 className="text-2xl font-semibold text-[#62a87d] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600"
                // style={{background:"#1c5a3bff"}}
                >{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <MissionSection />
        </motion.section>



        {/* ================= SERVICES + ABOUT + FOOTER (unchanged) ================= */}
        <ContactForm />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
