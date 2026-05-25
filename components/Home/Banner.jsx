import Image from "next/image";
import HomeBannerImg from "@/public/img/LP/new/home-banner.jpg";
import { ButtonRound } from "../common/Button";
import { H1 } from "../common/Styling";
import ContactForm from "../common/ContactForm";

export default function HomeBanner({ }) {
  return (
    <section id="home-banner" className="relative pt-[120px] pb-[60px] lg:pb-[80px] flex items-center">
      <div className="home-banner-img h-full absolute inset-0 z-0">
        <Image
          src={HomeBannerImg}
          alt="HomeBannerImg"
          width={1600}
          height={750}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="home-banner-content-block relative w-full z-10">
        <div className="container">
          <div className="flex mx-[-15px] flex-wrap items-end justify-between gap-y-10">
            <div className="lg:w-7/12 xl:w-7/12 w-full px-[15px]">
              <div className="home-banner-content-block-left md:block hidden relative">
                <div className="inline-flex items-center border border-[#E31E24]/80 rounded-[4px] relative mb-[20px]">
                  {/* Thin line passing through the middle of the text, but let's just make it a nice bordered pill as it looks in standard. Actually it looks like text with lines on left and right. */}
                  <div className="absolute left-0 top-1/2 -translate-x-full w-[40px] h-[1px] bg-[#E31E24]"></div>
                  <div className="absolute right-0 top-1/2 translate-x-full w-[40px] h-[1px] bg-[#E31E24]"></div>
                  <div className="bg-[#000]/60 px-[15px] py-[6px] rounded-[4px] border border-[#E31E24]/50">
                    <span className="text-[#E2E8F0] text-[13px] font-semibold tracking-widest uppercase">
                      SHIP REPAIR & MAINTENANCE EXPERTS
                    </span>
                  </div>
                </div>

                <h1 className="text-[#fff] font-segoe-ui xl:text-[68px] lg:text-[50px] text-[40px] font-[700] lg:leading-[1.1] leading-[1.2] tracking-tight mb-[20px]">
                  Reduce Vessel<br />
                  Downtime With<br />
                  Expert Ship Repair<br />
                  In <span className="text-[#E31E24]">Dubai</span>
                </h1>

                <p className="text-[#E2E8F0] font-segoe-ui text-[20px] font-normal leading-[1.5] mb-[40px] max-w-[600px]">
                  Drydock, Afloat Repairs, Maintenance & Refit Services<br />With 40+ Years Of Experience.
                </p>

                {/* Icons Row */}
                <div className="flex items-center w-full divide-x divide-white/20 mt-[20px]">
                  <div className="flex items-center gap-[10px] pr-[15px]">
                    <div className="text-[#E31E24]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-[15px] leading-tight whitespace-nowrap">40+</div>
                      <div className="text-[#CBD5E1] text-[12px] whitespace-nowrap">Years Experience</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[10px] px-[15px]">
                    <div className="text-[#E31E24]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-[15px] leading-tight whitespace-nowrap">24/7</div>
                      <div className="text-[#CBD5E1] text-[12px] whitespace-nowrap">Emergency Support</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[10px] px-[15px]">
                    <div className="text-[#E31E24]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-[15px] leading-tight whitespace-nowrap">Dubai Maritime City</div>
                      <div className="text-[#CBD5E1] text-[12px] whitespace-nowrap">Strategic Location</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[10px] pl-[15px]">
                    <div className="text-[#E31E24]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-[15px] leading-tight whitespace-nowrap">Trusted By</div>
                      <div className="text-[#CBD5E1] text-[12px] whitespace-nowrap">Global Operators</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 w-full px-[15px]">
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
