"use client";

import { ArrowRight, Download } from "lucide-react";

/* ---------- DATA ---------- */

const ctaContent = {
  tag: "International Admissions Open",
  title: "START YOUR JOURNEY",
  highlight: "AT PRESIDENCY UNIVERSITY",
  description:
    "Join a globally connected campus in Bangalore offering world-class undergraduate, postgraduate, and doctoral programmes designed for future leaders.",
  primaryBtn: "Apply Now",
  secondaryBtn: "Download Prospectus",
};

/* ---------- COMPONENT ---------- */

export function CTASection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden text-center">
      {/* SOFT GLOW */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#ff8c42]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* TAG */}
        <span className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-4 py-2 rounded-full mb-6">
          {ctaContent.tag}
        </span>

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl text-[#1e3a5f] mb-6 leading-tight">
          {ctaContent.title}
          <span className="block text-[#ff8c42]">{ctaContent.highlight}</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          {ctaContent.description}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#ff8c42] hover:bg-[#e67a32] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 transition shadow-lg">
            {ctaContent.primaryBtn}
            <ArrowRight size={18} />
          </button>

          <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-full flex items-center justify-center gap-2 transition text-[#1e3a5f]">
            {ctaContent.secondaryBtn}
            <Download size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
