import React from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Megaphone,
  Palette,
  Users,
  MonitorSmartphone,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import serviceImg from "../../public/Services.png";
import ProjectDiscussion from "../components/ProjectDiscussion";
import Footer from "../components/Footer";

const services = [
  {
    title: "Web Development",
    desc: "We build high-performance websites that are responsive, scalable, and secure. From simple business sites to complex web apps, we use the latest frameworks and best practices.",
    icon: <Code2 className="w-10 h-10 text-[#62a87d]" />,
  },
  {
    title: "Mobile Apps",
    desc: "Our team develops cross-platform and native mobile apps with seamless performance and intuitive designs, ensuring a smooth user experience on both iOS and Android.",
    icon: <Smartphone className="w-10 h-10 text-[#62a87d]" />,
  },
  {
    title: "Custom Software Development",
    desc: "We create tailor-made software solutions designed specifically for your business needs — from enterprise systems to custom automation tools that streamline operations.",
    icon: <MonitorSmartphone className="w-10 h-10 text-[#62a87d]" />,
  },
  {
    title: "AI Solutions",
    desc: "Leverage the power of Artificial Intelligence to enhance decision-making, automate workflows, and improve customer engagement using smart, data-driven solutions.",
    icon: <Cpu className="w-10 h-10 text-[#62a87d]" />,
  },
  {
    title: "Cloud Solutions",
    desc: "Accelerate your business with scalable cloud solutions. We provide cloud migration, hosting, and infrastructure management for maximum efficiency.",
    icon: <Cloud className="w-10 h-10 text-[#62a87d]" />,
  },
  {
    title: "Digital Marketing",
    desc: "Boost your brand visibility with our marketing strategies. From SEO and PPC to social media campaigns, we help you reach your target audience effectively.",
    icon: <Megaphone className="w-10 h-10 text-[#62a87d]" />,
  },
  {
    title: "UI/UX Designing",
    desc: "Our creative design team focuses on crafting intuitive and visually stunning interfaces that provide the best user experiences and keep your audience engaged.",
    icon: <Palette className="w-10 h-10 text-[#62a87d]" />,
  },
  {
    title: "Social Media Management",
    desc: "We manage and grow your social presence by creating engaging content, running targeted campaigns, and building strong connections with your audience.",
    icon: <Users className="w-10 h-10 text-[#62a87d]" />,
  },
];

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          backgroundImage: `url(${serviceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative py-32 md:py-40 flex items-center justify-center text-center px-6 md:px-16 lg:px-24"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <motion.div className="relative z-10 max-w-4xl text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold border-l-4 border-green-500 pl-4 inline-block">
            Services
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Our software development company delivers corporate and consumer
            applications based on our profound understanding of technologies and
            the markets they operate in. With our professional mindset, we look
            beyond technology to offer viable solutions for your particular
            business context.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-200">
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-400 text-lg" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-400 text-lg" />
              <span>Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-400 text-lg" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="px-6 md:px-20 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose Our Services?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Our expert team combines innovation, creativity, and technology to
          deliver highly customized digital solutions tailored to your business
          goals. We go beyond development — focusing on strategy, design, and
          implementation to enhance productivity, scalability, and user
          engagement. With a strong commitment to transparency, timely delivery,
          and measurable results, we build long-term partnerships that help
          startups and enterprises alike grow in today’s competitive market
          while ensuring consistent quality, innovation, and reliable ongoing
          support.
        </p>
      </motion.section>

      {/* Services Grid */}
      <section className="bg-white text-white px-6 md:px-20 py-20 max-w-7xl mx-auto">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="relative border border-[#1c5a3b] rounded-2xl p-10 bg-white hover:bg-[#1c5a3b] transition-all duration-500 group overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -6,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff80] via-[#00d166] to-[#00ff80] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700"></div>

              {/* Icon */}
              <div className="flex justify-start mb-6 relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-[#1c5a3b] group-hover:border-transparent transition-all duration-500 shadow-[0_0_12px_rgba(0,255,128,0.3)]">
                  <div className="text-[#00ff80]">{service.icon}</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-mono font-semibold mb-3 tracking-wide text-gray-800 group-hover:text-white relative z-10 transition-all duration-500">
                {service.title.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-[15px] relative z-10 group-hover:text-gray-200 transition-all duration-500">
                {service.desc}
              </p>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:shadow-[0_0_25px_#00ff80] transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <ProjectDiscussion />
      <Footer />
    </div>
  );
};

export default Services;
