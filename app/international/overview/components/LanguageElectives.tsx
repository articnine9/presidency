"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import { Languages, LanguagesIcon } from "lucide-react";

export default function LanguageElectives({ data }: any) {
  const languages = data?.languages;

  return (
    <section className="py-20 md:py-28 bg-[#f8f8f8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 🔹 LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* HEADER */}
            <CommonHeader
              tag={languages?.tag}
              title={languages?.title}
              highlight={languages?.highlight}
              description=""
              align="left"
              primaryColor="#ff7a2f"
            />

            {/* CONTENT */}
            <p className="text-[#4b5563] leading-relaxed text-sm md:text-base mt-6">
              {languages?.description}
            </p>

            {/* NOTE */}
            <p className="text-[#4b5563] leading-relaxed text-sm md:text-base mt-6">
              {languages?.note}
            </p>
          </motion.div>

          {/* 🔹 RIGHT LANGUAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-5"
          >
            {languages?.list?.map((item: string, index: number) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-xl border border-[#0A8F96]/30 bg-gradient-to-b from-white via-[#14b8c0] to-[#0A8F96] p-6 h-[140px] flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                  <Languages className="w-6 h-6 text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-white text-sm md:text-base font-medium leading-snug">
                  {item}
                </h3>

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
