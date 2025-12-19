"use client";

import { useEffect } from "react";
import ContactForm from "./ContactForm";

export default function PopupModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null; // ✅ IMPORTANT

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()} // 🔥 FIX
        className="relative z-10 w-full max-w-[580px] bg-white rounded-xl p-4"
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
