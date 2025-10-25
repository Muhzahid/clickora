import { Brain, Globe2, Smartphone, Code2, Layers, Cloud } from "lucide-react";

const services = [
  { icon: <Brain size={40} />, title: "AI/ML" },
  { icon: <Globe2 size={40} />, title: "Web Services" },
  { icon: <Smartphone size={40} />, title: "Mobile Solutions" },
  { icon: <Code2 size={40} />, title: "Digital Transformation" },
  { icon: <Layers size={40} />, title: "SaaS Applications" },
  { icon: <Cloud size={40} />, title: "Cloud Services" },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16">
          Design, Develop, Deploy, Manage and <br />
          Maintain Software Solutions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-gray-600 hover:bg-[#1c5a3bff] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-sm font-medium text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
