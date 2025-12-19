"use client";

import { useEffect } from "react";
import ContactForm from "./ContactForm";

export default function PopupModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative z-10 w-[100%] max-w-[580px] bg-white rounded-xl p-4 transform transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-[22px]"
        >
          ×
        </button>

        
        <ContactForm />
      </div>
    </div>
  );
}
