"use client";

import { ButtonRound } from "./Button";
import { BtnLinkArrow } from "./svgIcons";

export default function ContactForm({}) {
  return (
    <form className="form bg-[#ffffff6e] py-[40px] px-[20px] rounded-[15px]">
      <div className="w-full ">
        <div className="input-block mb-[25px]">
          <input
            type="text"
            name="Company Name"
            placeholder="Company Name"
            className="input-item w-full border py-[12px] px-[20px] bg-[#fff] rounded-[40px] outline-0 border-[#001D21] text-[#4F767C] text-[18px] placeholder:text-[#000]"
          />
        </div>

        <div className="input-block mb-[25px]">
          <input
            type="email"
            name="email"
            placeholder={"Your Email"}
            className="input-item w-full border py-[12px] px-[20px] bg-[#fff] rounded-[40px] outline-0 border-[#001D21] text-[#4F767C] text-[18px] placeholder:text-[#000]"
          />
        </div>
        <div className="input-block mb-[25px]">
          <input
            type="phone"
            name="phone"
            placeholder={"Phone Number"}
            className="input-item w-full border py-[12px] px-[20px] bg-[#fff] rounded-[40px] outline-0 border-[#001D21] text-[#4F767C] text-[18px] placeholder:text-[#000]"
          />
        </div>

        <div className="input-block mb-[25px]">
          <select
            name="service"
            className="input-item w-full border py-[12px] px-[20px] bg-[#fff] rounded-[40px] outline-0 border-[#001D21] text-[#4F767C] text-[18px] placeholder:text-[#000]"
            defaultValue=""
          >
            <option value="" disabled>
              Service Required
            </option>
            <option value="Ship Repair" className="text-[#000]">Ship Repair</option>
            <option value="Ship Building" className="text-[#000]">Ship Building</option>
          </select>
        </div>
      </div>
      <ButtonRound
        text="Get a Quote"
        className="text-[14px] capitalize flex items-center justify-between max-w-[250px] w-full mt-6 text-[#000] border border-[#EEE] bg-[#fff]  "
        arrow={
          <span className="text-white w-[18px] h-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center">
            <BtnLinkArrow />
          </span>
        }
      />
    </form>
  );
}
