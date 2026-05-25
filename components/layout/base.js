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
        className={`btm-sticky-btn fixed bottom-[20px] left-[20px] right-[20px] md:left-0 md:right-0 z-[99]
        flex items-center md:justify-between max-w-[700px] m-auto flex-wrap 
        justify-center gap-[10px] transition-all duration-500 ease-out 
        bg-black/50 backdrop-blur-md px-[20px] py-[15px] rounded-[20px] shadow-2xl border border-white/10
        ${
          showSticky
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-[30px] pointer-events-none"
        }`}
      >
        <h4 className="hidden md:block max-w-[200px] text-white font-bold whitespace-nowrap">Contact Us Now</h4>

        <div className="flex flex-row items-center gap-[6px] md:gap-[20px] sm:max-w-[480px] w-full justify-center sm:justify-end">
          <ButtonRound
            text="Call Repair Experts"
            link="tel:+971 4 4270800"
            className="bg-[#fff] border border-[#000] hover:bg-[#000] text-[#050505] hover:text-[#fff] text-[10px] sm:text-[13px] px-[8px] py-[6px] sm:px-[20px] sm:py-[10px] w-full flex-1 sm:max-w-[220px] capitalize flex items-center justify-between whitespace-nowrap"
            arrow={
              <span className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#fff] flex items-center justify-center shrink-0">
                <BtnLinkArrow />
              </span>
            }
          />

          <ButtonRound
            text="Request Quote"
            onClick={() => setIsModalOpen(true)}
            className="text-[#fff] bg-[#000] border border-[#EEE] hover:bg-[#fff] hover:text-[#000] text-[10px] sm:text-[13px] px-[8px] py-[6px] sm:px-[20px] sm:py-[10px] w-full flex-1 sm:max-w-[220px] capitalize flex items-center justify-between whitespace-nowrap"
            arrow={
              <span className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#fff] flex items-center justify-center shrink-0">
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
