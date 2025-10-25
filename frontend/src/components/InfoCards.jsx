import React, { useState } from "react";
import firstImage from "../../public/card3.png";
import secImage from "../../public/cars2.png";
import thirdImage from "../../public/card4.png";

const cards = [
  {
    title: "About Us",
    hoverTitle: "Learn More About Us",
    description:
      "We blend human expertise with AI to power meaningful business transformation. Our problem-solving approach weaves AI naturally into solutions that feel intuitive rather than algorithmic.",
    image: firstImage,
  },
  {
    title: "Services",
    hoverTitle: "Explore Our Services",
    description:
      "We deliver what matters - results that move your business forward. The intelligence behind our services comes from thoughtfully applied AI that works quietly in the background.",
    image: secImage,
  },
  {
    title: "Solutions",
    hoverTitle: "Discover Our Solutions",
    description:
      "Each solution we craft elevates your business capabilities through AI that genuinely delivers. Our intelligent algorithms reveal insights, predict trends, and automate decisions with remarkable accuracy.",
    image: thirdImage,
  },
];

const InfoCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 px-4 bg-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-100 h-80 rounded-lg overflow-hidden shadow-md group cursor-pointer"
        >
          {/* Background image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

          {/* Title + Hover Title */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h2 className="text-3xl font-light tracking-wide transition-all duration-500 opacity-100 group-hover:opacity-0">
              {card.title}
            </h2>
            <h2 className="absolute text-3xl font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-[-100px]">
              {card.hoverTitle}
            </h2>
          </div>

          {/* Description (only visible on hover) */}
          <div className="absolute inset-x-0 bottom-0 p-4 text-center text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-[-10px]">
            <p className="text-[22px] font-light">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
