"use client";
import { motion } from "framer-motion";
// import { curve } from "../../../../lib/anim";

export default function Curve() {
  const strokeColor = "rgb(0, 183, 255)";
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;

  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <svg className="absolute -left-[99px] top-0 h-full w-[100px]">
      <defs>
        <linearGradient id="curveGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="rgb(12, 12, 39)" />
          <stop offset="100%" stopColor="rgb(0,2,8)" />
        </linearGradient>
      </defs>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
        fill="url(#curveGradient)"
        stroke={strokeColor}
        strokeWidth="0.0175em"
      />
    </svg>
  );
}
