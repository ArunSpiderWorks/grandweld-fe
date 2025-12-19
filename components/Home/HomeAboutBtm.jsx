import Image from "next/image";
import AboutBtmMainImg from "@/public/img/LP/about-btm-main.jpg";
import AboutBtmSubImg01 from "@/public/img/LP/about-btm-sub-01.jpg";
import AboutBtmSubImg02 from "@/public/img/LP/about-btm-sub-02.jpg";
import AboutBtmSubImg03 from "@/public/img/LP/about-btm-sub-03.jpg";
import { ButtonRound } from "../common/Button";
import { H2, P } from "../common/Styling";
import { BtnLinkArrow } from "../common/svgIcons";
import { useState } from "react";
import PopupModal from "../common/PopupModal";
export default function HomeAboutBtm() {

    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="HomeAboutBtm" className="relative pt-[50px] pb-[100px]">
      <div className="container">
        <div className="flex  flex-wrap ">
          <div className="w-full  md:pb-[100px] pb-[50px]">
            <h3 className="text-[#1E1E1E] font-segoe-ui md:text-[38px] text-[30px] font-[400] md:leading-[55px] tracking-[-0.38px] leading-[45px]">
              Grandweld is a fully integrated shipyard based in the UAE,
              offering shipbuilding, ship repair, and engineering solutions. It
              serves the global offshore and marine industry with a strong
              legacy of excellence and innovation.
            </h3>
          </div>
        </div>

        <div className="grid w-full md:grid-cols-2 gap-[45px]">
          <div className="about-btm-block-img relative">
            <Image
              src={AboutBtmMainImg}
              alt="AboutBtmMainImg"
              width={660}
              height={478}
              className="w-full object-cover"
            />

            <div className="grid grid-cols-3 gap-[2px]">
              <Image
                src={AboutBtmSubImg01}
                alt="AboutBtmSubImg01"
                width={214}
                height={258}
                className="w-full object-cover rounded-[5px] border md:h-[258px] h-[180px] border-[#fff]"
              />
              <Image
                src={AboutBtmSubImg02}
                alt="AboutBtmSubImg01"
                width={214}
                height={258}
                className="w-full object-cover rounded-[5px] border md:h-[258px] h-[180px] border-[#fff]"
              />
              <Image
                src={AboutBtmSubImg03}
                alt="AboutBtmSubImg01"
                width={214}
                height={258}
                className="w-full object-cover rounded-[5px] border md:h-[258px] h-[180px] border-[#fff]"
              />
            </div>

            <div className="absolute bottom-[0px] left-0 w-full p-[30px]">
              <ButtonRound
                text="Get a Quote"
                     onClick={() => setIsModalOpen(true)}
                className="text-[14px] capitalize flex items-center justify-between w-full mt-6 text-[#000] border border-[#EEE] bg-[#fff] hover:bg-[#000] text-[#050505] hover:text-[#fff] w-full "
                arrow={
                  <span className="text-white w-[18px] h-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center">
                    <BtnLinkArrow />
                  </span>
                }
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="about-statics">
              <div className="border-b border-[#1E1E1E] pb-[12px] flex items-center justify-between mb-[80px]">
                <h3 className="font-segoe-ui pr-[15px]">Since 1982</h3>

                <p className="font-segoe-ui max-w-[360px]">
                  Grandweld Shipyards has been providing{" "}
                  <b>
                    world-class shipbuilding, repair and marine engineering
                    solutions
                  </b>{" "}
                  from Dubai.
                </p>
              </div>

              <div className="border-b border-[#1E1E1E] pb-[12px] flex items-center justify-between mb-[80px]">
                <h3 className="font-segoe-ui pr-[15px]">
                  40+ years
                </h3>

                <p className="font-segoe-ui max-w-[360px]">
                  Backed by{" "}
                  <b>
                    40+ years of experience, we deliver reliable shipbuilding,
                    repair, conversion, and offshore marine engineering
                    solutions worldwide.
                  </b>
                </p>
              </div>
            </div>

            <div className="">
              <div className="about-statics-bg grid grid-cols-2 py-[25px] items-center rounded-[2px]">
                <div className="py-[52px] border-r border-[#FFF] px-[30px]">
                  <h3 className="text-[#fff] font-segoe-ui text-[54px] font-[400] leading-[51px] mb-[15px] ">
                    300+
                  </h3>
                  <p className="text-[#fff] font-segoe-ui text-[15px] font-[400] leading-[23px]">
                    Successfully delivered Vessels to clients across the globe.
                  </p>
                </div>

                <div className="py-[52px] px-[30px]">
                  <h3 className="text-[#fff] font-segoe-ui text-[54px] font-[400] leading-[51px] mb-[15px]">
                    30k+
                  </h3>
                  <p className="text-[#fff] font-segoe-ui text-[15px] font-[400] leading-[23px]">
                    Successfully delivered Vessels to clients across the globe.
                  </p>
                </div>
              </div>

              <div className="bg-[#EDF5FF] px-[18px] pt-[56px] pb-[22px] rounded-[2px]">
                <h4 className="text-[#000] font-segoe-ui text-[14px] font-[400] ">
                  Accreditations
                </h4>

                <div className="flex gap-[15px] flex-wrap mt-[16px]">
                  <div className="bg-[#0000005E] rounded-[48px] text-[#fff] font-segoe-ui text-[14px] font-[600] px-[15px] py-[3px]">
                    iSO 9001:2015
                  </div>
                  <div className="bg-[#0000005E] rounded-[48px] text-[#fff] font-segoe-ui text-[14px] font-[600] px-[15px] py-[3px]">
                    iSO 45001:2015
                  </div>
                  <div className="bg-[#0000005E] rounded-[48px] text-[#fff] font-segoe-ui text-[14px] font-[600] px-[15px] py-[3px]">
                    iSO 14001:2018
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
