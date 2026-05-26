"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { H2, H4 } from "@/app/components/Headings";

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

function AccreditationCard({
  item,
}: {
  item: (typeof accreditations)[number];
}) {
  return (
    <div
      className="
        bg-white
        border
        border-gray-100
        rounded-2xl
        p-4
        text-center
        shadow-sm
        hover:shadow-lg
        transition-all
      "
    >
      {/* IMAGE */}
      <div className="flex justify-center mb-4">
        <div className="bg-[#f8fafc] p-3 rounded-xl shadow-sm">
          <img
            src={item.image}
            alt={item.title}
            className="h-16 object-contain"
          />
        </div>
      </div>

      {/* TITLE */}
      <H4 className="text-[#1e3a5f]">
        {item.title}
      </H4>

      {/* DESC */}
      <p className="text-sm text-gray-500 mt-2 leading-6">{item.desc}</p>
    </div>
  );
}

export function RankingAccreditationSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? accreditations.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= accreditations.length - 2 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#ff8c42]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        {/* 🔥 HEADER */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              inline-block
              bg-[#ff8c42]/10
              text-[#ff8c42]
              px-5
              py-2
              rounded-xl
              text-sm
              mb-5
            "
          >
            Accreditation & Rankings
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <H2 className="text-[#1e3a5f]">
              Recognised for
              <span className="block text-[#F58A3C]">Academic Excellence</span>
            </H2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="
              text-gray-600
              mt-4
              max-w-md
              mx-auto
              text-sm
              leading-7
            "
          >
            Presidency University is recognised nationally and internationally
            for its academic quality, research impact, and institutional
            excellence.
          </motion.p>
        </div>

        {/* 🔥 MOBILE DESIGN */}
        <div className="md:hidden">
          {/* CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {accreditations.slice(current, current + 2).map((item) => (
              <AccreditationCard key={item.title} item={item} />
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prevSlide}
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-[#F58A3C]
                shadow-sm
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-[#F58A3C]
                shadow-sm
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 🔥 DESKTOP DESIGN (UNCHANGED) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {accreditations.map((item) => (
            <div
              key={item.title}
              className="group bg-[#f8fafc] border border-gray-100 rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="flex justify-center mb-2 md:mb-4">
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-sm group-hover:shadow-md transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-14 sm:h-16 md:h-24 object-contain"
                  />
                </div>
              </div>

              <h3 className="text-[#1e3a5f] font-medium mb-1 text-sm md:text-base">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
