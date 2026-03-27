"use client";

import faqData from "../data/faqData.json";
import { Mail, Phone, Globe } from "lucide-react";

export default function CourseCTA() {
  const { email, phone, applyUrl } = faqData.contact;

  return (
    <section className="bg-[#fff] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-gradient-to-r from-[#0F1E3D] to-[#0D3B5C] rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 🔥 Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              Still Have{" "}
              <span className="text-teal-400 italic">Questions?</span>
            </h2>

            <p className="text-gray-300 mt-2 text-base md:text-lg max-w-xl">
              If you have not found the answer you are looking for, our
              admissions team is happy to help.
            </p>

            {/* 🔥 Contact Info */}
            <div className="mt-5 space-y-3 text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-400" />
                <a
                  href={`tel:${phone}`}
                  className="hover:text-white transition"
                >
                  {phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={18} className="text-teal-400" />
                <a
                  href={applyUrl}
                  target="_blank"
                  className="hover:text-white transition"
                >
                  {applyUrl.replace("https://", "")}
                </a>
              </div>
            </div>
          </div>

          {/* 🔥 CTA Button */}
          <a
            href={applyUrl}
            target="_blank"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <Globe size={18} />
            APPLY NOW
          </a>
        </div>
      </div>
    </section>
  );
}
