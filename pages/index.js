import Image from "next/image";
import Base from "@/components/layout/base";
import HomeBanner from "@/components/Home/Banner";
import Service from "@/components/Home/Service";
import HomeAboutLP from "@/components/Home/HomeAboutLP";
import VideoWrapper from "@/components/Home/VideoWrapper";
import IndustryLeaders from "@/components/Home/IndustryLeaders";
import HomeAboutBtm from "@/components/Home/HomeAboutBtm";
import ContactForm from "@/components/common/ContactForm";
import HomeVideoSection from "@/components/Home/HomeVideoSection";
import VesselsWeRepair from "@/components/Home/vessel";
import Thankyou from "@/pages/thank-you";
import Head from "next/head";
import PopupForm from "@/components/common/PopupForm";

export default function Home({ }) {
  return (
    <>
      <Head>
        <title>
          Grandweld Shipping | Shipbuilding & Ship Repair services | Trusted
          Marine Experts
        </title>

        <meta
          name="description"
          content="Grandweld delivers world-class shipbuilding and ship repair services backed by 40+ years of marine engineering excellence and trusted global expertise."
        />

        <meta
          name="keywords"
          content="ship repair companies in dubai, ship repair companies in uae, shipbuilding and repair companies in uae, marine companies in uae, marine services companies in uae, maritime companies in dubai, dry dock company dubai, drydocks world company dubai, drydocks world dubai united arab emirates, ship maintenance companies in uae, ship management companies in uae, ship repair and maintenance companies in uae, ship maintenance companies in dubai, offshore marine companies in uae, offshore supply vessel companies in uae, shipyard company in dubai	yacht, maintenance company dubai"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Grandweld Shipping | Shipbuilding & Ship Repair services  | Trusted Marine Experts"
        />
        <meta
          property="og:description"
          content="Grandweld delivers world-class shipbuilding and ship repair services backed by 40+ years of marine engineering excellence and trusted global expertise."
        />
        <meta property="og:locale" content="en_AE" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5VBLGMW8');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <Base>
        <HomeBanner />

        <div>
          <div className="lg:hidden block">
            <ContactForm />
          </div>
        </div>

        <Service />
        <VesselsWeRepair />

        <HomeAboutLP />

        <VideoWrapper />

        <HomeAboutBtm />

        <HomeVideoSection />
        <IndustryLeaders />
        <PopupForm />
      </Base>
    </>
  );
}
