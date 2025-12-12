import Image from "next/image";
import AboutShipImg from "@/public/img/LP/about-ship-img.png";
import { ButtonRound } from "../common/Button";
import { H2, P } from "../common/Styling";
import { BtnLinkArrow } from "../common/svgIcons";

export default function HomeAboutLP() {
  return (
    <section id="HomeAbout" className="relative pb-[100px]">
      <div className="container">
        <div className="flex mx-[-15px] flex-wrap ">
          <div className="w-full px-[15px] ">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[40px] justify-between items-end relative md:px-[60px]">
              <div className="HomeAbout-title lg:max-w-[560px] w-full">
                <H2 text="Our Engineering Department" />

                <P
                  className="mt-[13px]"
                  text="With 40+ years of expertise since 1982, Grandweld operates one of the most advanced and trusted shipyards in Dubai Maritime City. Our 55,000 m² integrated facility is engineered to deliver world-class shipbuilding, ship repair, and vessel conversion with unmatched precision and efficiency."
                />
                <P
                  className="mt-[13px]"
                  text="Built on decades of proven performance, the yard features modern workshops, covered fabrication areas, outfitting zones, dedicated storage sections, and high-capacity ship lifts — enabling us to manage multiple large-scale projects simultaneously."
                />
                <P
                  className="mt-[13px]"
                  text="We collaborate with leading global marine suppliers, classification societies, and industry partners, ensuring every vessel meets the highest standards of safety, engineering excellence, and compliance. Supported by a highly experienced workforce and strict QHSE practices, we guarantee reliable timelines, superior workmanship, and long-term value for our clients."
                />

                <ButtonRound
                  text="Get a Quote"
                  className="text-[14px] capitalize flex items-center justify-between max-w-[242px] w-full mt-6 text-[#000] border border-[#EEE]"
                  arrow={
                    <span className="text-white w-[18px] h-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center">
                      <BtnLinkArrow />
                    </span>
                  }
                />
              </div>

              <div className="">
                <div className="about-ship-img-block ">
                  <Image
                    src={AboutShipImg}
                    alt="AboutShipImg"
                    width={702}
                    height={534}
                    className="w-full object-contain"
                  />
                </div>

                <div className="grid gap-[5px] md:grid-cols-3 grid-cols-1">
                  <div className="bg-[#F8F2E8] md:max-w-[200px] rounded-[6px] py-[15px] px-[18px]">
                    <h3 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[600] capitalize">
                      Marine Systems Engineering
                    </h3>
                    <hr className="border-[#BFB6A8] mt-[10px] mb-[15px]" />

                    <h5 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[400] leading-[18px] tracking-[0.13px]">
                      Modern, efficient, and reliable ship solutions.
                    </h5>
                  </div>

                  <div className="bg-[#E8F1F8] md:max-w-[200px] rounded-[6px] py-[15px] px-[18px]">
                    <h3 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[600] capitalize">
                      CAD/CAM & 3D Modeling
                    </h3>
                    <hr className="border-[#BFB6A8] mt-[10px] mb-[15px]" />

                    <h5 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[400] leading-[18px] tracking-[0.13px]">
                      Smooth process from design to delivery.
                    </h5>
                  </div>

                  <div className="bg-[#E8F8EB] md:max-w-[200px] rounded-[6px] py-[15px] px-[18px]">
                    <h3 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[600] capitalize">
                      Sustainable Engineering
                    </h3>
                    <hr className="border-[#BFB6A8] mt-[10px] mb-[15px]" />

                    <h5 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[400] leading-[18px] tracking-[0.13px]">
                      Eco-friendly and future-ready ships.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
