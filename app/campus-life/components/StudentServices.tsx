"use client";

import React from "react";
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
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Office of International Affairs",
    desc: "End-to-end support for international students including pre-arrival guidance, onboarding, and visa assistance.",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "FRRO / e-FRRO Support",
    desc: "Dedicated assistance for foreign student registration and compliance with FRRO requirements in India.",
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "Academic Helpdesk & Portal",
    desc: "Access timetables, results, academic records, and notices through the Linways student platform.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Career Services",
    desc: "18-member L&D team providing training, mock interviews, aptitude coaching, and placement support.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Library & Digital Resources",
    desc: "Extensive academic resources including digital databases and research materials.",
  },
  {
    icon: <BadgeDollarSign className="w-5 h-5" />,
    title: "Financial & Scholarships",
    desc: "Guidance on scholarships, financial aid, and funding opportunities.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Campus Safety & Committees",
    desc: "Anti-Ragging, Internal Complaints, and Grievance Redressal ensuring a safe environment.",
  },
  {
    icon: <Scale className="w-5 h-5" />,
    title: "Inclusion & Equality Cells",
    desc: "Dedicated cells promoting diversity, gender sensitisation, and equal opportunities.",
  },
];

const StudentServices = () => {
  return (
    <section className="bg-[#f7f8fa] py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Student Support"
          title="Comprehensive Student Services at"
          highlight="Presidency University"
          description="Presidency University's student services infrastructure is designed to support every aspect of student life, particularly for those new to India."
          primaryColor="#ff7a2f"
          align="center"
        />

        {/* 🔥 SERVICES GRID */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className={`
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
                relative
                overflow-hidden
                ${index >= 6 ? "lg:col-span-1 lg:mx-auto lg:w-full" : ""}
              `}
            >
              {/* LEFT ACCENT */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#ff7a2f]" />

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

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 SUPPORT BOX */}
        <div
          className="
            mt-14
            rounded-2xl
            bg-[#183B6B]
            px-8
            py-8
            text-white
            shadow-xl
          "
        >
          <h3 className="text-3xl text-[#ff7a2f]">
            International Student Support
          </h3>

          <p className="mt-4 max-w-5xl text-base leading-relaxed text-white/90">
            Dedicated assistance for global students including visa guidance,
            FRRO registration, onboarding support, and continuous engagement
            throughout their academic journey in India.
          </p>

          {/* POINTS */}
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Pre-arrival guidance",
              "FRRO registration assistance",
              "On-campus integration",
              "Continuous advisory support",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-[#ff7a2f]" />

                <p className="text-sm text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentServices;
