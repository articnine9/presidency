"use client";

import { motion } from "motion/react";

const accreditations = [
  {
    title: "NAAC Accreditation",
    desc: "A+ Grade",
    image: "/img/accreditation/naac.png",
  },
  {
    title: "NBA Accreditation",
    desc: "All eligible courses",
    image: "/img/accreditation/nba.png",
  },
  {
    title: "NIRF Ranking",
    desc: "Engineering Category Ranked 47th",
    image: "/img/accreditation/nirf.png",
  },
  {
    title: "AICTE & UGC",
    desc: "Approved by Both",
    image: "/img/accreditation/aicte.webp",
  },
  {
    title: "QS Sustainability",
    desc: "Rankings 2026",
    image: "/img/accreditation/QS.jpeg",
  },
];

export function RankingAccreditationSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      {/* soft background glow */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#ff8c42]/10 blur-[120px] rounded-lg"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        {/* ✅ COMMON HEADER (UPDATED) */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          {/* Tag */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-4 py-2 rounded-lg text-sm mb-4"
          >
            Accreditation & Rankings
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl text-[#1e3a5f] leading-tight px-1"
          >
            Recognised for
            <span className="block text-[#ff8c42]">Academic Excellence</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-lg"
          >
            Presidency University is recognised nationally and internationally
            for its academic quality, research impact, and institutional
            excellence.
          </motion.p>
        </div>

        {/* Accreditation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {accreditations.map((item, i) => (
            <div
              key={i}
              className="group bg-[#f8fafc] border border-gray-100 rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Logo */}
              <div className="flex justify-center mb-2 md:mb-4">
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-sm group-hover:shadow-md transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-14 sm:h-16 md:h-24 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#1e3a5f] font-medium mb-1 text-sm md:text-base">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
