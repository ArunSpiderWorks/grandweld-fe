"use client";

import Base from "@/components/layout/base";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
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
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff] text-center px-6">
          {/* Ship Icon */}
          <div className="mb-8">
            <Image
              src="/img/Group.png"
              alt="Grandweld Ship"
              width={120}
              height={120}
            />
          </div>

          {/* Title */}
          <h1 className="text-[40px] font-bold md:text-[44px] font-semibold text-[#1E2B32] leading-[1.2] mb-6">
            Thanks for reaching out to <br />
            Grandweld Shipyard!
          </h1>

          {/* Description */}
          <p className="max-w-[560px] font-segoe-ui text-[#6B7280] text-[16px] leading-[28px] mb-10">
            Our team will connect with you shortly. In the meantime, explore our{" "}
            <Link href="/" className="text-[#2C7BE5] hover:underline">
              latest ship building projects
            </Link>
            {" "}
            and see how we’re shaping the future of maritime excellence.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="inline-flex items-center font-segoe-ui gap-3 bg-black leading-[12.17px] text-white px-8 py-3 rounded-full text-[14px] hover:bg-[#222] transition"
          >
            BACK TO HOME
            <span className="text-lg ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </Link>
        </div>
      </Base>
    </>
  );
}
