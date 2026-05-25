"use client";

import Image from "next/image";

import ServiceImg05 from "@/public/img/LP/new/Drydockings.jpg";
import ServiceImg06 from "@/public/img/LP/new/Afloat repairs.jpeg";
import ServiceImg07 from "@/public/img/LP/new/Workshop-repairs.png";
import ServiceImg08 from "@/public/img/LP/new/Deck-upgrades.jpg";
import ServiceImg09 from "@/public/img/LP/new/propulson.png";
import ServiceImg10 from "@/public/img/LP/new/Hull-upgrades.jpg";
import ServiceImg11 from "@/public/img/LP/new/Refits-and-Greentech-upgrades-scaled.jpg";

import { ButtonRound } from "../common/Button";
import { H2 } from "../common/Styling";
import { BtnLinkArrow } from "../common/svgIcons";
import PopupModal from "../common/PopupModal";
import { useState } from "react";

const serviceData = [
 
  {
    id: 5,
    title: "DRYDOCKINGS",
    imageSrc: ServiceImg05,
    bgImage: "/img/bg-san.png",
    buttonText: "Request Drydock Slot",
    description: [
      "Grandweld carries out ship repair services for a wide range of vessels using DMC’s UAE-based drydock facilities. The drydocking setup provides exceptional flexibility through a combination of synchro-lifts and a rail-mounted drydock cradle system, enabling vessels to be moved to up to 30 different dry berth locations. With our workshops located right next to the dry berths, repairs are completed efficiently and with minimal downtime.",
    ],
  },
  {
    id: 6,
    title: "AFLOAT REPAIRS",
    imageSrc: ServiceImg06,
    bgImage: "/img/bg-san2.jpg",
    buttonText: "Request Afloat Assistance",
    description: [
      "Grandweld’s riding teams deploy from our Dubai shipyard to vessels located at other ports across the UAE. We understand that afloat repairs require speed, careful planning, and flexibility to minimise downtime. Our teams regularly operate in Abu Dhabi, Dubai, Jebel Ali, Sharjah, Hamriyah, and Ras Al Khaimah, making us a reliable choice for your next afloat ship repair service.",
    ],
  },
  {
    id: 7,
    title: "WORKSHOP REPAIRS",
    imageSrc: ServiceImg07,
      bgImage: "/img/bg-san.png",
    buttonText: "Request Repair Support",
    description: [
      "Our strong in-house capabilities cover machinery repairs and marine engine overhauls, electrical troubleshooting and rewinding, steel fabrication, corrosion repair and protective coatings, interior fit-out and carpentry, propeller repairs, precision machining services, and alignment work. Many clients choose us for ship repair services because our in-house approach ensures full accountability, consistent quality, and dependable delivery across every project.",
    ],
  },
  {
    id: 8,
    title: "DECK UPGRADES",
    imageSrc: ServiceImg08,
 bgImage: "/img/bg-san2.jpg",
    buttonText: "Discuss Deck Enhancement",
     description: [
      "Grandweld’s UAE shipyard has successfully delivered numerous deck upgrade projects, including the installation of new helidecks, accommodation modules, and other deck equipment. Such upgrades demand a shipyard with strong engineering expertise, skilled teams, and the capability to manage complex ship repair projects. Our Dubai-based shipyard also benefits from its location within a global logistics hub, ensuring fast and efficient delivery of materials and components to our Dubai drydock.",
    ],
  },
  {
    id: 9,
    title: "PROPULSION UPGRADES",
    imageSrc: ServiceImg09,
       bgImage: "/img/bg-san.png",
    buttonText: "Request Propulsion Support",
    description: [
      "Our shipyard has extensive experience in upgrading ship propulsion systems to meet modern operational requirements. The offshore sector operates high-specification OSVs, and as oil majors demand more advanced vessels, existing fleets often need propulsion upgrades to remain compliant. Our UAE shipyard has successfully completed numerous DP2 and DP3 upgrades, including the installation of thrusters and advanced propulsion engines.",
    ],
  },
  {
    id: 10,
    title: "HULL UPGRADES",
    imageSrc: ServiceImg10,
     bgImage: "/img/bg-san2.jpg",
    buttonText: "Discuss Hull Upgrade",
    description: [
      "Grandweld has completed a wide range of hull upgrade projects, including hull extensions, bow and stern modifications, and appendage installations. DMC’s synchro-lift system, combined with rail transport, allows vessels to be lifted efficiently and positioned accurately for complex ship repair work. The proximity of our fabrication halls within the Dubai shipyard also enables hull blocks to be pre-fabricated and transferred to site quickly and smoothly.",
    ],
  },
  {
    id: 11,
    title: "REFITS AND GREENTECH UPGRADES",
    imageSrc: ServiceImg11,
       bgImage: "/img/bg-san.png",
    buttonText: "Request Upgrade Consultation",
    description: [
      "Whether the requirement is Ballast Water Treatment Systems, hybrid propulsion solutions, or more efficient hull forms and ship designs, we have the experience to support your project. Grandweld is recognised for strong engineering and design capabilities that set us apart from other ship repair yards. Our Dubai-based shipyard’s in-house team works closely with clients to develop greentech installation designs in advance and prefabricate components before vessel arrival, ensuring faster and more efficient installation.",
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

        <div className="w-full mt-[40px] grid grid-cols-1 gap-[40px] service-list-item-block">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className={`md:px-[90px] mb-[40px] service-list-item-block-item`}
              // service.id === 3 ? "lg:-7/12 w-full " : "lg:w-6/12 w-full"
              // }
            >
              <div className="service-list-item flex items-center justify-between rounded-lg overflow-hidden shadow-lg h-full">
                <div className="service-list-item-img sm:w-6/12 w-full relative h-full min-h-[300px]">
                  <Image 
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority={service.id === 1}
                  />
                </div>

                <div
                  className="service-list-item-details sm:w-6/12 w-full py-[30px] px-[24px] relative h-full"
                  style={{
                    backgroundImage: `url('${service.bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "",
                    backgroundRepeat: "no-repeat",
                    width: "full",
                  }}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="grow">
                      <h3 className="text-[#1E1E1E] font-bold text-[16px] md:text-[18px] font-[800] leading-[16px] md:leading-[18px] capitalize">
                        {service.title}
                      </h3>
                      <hr className="border-[#BFB6A8] mt-[6px] mb-[9px]" />
                      <ul className="flex items-center gap-[10px] flex-wrap">
                        {Array.isArray(service?.description) &&
                          service.description.map((desc, index) => (
                            <p
                              key={`desc-${index}`}
                              className="text-[#1E1E1E] text-[12px] md:text-[14px] font-segoe-ui font-[500] leading-[18px] md:leading-[22px] rounded backdrop-blur-sm
"
                            >
                              {desc}
                            </p>
                          ))}
                        {Array.isArray(service?.items) &&
                          service.items.map((item, index) => (
                            <li
                              key={`item-${index}`}
                              className="text-[#636262] text-[12px] md:text-[14px] font-segoe-ui font-[600] leading-[16px] md:leading-[18px] bg-white/60 px-3 py-1 rounded backdrop-blur-sm"
                            >
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <ButtonRound
                      text={service.buttonText || "Enquire Now"}
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
