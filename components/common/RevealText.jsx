"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const textVariant = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: "blur(6px)",
    scale: 0.98,
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RevealText({
  as: Tag = "div",
  children,
  className = "",
  amount = 0.3,
}) {
  const MotionTag = motion(Tag);
  const hasAnimated = useRef(false);

  return (
    <MotionTag
      className={className}
      variants={textVariant}
      initial="hidden"
      animate={hasAnimated.current ? "show" : undefined}
      whileInView={!hasAnimated.current ? "show" : undefined}
      viewport={{
        amount,
        once: true,
      }}
      onViewportEnter={() => {
        hasAnimated.current = true; // store that animation already happened
      }}
    >
      {children}
    </MotionTag>
  );
}
