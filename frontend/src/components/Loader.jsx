// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-12 h-12 border-4 border-[#62a87d] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
