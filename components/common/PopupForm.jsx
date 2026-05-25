"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    let isScrolling = false;

    const onScroll = () => {
      isScrolling = true;
    };

    window.addEventListener("scroll", onScroll);

    const interval = setInterval(() => {
      if (isScrolling) {
        if (!document.body.classList.contains("modal-open")) {
          setIsOpen((prev) => {
            if (!prev) return true;
            return prev;
          });
        }
        isScrolling = false;
      }
    }, 10000); // Every 10 seconds

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto">
        {/* Contact Form */}
        <ContactForm />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[35px] right-[25px] z-[60] p-2 bg-[#E31E24] text-white rounded-full hover:bg-red-700 transition-colors shadow-md flex items-center justify-center"
          aria-label="Close form"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
