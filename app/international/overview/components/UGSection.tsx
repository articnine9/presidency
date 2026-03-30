"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

export default function UGSection({ data }: any) {
  const ug = data?.ug;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#eef5f9]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={ug?.tag}
          title={ug?.title}
          highlight={ug?.highlight}
          description={ug?.description}
        />

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {ug?.categories.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* 🔥 TOP GRADIENT BAR */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5]" />

              <div className="p-6">
                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#0b2a4a] mb-4 group-hover:text-[#0A8F96] transition">
                  {item.title}
                </h3>

                {/* COURSES */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.courses.map((course: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 group-hover:translate-x-1 transition duration-300"
                    >
                      <span className="text-[#0A8F96] mt-[2px]">●</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✨ HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-[#0A8F96]/10 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* 🔹 NOTE */}
        {ug?.note && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-gray-600 mt-14 max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {ug.note}
          </motion.p>
        )}
      </div>
    </section>
  );
}
