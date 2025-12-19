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
                    width={300}
                    height={300}
                    alt="logo"
                    className="w-[60px] object-cover"
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

            <div className="flex menu-nav">
              <ButtonRound
                text="Get a Callback"
                className="text text-[12.17px] flex items-center gap-[10px] bg-[#fff] hover:bg-[#000] text-[#050505] hover:text-[#fff]"
                span={
                  <span className="round-span w-[13px] h-[13px] rounded-[50%] bg-[linear-gradient(180deg,#64C7FC_0%,#004C7E_100%)]"></span>
                }
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
