// HeroSection.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function FloatingSphere() {
  const mesh = useRef();

  // Floating + rotation animation
  useFrame(({ clock }) => {
    mesh.current.rotation.y += 0.01;
    mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5; // up/down float
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#ff00ff"
        emissive="#ff00ff"
        emissiveIntensity={0.6}
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <section className="h-screen w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 flex items-center justify-center relative overflow-hidden">
      {/* Left Text Content */}
      <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white z-10 max-w-lg">
        <h1 className="text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Creative <span className="text-yellow-300">3D Experience</span>
        </h1>
        <p className="text-lg mb-6 opacity-90">
          Build stunning hero sections with <b>React + Three.js</b> and make your website stand out with interactive 3D designs.
        </p>
        <button className="px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition">
          Explore Now
        </button>
      </div>

      {/* Right 3D Canvas */}
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={2} />
          <spotLight position={[-5, -5, -5]} angle={0.3} intensity={1.5} />

          {/* Floating Glowing Sphere */}
          <FloatingSphere />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
