import React from "react";
import Image from "next/image";
import YearsLogo from "@/public/img/LP/Years-Logo.png";
import ISOLogo from "@/public/img/LP/iso.png";
import {
  EmailIcon,
  INIcon,
  LocationIcon,
  PhoneIcon,
  Social_YouTube_Logo,
  SocialFacebookLogo,
  SocialInstaLogo,
  SocialXLogo,
} from "../common/svgIcons";
import Link from "next/link";

const Footer = ({ data }) => {
  return (
    <>
      <footer
        id="footer-section"
        className=" border-[#AFAFAF] mt-[60px] border-b pb-[8px]"
      >
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <div className="py-[40px]">
              <ul className="flex flex-col gap-[20px]">
                <li className="flex items-center gap-[10px] text-[#1E1E1E] font-segoe-ui text-[14px] font-[400] leading-normal ">
                  <EmailIcon /> info@grandweld.com
                </li>
                <li className="flex items-center gap-[10px] text-[#1E1E1E] font-segoe-ui text-[14px] font-[400] leading-normal ">
                  <PhoneIcon /> +971 4 4270800, +971 4 4270790
                </li>
                <li className="flex items-center gap-[10px] text-[#1E1E1E] font-segoe-ui text-[14px] font-[400] leading-normal ">
                  <LocationIcon /> Dubai Maritime City, P.O.Box: 24755 Dubai,
                  United Arab Emirates
                </li>
              </ul>

              <ul className="flex items-center gap-[20px] lg:mt-0 pt-[36px] z-30">
                <li>
                  <Link
                    href={"https://www.instagram.com/grandwelddmc/?hl=en"}
                    target="_blank"
                    className="text-[14px] text-[#1E1E1E] font-segoe-ui font-[700] link-effect"
                  >
                    <SocialInstaLogo />
                  </Link>
                </li>

                <li>
                  <Link
                    href={"https://www.facebook.com/grandweld"}
                    target="_blank"
                    className="text-[#1E1E1E] font-segoe-ui text-[14px]  font-[700] link-effect"
                  >
                    <SocialFacebookLogo />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.youtube.com/@grandweld-shipyards"}
                    target="_blank"
                    className="text-[#1E1E1E] font-segoe-ui text-[14px]  font-[700] link-effect"
                  >
                    <Social_YouTube_Logo />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.linkedin.com/company/grandweld-shipyards/"
                    }
                    target="_blank"
                    className="text-[#1E1E1E] font-segoe-ui text-[14px]  font-[700] link-effect"
                  >
                    <INIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://x.com/grandwelddmc"}
                    target="_blank"
                    className="text-[#1E1E1E] font-segoe-ui text-[14px]  font-[700] link-effect"
                  >
                    <SocialXLogo />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="max-w-[488px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.3565066995584!2d55.26127193701479!3d25.265102509920094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f439b4f4ee7b7%3A0x95ae826855bd095e!2sGrandweld%20Shipyards%20%7C%20Shipbuilding%20and%20Ship%20Repair%20Company%20in%20Dubai!5e0!3m2!1sen!2sin!4v1765530043234!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>


          <h2 className="footer-text md:text-[75px] text-[40px] font-[400] md:leading-[78px] leading-[45px] font-segoe-ui mt-[120px]">
            grandweld Shipyards
          </h2>
        </div>
      </footer>

      <div className="container">
        <div className="w-full">
          <div className="footer-btm-link flex items-center gap-[10px] md:justify-between justify-center py-[25px] flex-wrap ">
            <div className="flex items-center gap-[10px] ">
              <h4 className="text-[#000] font-segoe-ui text-[13px] font-[700] ">
                Accreditation
              </h4>
              <div className="flex items-center gap-[30px]">
                <Image
                  src={ISOLogo}
                  alt="iso"
                  width={60}
                  height={55}
                  className="w-[60px] object-contain"
                />
                <Image
                  src={YearsLogo}
                  alt="YearsLogo"
                  width={60}
                  height={55}
                  className="w-[60px] object-contain"
                />
              </div>
            </div>
            <ul className="flex items-center gap-[10px] ">
              <li className="font-segoe-ui">©2025 Grandweld Shipyards</li>

              <span className="border-[#1E1E1E] border-l h-[15px] "></span>

              <li className="font-segoe-ui">
                <a className="font-segoe-ui">©2025 Grandweld Shipyards</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
