import Image from "next/image";
import Base from "@/components/layout/base";
import HomeBanner from "@/components/Home/Banner";
import Service from "@/components/Home/Service";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeAboutLP from "@/components/Home/HomeAboutLP";
import VideoWrapper from "@/components/Home/VideoWrapper";
import IndustryLeaders from "@/components/Home/IndustryLeaders";
import HomeAboutBtm from "@/components/Home/HomeAboutBtm";
import ContactForm from "@/components/common/ContactForm";

export default function Home({}) {
  return (
    <Base>
      <HomeBanner />

      <div>
        <div className="lg:hidden block">
          <ContactForm />
        </div>
      </div>

      <Service />

      <HomeAboutLP />

      <VideoWrapper />

      <HomeAboutBtm />

      <IndustryLeaders />


    </Base>
  );
}
