import { FaCheck } from "react-icons/fa";
import missionImg from "../../public/mission.png";
import { motion } from "framer-motion";

export default function MissionSection() {
  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="bg-[#1c5a3bff] py-16 px-6 md:px-16 rounded-2xl max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Side - Text with Animation */}
        <motion.div
          variants={fadeInLeft}
          className="text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white mb-6 leading-relaxed"
          >
            To empower businesses with innovative technology solutions that
            drive growth, enhance efficiency, and create lasting value in the
            digital age.
          </motion.p>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            {[
              "Expert Team",
              "Proven Track Record",
              "24/7 Support"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="flex items-center text-white"
              >
                <FaCheck className="text-green-600 mr-2" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image with Animation */}
        <motion.div
          variants={fadeInRight}
          className="flex justify-center"
        >
          <motion.img
            src={missionImg}
            alt="Mission"
            className="rounded-2xl shadow-lg w-full md:w-[90%] h-auto object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
