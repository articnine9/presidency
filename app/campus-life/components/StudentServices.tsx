"use client";

import React, { useState } from "react";

import CommonHeader from "@/app/components/CommonHeader";

import {
  Globe,
  FileCheck,
  Laptop,
  Briefcase,
  BookOpen,
  BadgeDollarSign,
  ShieldCheck,
  Scale,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Office of International Affairs",
    desc: "End-to-end support for international students including pre-arrival guidance, onboarding, and visa assistance.",
  },
  {
    icon: <FileCheck className="h-5 w-5" />,
    title: "FRRO / e-FRRO Support",
    desc: "Dedicated assistance for foreign student registration and compliance with FRRO requirements in India.",
  },
  {
    icon: <Laptop className="h-5 w-5" />,
    title: "Academic Helpdesk & Portal",
    desc: "Access timetables, results, academic records, and notices through the Linways student platform.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Career Services",
    desc: "18-member L&D team providing training, mock interviews, aptitude coaching, and placement support.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Library & Digital Resources",
    desc: "Extensive academic resources including digital databases and research materials.",
  },
  {
    icon: <BadgeDollarSign className="h-5 w-5" />,
    title: "Financial & Scholarships",
    desc: "Guidance on scholarships, financial aid, and funding opportunities.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Campus Safety & Committees",
    desc: "Anti-Ragging, Internal Complaints, and Grievance Redressal ensuring a safe environment.",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Inclusion & Equality Cells",
    desc: "Dedicated cells promoting diversity, gender sensitisation, and equal opportunities.",
  },
];

const StudentServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f7f8fa] py-20 max-md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag="Student Support"
          title="Comprehensive Student Services at"
          highlight="Presidency University"
          description="Presidency University's student services infrastructure is designed to support every aspect of student life, particularly for those new to India."
          primaryColor="#ff7a2f"
          align="center"
        />

        {/* DESKTOP GRID */}
        <div className="mt-14 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#ff7a2f]/20
                bg-white
                px-6
                py-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${index >= 6 ? "lg:col-span-1 lg:mx-auto lg:w-full" : ""}
              `}
            >
              {/* LEFT ACCENT */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[4px]
                  bg-[#ff7a2f]
                "
              />

              <div className="flex items-start gap-4">
                {/* ICON */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#ff7a2f]/10
                    text-[#ff7a2f]
                  "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg text-[#1E3557]">{item.title}</h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-gray-600
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE ACCORDION */}
        <div className="mt-8 space-y-2 md:hidden">
          {services.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#0A8F96]/10
                  bg-[#0FA3AD]
                  shadow-sm
                "
              >
                {/* HEADER */}
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-3
                    text-left
                    text-white
                  "
                >
                  <div className="flex items-center gap-3">
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-white/30
                        bg-white/10
                      "
                    >
                      {React.cloneElement(item.icon, {
                        className: "h-4 w-4",
                      })}
                    </div>

                    {/* TITLE */}
                    <span
                      className="
                        text-[12px]
                        font-medium
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* TOGGLE */}
                  {isActive ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* CONTENT */}
                <div
                  className={`
                    overflow-hidden
                    bg-white
                    transition-all
                    duration-300
                    ${isActive ? "max-h-[220px] py-3" : "max-h-0"}
                  `}
                >
                  <div className="px-4">
                    <p
                      className="
                        text-[11px]
                        leading-6
                        text-gray-600
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SUPPORT BOX */}
        <div
          className="
            mt-14
            rounded-2xl
            bg-[#183B6B]
            px-8
            py-8
            text-white
            shadow-xl

            max-md:mt-6
            max-md:rounded-[18px]
            max-md:px-5
            max-md:py-5
          "
        >
          <h3
            className="
              text-3xl
              text-[#16B5B8]

              max-md:text-[20px]
            "
          >
            International Student Support
          </h3>

          <p
            className="
              mt-4
              max-w-5xl
              text-base
              leading-relaxed
              text-white/90

              max-md:mt-2
              max-md:text-[11px]
              max-md:leading-5
            "
          >
            Dedicated assistance for global students including visa guidance,
            FRRO registration, onboarding support, and continuous engagement
            throughout their academic journey in India.
          </p>

          {/* POINTS */}
          <div className="mt-5 space-y-3">
            {[
              "Pre-arrival guidance",
              "FRRO registration assistance",
              "On-campus integration",
              "Continuous advisory support",
            ].map((point, i) => (
              <div
                key={i}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <CheckCircle2
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-[#ff7a2f]
                  "
                />

                <p
                  className="
                    text-sm
                    text-white

                    max-md:text-[11px]
                  "
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentServices;
