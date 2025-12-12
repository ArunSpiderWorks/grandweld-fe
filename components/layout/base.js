"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
// import { motion } from "framer-motion";

const Base = ({ children, headerBg = true, data }) => {
  return (
    <>
      <Header showBg={headerBg} data={data} />

      {/* Page fade-in wrapper */}
    
        {children}

      <Footer data={data} />
    </>
  );
};

export default Base;
