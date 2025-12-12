"use client";
import { motion } from "framer-motion";
import parse from "html-react-parser";

const textVariant = {
  initial: {
    y: 40,
    opacity: 0,
    filter: "blur(6px)",
    scale: 0.98,
  },
  whileInView: {
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

export const ParseHTML = (data) => {
  return parse(typeof data === "string" ? data : "");
};

export default function RevealTextContent({
  as: Tag = "div",
  children,
  className = "",
  once = true,
  amount = 0.3,
  content,
}) {
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      variants={textVariant}
      initial="initial"
      whileInView="whileInView"
      viewport={{ amount, once }}
      className={className}
    >
      {ParseHTML(content)}
    </MotionTag>
  );
}
