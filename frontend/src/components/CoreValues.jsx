import React from "react";
import { motion } from "framer-motion";
import { LuBrain, LuLaptop, LuRocket, LuSettings } from "react-icons/lu";

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    desc: "We dive into your goals, timeline, and resources to understand your vision and align on the best AI-driven approach.",
    icon: <LuBrain className="text-3xl text-[#1c5a3bff]" />,
  },
  {
    id: "02",
    title: "Solution Planning",
    desc: "Together, we design a clear project roadmap, choose the ideal tools and technologies, and assemble the right team for success.",
    icon: <LuLaptop className="text-3xl text-[#1c5a3bff]" />,
    active: true,
  },
  {
    id: "03",
    title: "Execution & Acceleration",
    desc: "We bring your project to life, leveraging AI, machine learning, and agile workflows, while providing regular updates and flexible adjustments.",
    icon: <LuRocket className="text-3xl text-[#1c5a3bff]" />,
  },
  {
    id: "04",
    title: "Delivery & Optimization",
    desc: "We launch your solution, monitor performance, and fine-tune it for efficiency, scalability, and measurable business impact.",
    icon: <LuSettings className="text-4xl text-[#1c5a3bff]" />,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:mb-12 mb-0 sm:px-8 md:px-20 max-w-[95rem] mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-wide text-[#1c5a3bff] font-semibold mb-2 text-center lg:text-left">
            Innovation, Powered by AI
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6 text-center lg:text-left">
            Turning Ideas into <br className="hidden sm:block" /> Intelligent Solutions
          </h2>

          <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-4 text-center lg:text-left">
            At <span className="font-semibold text-[#1c5a3bff]">Clickora</span>, we make innovation effortless —
            from concept to launch and beyond. Our AI-powered process transforms ambitious ideas into
            intelligent, scalable solutions built on the foundations of{" "}
            <span className="font-medium text-gray-800">
              Artificial Intelligence, Generative AI, Machine Learning, Data Analytics,
              Blockchain, and Cloud Computing
            </span>. We design digital ecosystems that don’t just solve today’s problems —
            they anticipate tomorrow’s challenges.
          </p>

          <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-4 text-center lg:text-left">
            Whether it’s crafting intuitive{" "}
            <span className="font-medium text-gray-800">mobile applications</span>,
            high-performance{" "}
            <span className="font-medium text-gray-800">web platforms</span>, or
            end-to-end{" "}
            <span className="font-medium text-gray-800">SaaS solutions</span>, we combine
            human creativity with AI precision to deliver seamless user experiences.
          </p>

          <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-8 text-center lg:text-left">
            We work as your technology partner — aligning innovation with your vision,
            goals, and market needs. Our agile workflows ensure faster delivery, measurable results,
            and continuous optimization, helping your business stay efficient and ahead of the curve.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-3">
            <button className="bg-[#1c5a3bff] text-white font-medium px-6 py-3 hover:bg-green-700 rounded-md transition">
              Let’s Connect
            </button>

          </div>
        </div>


        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6 text-gray-800">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`group p-6 sm:p-8 bg-white hover:bg-[#1c5a3bff] hover:text-white transition duration-300 rounded-lg shadow-md
                ${step.active ? "scale-[1.02]" : ""}
                ${index === 1 || index === 3 ? "lg:translate-y-20 sm:translate-y-12" : ""}
              `}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-green-200 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#14532d] group-hover:text-white">
                  {React.cloneElement(step.icon, {
                    className: "text-3xl transition-colors duration-300",
                  })}
                </div>
                <span className="text-xl sm:text-2xl font-semibold text-right">
                  {step.id}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-[15px] sm:text-[16px] leading-relaxed mb-6">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
