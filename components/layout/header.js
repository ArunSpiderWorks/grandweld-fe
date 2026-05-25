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

            <div className="flex items-center gap-[15px]">
              <a href="tel:+97144270800">
                <div className="flex menu-nav">
                  <ButtonRound
                    text="+971 4 4270800"
                    className="text text-[15px] font-bold flex items-center gap-[10px] bg-[#fff] hover:bg-[#000] text-[#050505] hover:text-[#fff] px-[20px] py-[10px] rounded-full shadow-md transition-colors"
                    span={
                      <span className="round-span w-[24px] h-[24px] rounded-[50%] bg-[#0B2136] flex items-center justify-center text-white">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </span>
                    }
                  />
                </div>
              </a>
              <a href="https://wa.me/97144270800" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-[8px] bg-[#25D366] hover:bg-[#128C7E] text-white px-[20px] py-[10px] rounded-full shadow-md font-bold text-[15px] transition-colors whitespace-nowrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                <span>Get Repair Support</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
