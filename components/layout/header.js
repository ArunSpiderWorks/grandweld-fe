"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/img/logo.png";
import { DropDownIcon } from "../common/svgIcons";
import { ButtonRound } from "../common/Button";

const Header = ({ showBg = true, data }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const textColor = showBg ? "text-[#fff]" : "text-[#000]";

  const menu = [
    {
      text: "About Us",
      link: "/about",
      dropdown: [
        { text: "Our Story", link: "/about#story" },
        { text: "Leadership", link: "/about#leadership" },
        { text: "Mission & Vision", link: "/about#mission" },
      ],
    },
    {
      text: "Products",
      link: "/products",
      dropdown: [
        { text: "Product 1", link: "/products/product-1" },
        { text: "Product 2", link: "/products/product-2" },
        { text: "Product 3", link: "/products/product-3" },
      ],
    },
    {
      text: "Services",
      link: "/services",
      dropdown: [
        { text: "Consulting", link: "/services#consulting" },
        { text: "Strategy", link: "/services#strategy" },
        { text: "Implementation", link: "/services#implementation" },
      ],
    },
    { text: "Insights", link: "/insights" },
    { text: "Careers", link: "/careers" },
  ];

  return (
    <>
      <header className="header absolute top-0 w-full py-[28px] z-100">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="header-left-block flex items-center gap-[40px]">
              {/* Logo */}
              <div className="logo-div">
                <a href="/">
                  <Image
                    src={Logo}
                    width={800}
                    height={800}
                    alt="logo"
                    className="w-[100px] object-cover"
                  />
                </a>
                
              </div>
         
              

              {/* <ul className="md:flex gap-[40px] items-center hidden menu-nav">
                {menu.map((item, i) => (
                  <li
                    key={i}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setOpenDropdown(i)}
                    onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                  >
                    <div
                      className={` pb-[3px] ${textColor} flex items-center gap-[5px] cursor-pointer`}
                    >
                      <a
                        className="text-[#fff] font-segoe-ui  text-[16px] font-normal capitalize"
                        href={item.link}
                      >
                        {item.text}
                      </a>

                      {item.dropdown && (
                        <span className="">
                          <DropDownIcon />
                        </span>
                      )}
                    </div>

                    {item.dropdown && (
                      <div
                        className={`
                          absolute left-0 top-[110%] bg-white shadow-lg rounded-[6px]
                          overflow-hidden transition-all duration-300
                          ${
                            openDropdown === i
                              ? "max-h-[300px] opacity-100"
                              : "max-h-0 opacity-0"
                          }
                        `}
                        style={{ width: "180px" }}
                      >
                        <ul className="flex flex-col">
                          {item.dropdown.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={sub.link}
                                className="block px-4 py-2 text-[#000] hover:bg-gray-100 font-neue-haas font-[600]"
                              >
                                {sub.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul> */}
            </div>

            
            <a href="tel:+97144270800">
              <div className="flex menu-nav">
                <ButtonRound
                  text="+971 4 4270800"
                  className="text text-[15px] font-bold flex items-center gap-[10px] bg-[#fff] hover:bg-[#000] text-[#050505] hover:text-[#fff] px-[20px] py-[10px] rounded-full shadow-md transition-colors"
                  span={
                    <span className="round-span w-[24px] h-[24px] rounded-[50%] bg-[#0B2136] flex items-center justify-center text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                  }
                />
              </div>
            </a>
           
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
