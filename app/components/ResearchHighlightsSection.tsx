"use client";

import { motion } from "motion/react";
import CommonHeader from "@/app/components/CommonHeader";

export function ResearchHighlightsSection() {
  const sections = [
    {
      title: "Advancing Knowledge Through Research and Innovation",
      description:
        "Presidency University is committed to building a globally connected research culture. The Research & Innovation Council oversees academic and sponsored research.",
      image: "img/innovation.png",
      bg: "bg-[#1565A8]",
    },
    {
      title: "Supporting Global Research Collaboration",
      description:
        "International scholars benefit from advanced labs, seed funding, and global partnerships to solve real-world challenges through cutting-edge research initiatives, fostering innovation and sustainable global impact",
      image: "img/global.png",
      bg: "bg-[#0B3551]",
    },
  ];

  return (
    <section className="py-24 bg-[#EEF1F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* HEADER */}
        <CommonHeader
          tag="Research & Innovation"
          title="Driving Impact Through"
          highlight="Research Excellence"
          description="Explore how Presidency University fosters innovation, global collaboration, and impactful discoveries."
          primaryColor="#0A8F96"
        />

        {/* 🔥 GRID: 2 CARDS PER ROW */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              {/* IMAGE */}
              <div className="w-full sm:w-1/2 h-[290px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-200px object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div
                className={`${item.bg} text-white sm:w-1/2 w-full p-6 flex flex-col justify-center`}
              >
                <h3 className="text-lg md:text-xl mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-white/90 text-sm mb-4">{item.description}</p>
                <div className="flex justify-center align-center">
                  <button className="bg-white text-[#1e3a5f] px-5 py-2 rounded-lg text-sm font-semibold w-fit hover:scale-105 transition">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
