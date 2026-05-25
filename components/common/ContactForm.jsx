"use client";

import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [enquiryType, setEnquiryType] = useState("");

  // Manually register fields
  register("enquiryType", {
    required: "Please select a category",
  });

  register("phone", {
    required: "Phone number is required",
    minLength: {
      value: 8,
      message: "Enter a valid phone number",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setLoading(true);

    try {
      await axios.post("https://console.omnisellcrm.com/api/leads", {
        orgid: "G-NSK4B",
        branchid: "ffe9a450-7343-4a64-827f-b7686da5655f",
        name: data.company,
        company: data.company,
        email: data.email,
        phone_number: `+${data.phone}`,
        note: data.message,
        extra_data: {
          source: "Website Contact Form",
          category: data.enquiryType,
        },
      });

      reset();
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setLoading(false);
      // if (recaptchaRef.current) {
      //   recaptchaRef.current.reset();
      // }
    }
  };

  return (
    <div className="relative pt-[25px] ">
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#181D23] border border-[#ffff] py-[25px] px-[20px] md:py-[35px] md:px-[30px] rounded-[15px] shadow-2xl relative"
      >
        <div className="w-full">

          <h2 className="text-[#fff] font-segoe-ui lg:text-[26px] text-[22px] font-bold uppercase leading-tight mb-[6px]">
            TELL US YOUR <br />
            <span className="text-[#E31E24]">VESSEL</span> REQUIREMENT
          </h2>
          <p className="text-[#CBD5E1] text-[14px] mb-[24px]">
            Fill out the form and our team will get back to you shortly.
          </p>

          {/* Enquiry Type Dropdown */}
          <div className="input-block mb-[14px]">
            <div className="relative">
              <div className="absolute inset-y-0 left-[15px] flex items-center pointer-events-none text-gray-500 z-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <select
                value={enquiryType}
                onChange={(e) => {
                  const val = e.target.value;
                  setEnquiryType(val);
                  setValue("enquiryType", val, { shouldValidate: true });
                }}
                className="w-full border-none py-[12px] pl-[45px] pr-[40px] bg-[#fff] rounded-[8px] appearance-none cursor-pointer text-[#000] font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
              >
                <option value="" disabled hidden>Choose Categories</option>
                <option value="ship-repair">Ship Repair</option>
                <option value="job-enquiry">Job Enquiry</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-[15px] flex items-center text-gray-500">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {errors.enquiryType && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.enquiryType.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div className="input-block mb-[14px]">
            <div className="relative">
              <div className="absolute inset-y-0 left-[15px] flex items-center pointer-events-none text-gray-500 z-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              <input
                {...register("company", {
                  required: "Company name is required",
                })}
                placeholder="Company Name"
                className="w-full border-none py-[12px] pl-[45px] pr-[20px] bg-[#fff] rounded-[8px] text-[#000] font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#E31E24] placeholder:font-normal"
              />
            </div>
            {errors.company && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="input-block mb-[14px]">
            <div className="relative">
              <div className="absolute inset-y-0 left-[15px] flex items-center pointer-events-none text-gray-500 z-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="Your Email"
                className="w-full border-none py-[12px] pl-[45px] pr-[20px] bg-[#fff] rounded-[8px] text-[#000] font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#E31E24] placeholder:font-normal"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="input-block mb-[14px]">
            <div className="relative">
              <div className="absolute inset-y-0 left-[15px] flex items-center pointer-events-none text-gray-500 z-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <PhoneInput
                country="ae"
                enableSearch
                containerStyle={{ width: '100%' }}
                inputStyle={{ 
                  width: '100%', 
                  height: '48px', 
                  borderRadius: '8px', 
                  border: 'none', 
                  paddingLeft: '90px', 
                  fontSize: '15px', 
                  fontWeight: '500',
                  color: '#000'
                }}
                buttonStyle={{ 
                  borderRadius: '8px 0 0 8px', 
                  border: 'none', 
                  backgroundColor: 'transparent', 
                  paddingLeft: '45px',
                  zIndex: 5
                }}
                onChange={(value) =>
                  setValue("phone", value, {
                    shouldValidate: true,
                  })
                }
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="input-block mb-[24px]">
            <div className="relative">
              <div className="absolute top-[14px] left-[15px] flex items-center pointer-events-none text-gray-500 z-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Enter your message"
                className="w-full border-none py-[12px] pl-[45px] pr-[20px] bg-[#fff] rounded-[8px] resize-none text-[#000] font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#E31E24] placeholder:font-normal"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E31E24] hover:bg-red-700 text-white text-[16px] font-bold uppercase py-[12px] rounded-[8px] flex items-center justify-center relative transition-colors duration-300 shadow-md"
        >
          {loading ? "Submitting..." : "Request Repair Quote"}
          {!loading && (
            <span className="absolute right-[12px] w-[26px] h-[26px] rounded-full bg-white flex items-center justify-center text-[#E31E24]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </span>
          )}
        </button>

        <div className="flex items-center justify-center gap-[6px] mt-[16px]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span className="text-[#CBD5E1] text-[12px]">Your information is secure and will never be shared.</span>
        </div>
      </form>
    </div>
  );
}
