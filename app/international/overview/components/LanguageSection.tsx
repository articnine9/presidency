"use client";

import { motion } from "framer-motion";
import { Globe2, Languages } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function LanguageSection({ data }: any) {
  const lang = data?.languages;

  return (
    <section className="py-20 md:py-28 bg-[#eef5f9]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* 🔹 LEFT CONTENT */}
        <div>
          <CommonHeader
            tag={lang?.tag}
            title={lang?.title}
            highlight={lang?.highlight}
            description={lang?.description}
            align="left"
          />

          {/* NOTE */}
          <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed max-w-lg">
            {lang?.note}
          </p>
        </div>

        {/* 🔥 RIGHT SIDE (LANGUAGE CARDS) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {lang?.list.map((item: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* ICON */}
              <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-[#0A8F96] to-[#0BB5B5] flex items-center justify-center text-white group-hover:scale-110 transition">
                <Languages size={18} />
              </div>

              {/* TEXT */}
              <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-[#0A8F96] transition text-center">
                {item}
              </span>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#0A8F96]/10 to-transparent rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
