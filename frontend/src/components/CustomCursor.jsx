import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [hovered, setHovered] = useState(false);
    const [trail, setTrail] = useState([]);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setTrail((prev) => [...prev.slice(-8), { x: e.clientX, y: e.clientY }]); // keep 8 particles
        };
        window.addEventListener("mousemove", move);

        const hoverStart = () => setHovered(true);
        const hoverEnd = () => setHovered(false);

        document.querySelectorAll("a, button, .hoverable").forEach((el) => {
            el.addEventListener("mouseenter", hoverStart);
            el.addEventListener("mouseleave", hoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            document.querySelectorAll("a, button, .hoverable").forEach((el) => {
                el.removeEventListener("mouseenter", hoverStart);
                el.removeEventListener("mouseleave", hoverEnd);
            });
        };
    }, [x, y]);

    return (
        <>
            {/* Trail Particles */}
            {trail.map((p, i) => (
                <motion.div
                    key={i}
                    className="fixed top-0 left-0 pointer-events-none rounded-full z-[9998]"
                    style={{
                        width: 10,
                        height: 10,
                        background: "radial-gradient(circle, rgba(78, 139, 86, 0.4), transparent)",
                        transform: `translate(${p.x - 5}px, ${p.y - 5}px)`,
                    }}
                    animate={{
                        opacity: [1, 0],
                        scale: [1, 0.5],
                    }}
                    transition={{
                        duration: 0.5 + i * 0.05,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Main Cursor */}
           {/* Main Cursor */}
<motion.div
  className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-[2px] ${
    hovered
      ? "border-green-700 bg-green-700/20 scale-150"
      : "border-green-600 bg-green-700/10 scale-100"
  } shadow-[0_0_40px_10px_rgba(0,255,100,0.5)]`}
  style={{
    x: springX,
    y: springY,
    width: 35,
    height: 35,
    translateX: "-50%",
    translateY: "-50%",
    mixBlendMode: "difference",
    backdropFilter: "blur(3px)",
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 20,
  }}
/>

        </>
    );
};



export default CustomCursor;
