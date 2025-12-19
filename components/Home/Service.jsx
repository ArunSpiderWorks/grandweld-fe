"use client";

import Image from "next/image";
import ServiceImg01 from "@/public/img/LP/service-img-01.png";
import ServiceImg02 from "@/public/img/LP/service-img-02.png";
import ServiceImgBg01 from "@/public/img/LP/list-bg-01.png";
import ServiceImgBg02 from "@/public/img/LP/list-bg-02.png";
import ServiceImg03 from "@/public/img/LP/service-img-03.png";
import { ButtonRound } from "../common/Button";
import { H2 } from "../common/Styling";
import { BtnLinkArrow } from "../common/svgIcons";
import PopupModal from "../common/PopupModal";
import { useState } from "react";

const serviceData = [
  {
    id: 1,
    title: "Ship Repair Services",
    imageSrc: ServiceImg01,
    bgImage: "/img/LP/list-bg-01.png",
    items: [
      "Offshore Vessel Repairs",
      "Superyacht Repair",
      "Naval Vessels",
      "Merchant Ships",
      "Drydockings",
      "Afloat repairs",
      "Workshop repairs",
      "Deck upgrades",
      "Propulsion upgrades",
      "Hull upgrades",
      "Refits and Greentech upgrades",
    ],
  },
  {
    id: 2,
    title: "Ship Building ",
    imageSrc: ServiceImg02,
    bgImage: "/img/LP/list-bg-02.png",
    items: [
      "Crewboats / Crew Transfer Vessels (CTVs) & Security Boats",
      "Pilot Boats",
      "Fast Ferries",
      "OSVs (Offshore Support Vessels) & Workboats",
      "Harbour & Terminal Tugs",
      "Shadow Yachts / Specialty Vessels",
    ],
  },
  {
    id: 3,
    title: "Grandweld Capabilities List",
    imageSrc: ServiceImg03,
    bgImage: "/img/LP/list-bg-02.png",
    items: [
      "Conversion Projects",
      "Engineering & Design",
      "Shipbuilding",
      "Drydocking Services",
      "Green-Tech Services",
      "Fabrication Services",
      "Surface Treatment Services",
      "Machining Services",
      "Propulsion Services",
      "Electrical & Automation Services",
      "Interior Outfitting & Joinery",
      "4-Stroke Engine Services",
      "2-Stroke Engine Services",
    ],
  },
];

export default function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="service" className="relative md:pt-[100px] py-[50px]">
      <div className="container">
        <div className="flex mx-[-15px] flex-wrap">
          <div className="w-full px-[15px]">
            <H2 text="Our Services" className="text-center" />
          </div>
        </div>

        <div className="w-full mt-[40px] flex items-center justify-center flex-wrap md:mx-[-20px]">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className={`md:px-[20px] mb-[40px] w-full ${
                service.id === 3 ? "lg:w-7/12 w-full" : "lg:w-6/12 w-full"
              }`}
            >
              <div className="service-list-item grid grid-cols-12 rounded-lg overflow-hidden shadow-lg h-full">
                <div className="service-list-item-img sm:col-span-6 col-span-12 relative">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    width={340}
                    height={400}
                    className="w-full object-cover sm:min-h-[400px] sm:h-full h-[300px] min-h-[300px]"
                    priority={service.id === 1}
                  />
                </div>

                <div
                  className="service-list-item-details sm:col-span-6 col-span-12 py-[30px] px-[24px] relative"
                  style={{
                    backgroundImage: `url('${service.bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-[#1E1E1E] font-segoe-ui text-[18px] font-[600] leading-[18px] capitalize">
                        {service.title}
                      </h3>
                      <hr className="border-[#BFB6A8] mt-[6px] mb-[9px]" />
                      <ul className="flex items-center gap-[10px] flex-wrap">
                        {service.items.map((item, index) => (
                          <li
                            key={index}
                            className="text-[#1E1E1E] text-[14px] font-segoe-ui font-[400] leading-[18px] bg-white/40 px-3 py-1 rounded backdrop-blur-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ButtonRound
                      text="Get a Quote"
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#fff] hover:bg-[#000] text-[#050505] hover:text-[#fff] text-[14px] capitalize flex items-center justify-between w-full mt-6"
                      arrow={
                        <span className="text-white w-[18px] h-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center">
                          <BtnLinkArrow />
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
