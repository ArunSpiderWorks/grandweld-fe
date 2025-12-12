"use client";
import React from "react";
import { TextShapeWhite } from "./svgIcons";

export const ButtonRound = ({ text, className, span, arrow, type = "button" }) => {
  return (
    <button
      type={type}
      className={`button-round relative group bg-[#fff] hover:bg-[#000] py-[13.93px] px-[30px] rounded-[100px] font-segoe-ui text-[#050505] hover:text-[#fff] transition-all ease-in font-[600] leading-[12.17px] ${className} `}
    >
      {span}
      {text}
      {arrow}
    </button>
  );
};
