"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

export default function PGSection({ data }: any) {
  const pg = data?.pg;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={pg?.tag}
          title={pg?.title}
          highlight={pg?.highlight}
          description={pg?.description}
        />

        {/* 🔥 STACKED CARDS */}
        <div className="mt-14 space-y-6">
          {pg?.categories.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-6 md:items-center bg-[#f8fafc] hover:bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* 🔹 LEFT ICON */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A8F96] to-[#0BB5B5] text-white flex items-center justify-center text-xl font-bold shadow-md">
                {index + 1}
              </div>

              {/* 🔹 CONTENT */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0b2a4a] mb-2 group-hover:text-[#0A8F96] transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.courses.join(" • ")}
                </p>
              </div>

              {/* 🔹 RIGHT ARROW */}
              <div className="hidden md:block text-[#0A8F96] text-xl group-hover:translate-x-2 transition">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
