"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, Film, Landmark } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

const icons = [Cpu, Briefcase, Landmark, Film];

export default function ShortCoursesSection({ data }: any) {
  const sc = data?.shortCourses;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={sc?.tag}
          title={sc?.title}
          highlight={sc?.highlight}
          description={sc?.description}
        />

        {/* 🔥 COURSE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {sc?.courses.map((course: string, index: number) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                {/* ICON */}
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#0A8F96] to-[#0BB5B5] flex items-center justify-center text-white group-hover:scale-110 transition">
                  <Icon size={20} />
                </div>

                {/* TITLE */}
                <h3 className="text-sm md:text-base font-semibold text-[#0b2a4a] group-hover:text-[#0A8F96] transition">
                  {course}
                </h3>

                {/* BADGE */}
                <span className="inline-block mt-3 text-xs bg-[#0A8F96]/10 text-[#0A8F96] px-3 py-1 rounded-full">
                  Short Course
                </span>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#0A8F96]/10 to-transparent rounded-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* 🎭 ARTS SECTION */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold text-[#0b2a4a] mb-6">
            Classical Performing Arts
          </h4>

          <div className="flex flex-wrap justify-center gap-3">
            {sc?.arts.map((art: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-[#0b2a4a]/5 text-[#0b2a4a] text-sm font-medium hover:bg-[#0A8F96]/10 hover:text-[#0A8F96] transition"
              >
                {art}
              </span>
            ))}
          </div>
        </div>

        {/* 🔹 NOTE */}
        {sc?.note && (
          <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {sc.note}
          </p>
        )}
      </div>
    </section>
  );
}
