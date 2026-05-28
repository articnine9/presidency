"use client";

import Link from "next/link";
import {
  GraduationCap,
  FileText,
  ClipboardCheck,
  BadgeCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

const supportCards = [
  {
    title: "Course Selection Advice",
    description:
      "Get Personalized guidance to choose the right programme for your growth",
    icon: GraduationCap,
  },
  {
    title: "Documentation Review",
    description:
      "We review your documents to ensure everything is complete and accurate",
    icon: ClipboardCheck,
  },
  {
    title: "Application Feedback",
    description:
      "Receive expert feedback to strengthen your application and improve acceptance",
    icon: FileText,
  },
  {
    title: "Visa Guidance",
    description:
      "Step-by-step for your student visa process and travel preparation",
    icon: BadgeCheck,
  },
];

export default function AdmissionProcessPage() {
  return (
    <div className="bg-[#f8fafb] py-16 md:py-24 px-4 overflow-hidden">
      <section className="max-w-7xl mx-auto text-center">
        {/* 🔥 MOBILE HEADER */}
        <div className="md:hidden">
          {/* Badge */}
          <div className="inline-block bg-[#fff1e8] text-[#f58a3c] text-sm font-medium px-5 py-2 rounded-xl">
            Admission Process
          </div>

          {/* Heading */}
          <h2 className="text-[36px] leading-tight mt-6 text-[#1B325F]">
            We’re With You at
            <span className="block text-[#F58A3C]">Every Step</span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-[#64748b] text-[15px] leading-8 max-w-md mx-auto">
            International Students have a dedicated admissions department to
            help with the entire process.
          </p>
        </div>

        {/* 🔥 DESKTOP HEADER */}
        <div className="hidden md:block">
          {/* Badge */}
          <div className="inline-block bg-[#dff3ee] text-[#0d7c6b] text-sm font-medium px-5 py-2 rounded-full">
            Admission Process
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight mt-6 text-[#111827]">
            We’re With You at
            <br />
            <span className="text-[#0d7c6b]">Every Step</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Our dedicated admissions team supports you throughout your journey —
            from selecting the right programme to completing applications,
            securing visas, and preparing for student life.
          </p>
        </div>

        {/* 🔥 CARDS WRAPPER */}
        <div className="mt-14 bg-[#eef3f7] rounded-[32px] p-5 sm:p-8 md:p-12 shadow-sm">
          {/* Section Title */}
          <h3 className="text-xs md:text-base tracking-[0.2em] font-semibold text-[#1B4E8C] mb-8 md:mb-10">
            PERSONALIZED SUPPORT INCLUDES
          </h3>

          {/* 🔥 MOBILE GRID */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {supportCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    p-4
                    text-center
                    border
                    border-gray-100
                    shadow-sm
                  "
                >
                  {/* ICON */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#dff3ee]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon className="w-5 h-5 text-[#7aa6c7]" />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h4 className="text-[#1B4E8C] text-sm font-semibold leading-6 underline underline-offset-2">
                    {card.title}
                  </h4>

                  {/* DIVIDER */}
                  <div className="w-full h-[1px] bg-[#d7e2ea] my-3"></div>

                  {/* DESC */}
                  <p className="text-[#64748b] text-xs leading-6">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 🔥 DESKTOP GRID (UNCHANGED) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    p-6
                    text-left
                    border
                    border-gray-100
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  {/* Top Row */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Icon */}
                    <div
                      className="
                        w-14
                        h-14
                        rounded-full
                        bg-[#dff3ee]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <Icon className="w-7 h-7 text-[#0d7c6b]" />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-[#1f2937] leading-snug">
                      {card.title}
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gray-200 mb-5"></div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-7">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔥 MOBILE BUTTON */}
        <div className="mt-8 md:hidden">
          <Link
            href="/contact"
            className="
              w-full
              bg-[#0A8F96]
              hover:bg-[#087e84]
              text-white
              py-4
              rounded-xl
              font-semibold
              text-sm
              flex
              items-center
              justify-center
              gap-2
              transition-all
            "
          >
            CONNECT WITH OUR TEAM
            <Headphones size={18} />
          </Link>
        </div>

        {/* 🔥 DESKTOP BUTTON */}
        <div className="hidden md:block mt-10">
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              bg-[#006d67]
              hover:bg-[#005752]
              text-white
              px-8
              py-4
              rounded-xl
              font-medium
              tracking-wide
              transition-all
              duration-300
              hover:shadow-xl
              hover:scale-105
            "
          >
            CONNECT WITH OUR TEAM
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
