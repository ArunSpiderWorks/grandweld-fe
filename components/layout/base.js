"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { ButtonRound } from "../common/Button";
import { BtnLinkArrow } from "../common/svgIcons";
import PopupModal from "../common/PopupModal";
const Base = ({ children, headerBg = true, data }) => {
  const [showSticky, setShowSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header showBg={headerBg} data={data} />

      {children}

      {/* Bottom Sticky Button */}
      <div
        className={`btm-sticky-btn fixed bottom-[20px] left-0 right-0 z-[99]
        flex items-center md:justify-between max-w-[650px] m-auto flex-wrap 
        justify-center gap-[10px] transition-all duration-500 ease-out
        ${
          showSticky
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-[30px] pointer-events-none"
        }`}
      >
        <h4 className="max-w-[200px]">Contact Us Now</h4>

        <div className="flex items-center gap-[20px] max-w-[400px] w-full">
          <ButtonRound
            text="Call Repair Experts"
            link="tel:+971 4 4270800"
            className="bg-[#fff] border border-[#000] hover:bg-[#000] text-[#050505] hover:text-[#fff] text-[13px] max-w-[193px] w-full capitalize flex items-center justify-between"
            arrow={
              <span className="w-[18px] h-[18px] rounded-full bg-[#fff] flex items-center justify-center">
                <BtnLinkArrow />
              </span>
            }
          />

          <ButtonRound
            text="Request Repair Quote"
            onClick={() => setIsModalOpen(true)}
            className="text-[14px] capitalize flex items-center justify-between max-w-[242px] w-full text-[#fff] bg-[#000] border border-[#EEE] hover:bg-[#fff] hover:text-[#000]"
            arrow={
              <span className="w-[18px] h-[18px] rounded-full bg-[#fff] flex items-center justify-center">
                <BtnLinkArrow />
              </span>
            }
          />
        </div>
      </div>

      <Footer data={data} />
      <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971501508524"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-[20px] md:right-[30px] z-[100] w-[50px] h-[50px] md:w-[60px] md:h-[60px] hover:scale-110 transition-all duration-300 flex items-center justify-center group ${
          showSticky ? "bottom-[140px] xl:bottom-[30px]" : "bottom-[20px] md:bottom-[30px]"
        }`}
      >
        {/* Wave Pulse Effect */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping group-hover:animate-none"></span>
        
        {/* Icon */}
        <img
          src="/floating-whatsapp.svg"
          alt="WhatsApp"
          className="relative z-10 w-full h-full object-contain"
        />
      </a>
    </>
  );
};

export default Base;
