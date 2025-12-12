import Image from "next/image";
import HomeBannerImg from "@/public/img/LP/home-banner.jpg";
import { ButtonRound } from "../common/Button";
import { H1 } from "../common/Styling";
import ContactForm from "../common/ContactForm";
export default function HomeBanner({}) {
  return (
    <section id="home-banner" className="relative min-h-[600px] h-screen">
      <div className="home-banner-img h-full ">
        <Image
          src={HomeBannerImg}
          alt="HomeBannerImg"
          width={1600}
          height={750}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="home-banner-content-block absolute bottom-[50px] w-full">
        <div className="container">
          <div className="flex mx-[-15px] flex-wrap items-end">
            <div className="lg:w-6/12 w-full px-[15px]">
              <div className="home-banner-content-block-left">
                <ButtonRound text="Since 1982" className="text-[13px]" />

                <h1 className="text-[#fff] font-segoe-ui lg:text-[64px] text-[50px] font-[400] lg:leading-[64px] leading-[50px] tracking-[-0.64px] mt-[15px]">
                  World-Class <strong>Shipbuilding & Ship Repair</strong>{" "}
                  Services in Dubai
                </h1>

                <p className="text-[#fff] font-segoe-ui text-[16px] font-normal leading-[24px] tracking-[-0.32px] mt-[35px]">
                  With over 40 years of industry expertise, we deliver precision
                  engineering, timely project execution, and exceptional
                  maritime solutions.
                </p>
              </div>
            </div>
            <div className="lg:w-6/12 w-full px-[15px]">
              <div className="lg:block hidden">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
