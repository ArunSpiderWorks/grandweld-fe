import Image from "next/image";
import AboutShipImg from "@/public/img/LP/about-ship-img.png";
import { ButtonRound } from "../common/Button";
import { H2, P } from "../common/Styling";
import { BtnLinkArrow, PriceStar } from "../common/svgIcons";
import IndustryLeadersItems from "./IndustryLeadersItems";
import Client01 from "@/public/img/LP/image-1.webp";
import Client02 from "@/public/img/LP/image-2.webp";
import Client03 from "@/public/img/LP/image-3.webp";
import Client04 from "@/public/img/LP/image-4.webp";
import Client05 from "@/public/img/LP/image-5.webp";
import Client06 from "@/public/img/LP/image-6.webp";
import Client07 from "@/public/img/LP/image-7.webp";
import Client08 from "@/public/img/LP/image-8.webp";
import Client09 from "@/public/img/LP/image-9.webp";
import Client10 from "@/public/img/LP/image-10.webp";
import Client11 from "@/public/img/LP/image-11.webp";
import Client12 from "@/public/img/LP/image-12.gif";
import Client13 from "@/public/img/LP/image-13.webp";
import Client14 from "@/public/img/LP/image-14.webp";
import Client15 from "@/public/img/LP/image-15.webp";
import LogoLoop from "@/components/common/LogoLoop";

const clientImages = [
  Client01,
  Client02,
  Client03,
  Client04,
  Client05,
  Client06,
  Client07,
  Client08,
  Client09,
  Client10,
  Client11,
  Client12,
  Client13,
  Client14,
  Client15,
];

export default function IndustryLeaders() {
  return (
    <section id="IndustryLeaders" className="relative py-[50px] bg-[#212121]">
      <div className="container">
        <div className="w-full">
          <h2 className="text-[#fff] font-segoe-ui text-[28px] font-[600] leading-[33px] uppercase max-w-[287px]">
            Trusted by Industry Leaders
          </h2>
        </div>
      </div>

      <div className="IndustryLeaders-list-block py-[80px] border-t border-[#6C6C6C] border-b mt-[50px] h-[200px]">
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={clientImages}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            // fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>

      <div className="container ">
        <div className="w-full">
          <div className="flex justify-between items-center gap-[20px] mt-[50px] flex-wrap">
            <h5 className="text-[#fff] font-segoe-ui text-[15px] font-[400] leading-[19px] max-w-[476px] tracking-[-0.15px]">
              Our ship repair teams focus on long-term relationships that are
              built on integrity and the highest commitment to deliver. We know
              from our four decades of service that relationships with these
              values are the key to delighting our customers. 
            </h5>
            <ButtonRound
              text="Get a Quote"
              className="text-[13px] max-w-[193px] w-full capitalize flex items-center justify-between w-full text-[#2C0C0C] "
              arrow={
                <span className="text-white w-[18px] h-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center">
                  <BtnLinkArrow />
                </span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
