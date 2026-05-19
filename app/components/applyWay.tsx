// app/admission-process/page.tsx

"use client";

import {
  GraduationCap,
  FileText,
  ClipboardCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const supportCards = [
  {
    title: "Course Selection Advice",
    description:
      "Get personalized guidance to choose the right programme for your academic and career growth.",
    icon: GraduationCap,
  },
  {
    title: "Application Feedback",
    description:
      "Receive expert support to improve your application and increase admission success.",
    icon: FileText,
  },
  {
    title: "Profile Evaluation",
    description:
      "Detailed assessment of your profile to help identify the best opportunities.",
    icon: ClipboardCheck,
  },
  {
    title: "Visa Guidance",
    description:
      "Step-by-step assistance for visa processing, travel preparation, and documentation.",
    icon: BadgeCheck,
  },
];

export default function AdmissionProcessPage() {
  return (
    <div className=" bg-[#f8fafb] py-16 md:py-24 px-4 overflow-hidden">
      <section className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block bg-[#dff3ee] text-[#0d7c6b] text-sm font-medium px-5 py-2 rounded-full">
          Admission Process
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight mt-6 text-[#111827] ">
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

        {/* Cards Section */}
        <div className="mt-14 bg-[#eef3f7] rounded-[32px] p-6 sm:p-8 md:p-12 shadow-sm">

          {/* Section Title */}
          <h3 className="text-sm md:text-base tracking-[0.2em] font-semibold text-[#243b53] mb-10">
            PERSONALIZED SUPPORT INCLUDES
          </h3>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

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

        {/* CTA Button OUTSIDE */}
        <div className="mt-10">
          <button
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
          </button>
        </div>
      </section>
    </div>
  );
}