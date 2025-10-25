import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/c.png",
    title: "Clickora Innovations",
    text: "Shaping the future through intelligent design, seamless user experience, and cutting-edge technology.",
    button: "Explore Now",
  },
  {
    image: "/h.png",
    title: "Creative Digital Solutions",
    text: "Transforming bold ideas into powerful digital products that drive growth and success.",
    button: "Get Started",
  },
  {
    image: "/E.png",
    title: "Future of Technology",
    text: "Redefining possibilities with AI, automation, and innovative software solutions for modern businesses.",
    button: "Learn More",
  },

];


export default function FullscreenSlider() {
  const [current, setCurrent] = useState(0);

  // ✅ Preload images
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // ✅ Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✅ Centered Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-30 px-8 text-center">
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {slides[current].title}
        </h2>
        <p
          className="text-lg md:text-xl mb-6 max-w-2xl opacity-90"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {slides[current].text}
        </p>
        <button className="px-8 py-3 bg-[#1c5a3bff] hover:bg-green-600 rounded-full text-white font-semibold transition">
          {slides[current].button}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i
                ? "bg-green-400 scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
