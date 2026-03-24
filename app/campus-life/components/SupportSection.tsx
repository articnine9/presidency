"use client";

import { ShieldCheck, HeartPulse, Headphones, Stethoscope } from "lucide-react";

const supportItems = [
  {
    title: "24/7 MEDICAL CARE",
    desc: "24/7 medical care ensures immediate assistance.",
    icon: Stethoscope,
  },
  {
    title: "INTERNATIONAL STUDENT HELP DESK",
    desc: "International student help desk support.",
    icon: Headphones,
  },
  {
    title: "PSYCHOLOGICAL & WELLBEING",
    desc: "Focused support for mental health & wellbeing.",
    icon: HeartPulse,
  },
  {
    title: "SECURE CAMPUS",
    desc: "Campus security ensures a safe environment.",
    icon: ShieldCheck,
  },
];

export default function SupportSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl text-[#1B4E8C]">
          PEACE OF MIND & GLOBAL SUPPORT
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          Pastoral care from admission to induction.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {supportItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-gray-100  rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-100 text-teal-600 mb-4">
                  <Icon size={20} />
                </div>

                {/* Text */}
                <h3 className="text-xl  text-gray-900">{item.title}</h3>
                <p className="text-base text-gray-500 mt-2">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
