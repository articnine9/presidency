"use client";

import { motion } from "framer-motion";
import {
  Search,
  FileText,
  ClipboardCheck,
  Mail,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Explore Research Areas",
    desc: "Browse the 10 schools and their research domains. Identify your area of interest and potential supervisor.",
  },
  {
    icon: FileText,
    title: "Prepare Your Proposal",
    desc: "Draft a research proposal (500–1000 words) outlining your research question, objectives, and methodology.",
  },
  {
    icon: ClipboardCheck,
    title: "Submit Application",
    desc: "Complete the online application form, upload all required documents, and pay the application fee.",
  },
  {
    icon: Mail,
    title: "Entrance Test & Interview",
    desc: "Appear for the university's doctoral entrance examination and a research aptitude interview with the departmental committee.",
  },
  {
    icon: GraduationCap,
    title: "Enrolment & Registration",
    desc: "Upon selection, complete enrolment formalities, register your research topic, and begin your doctoral journey.",
  },
];

export default function PhDProcess() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#E6F4F5] text-[#0A8F96] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-md mb-4">
            How to Apply
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0F1E3D]">
            Application Process
          </h2>
          <p className="text-gray-500 mt-3 text-[15px] max-w-lg mx-auto">
            Follow these five steps to successfully apply for a doctoral programme at Presidency University.
          </p>
        </div>

        {/* Steps — vertical timeline on mobile, horizontal on desktop */}
        <div className="relative max-w-4xl mx-auto">

          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px bg-gray-200" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0F1E3D] shadow-md mb-4 flex-shrink-0">
                    <Icon size={22} className="text-teal-400" />
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0A8F96] text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  <h4 className="text-[14px] font-semibold text-[#0F1E3D] mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
