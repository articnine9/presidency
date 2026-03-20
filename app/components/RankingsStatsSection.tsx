"use client";

import { Trophy, Users, Briefcase, Star } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Star,
    value: 100,
    suffix: " Acre",
    label: "Green Campus in Bangalore",
  },
  {
    icon: Trophy,
    value: 20,
    suffix: "+",
    label: "International Academic Partnerships",
  },
  {
    icon: Trophy,
    value: 100,
    suffix: "+",
    label: "Undergraduate & Postgraduate Programmes",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Student Clubs & Communities",
  },
  {
    icon: Briefcase,
    value: 300,
    suffix: "+",
    label: "Industry Recruiters",
  },
];

export function RankingsStatsSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/stats-bg.png')" }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* TAG */}
        <div className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-5 py-2 rounded-full text-sm font-medium mb-4">
          Achievements & Excellence
        </div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl  text-[#1e3a5f] leading-tight mb-6">
          Rankings & Stats That
          <span className="block text-[#ff8c42]">Define Our Success</span>
        </h2>

        {/* TEXT */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Our global recognition, academic excellence, and strong industry
          partnerships make us a leading destination for higher education.
        </p>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white/90 backdrop-blur border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <div className="bg-[#ff8c42]/10 p-4 rounded-full group-hover:bg-[#ff8c42] transition">
                    <Icon
                      size={26}
                      className="text-[#ff8c42] group-hover:text-white"
                    />
                  </div>
                </div>

                {/* NUMBER */}
                <h3 className="text-3xl  text-[#1e3a5f] mb-2">
                  <CountUp end={item.value} duration={2} />
                  {item.suffix}
                </h3>

                {/* LABEL */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
