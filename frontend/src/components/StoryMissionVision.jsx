import { History, Target, Eye } from "lucide-react";

export default function StoryVisionSection() {
  return (
    <section className="grid md:grid-cols-3 text-center">
      {/* --- Our Story --- */}
      <div className="bg-[#1c5a3bff] text-white px-10 py-16 flex flex-col items-center justify-center">
        <History className="w-12 h-12 mb-5 text-white" />
        <h3 className="text-xl font-bold uppercase mb-4">Our Story</h3>
        <p className="max-w-md text-gray-200 leading-relaxed">
          BugsLink TECH’s journey began with a simple idea and a commitment to
          quality. Today, it has evolved into a leading tech innovator,
          consistently delivering excellence and transforming industries through
          modern digital solutions.
        </p>
      </div>

      {/* --- Our Mission --- */}
      <div className="bg-gray-100 text-gray-800 px-10 py-16 flex flex-col items-center justify-center">
        <Target className="w-12 h-12 mb-5 text-[#1c5a3bff]" />
        <h3 className="text-xl font-bold uppercase mb-4">Our Mission</h3>
        <p className="max-w-md leading-relaxed text-gray-600">
          At BugsLink TECH, we strive to convert challenges into opportunities by
          merging creativity with technology. Our goal is to empower businesses
          with impactful digital transformations that fuel long-term success.
        </p>
      </div>

      {/* --- Our Vision --- */}
      <div className="bg-[#1c5a3bff] text-white px-10 py-16 flex flex-col items-center justify-center">
        <Eye className="w-12 h-12 mb-5 text-white" />
        <h3 className="text-xl font-bold uppercase mb-4">Our Vision</h3>
        <p className="max-w-md text-gray-200 leading-relaxed">
          We aim to inspire and lead innovation that drives progress across
          industries. By fostering growth, creativity, and sustainability, we
          envision a world empowered by intelligent technology and design.
        </p>
      </div>
    </section>
  );
}
