import Image from "next/image";
import AboutShipImg from "@/public/img/LP/about-ship-img.png";
import { ButtonRound } from "../common/Button";
import { H2, P } from "../common/Styling";
import { BtnLinkArrow, PriceStar } from "../common/svgIcons";

export default function VideoWrapper() {
  return (
    <section id="VideoWrapper" className="relative ">
      <div className="video-wrapper-block relative">
        <div className="z-10 video-wrapper-text-block py-[65px] w-full absolute top-0 left-[50%] transform translate-x-[-50%]">
          <H2
            text="Repairs & Conversions at our Shipyard"
            className="text-[#fff] max-w-[487px] m-auto text-center"
          />
        </div>
        <div className="video-wrapper-video-block">
          <video
            className="w-full h-screen min-h-[500px] object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/wrapper-video.mp4" type="video/mp4" />
            <source src="/videos/wrapper-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrppaer-text-block py-[65px] w-full absolute bottom-0 left-[50%] transform translate-x-[-50%]">
          <div className="container">
            <div className="flex justify-between items-center gap-[20px] flex-wrap">
              <div className="flex items-center gap-[16px]">
                <div className="">
                  <h3 className="text-[43.191px] leading-[35px] font-segoe-ui font-[600] capitalize flex items-start gap-[5px]">
                    24*7
                    <sup>
                      <PriceStar />
                    </sup>
                  </h3>
                  <h6 className="text-[#BDE5FF] mt-[10px] font-segoe-ui text-[12px] font-[600] leading-[22px] capitalize">
                    commitment
                  </h6>
                </div>

                <h5 className="text-[#fff] font-segoe-ui text-[15px] font-[400] leading-[19px] max-w-[543px] tracking-[-0.15px]">
                  Our ship repair teams focus on long-term relationships that
                  are built on integrity and the highest commitment to deliver.
                  We know from our four decades of service that relationships
                  with these values are the key to delighting our customers. 
                </h5>
              </div>

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
      </div>
    </section>
  );
}
