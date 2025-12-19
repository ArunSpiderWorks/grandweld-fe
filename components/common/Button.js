"use client";
import React from "react";
import { TextShapeWhite } from "./svgIcons";

export const ButtonRound = ({
  text,
  className,
  span,
  arrow,
  onClick,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button-round relative group  py-[13.93px] px-[30px] rounded-[100px] font-segoe-ui  transition-all ease-in font-[600] leading-[12.17px] ${className} `}
    >
      {span}
      {text}
      {arrow}
    </button>
  );
};
