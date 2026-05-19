"use client";

import { motion } from "framer-motion";
import { Globe, GraduationCap, Plane, Award } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

const icons = [Globe, GraduationCap, Plane, Award, Globe];

export default function InternationalSection({ data }: any) {
  const intl = data?.international;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={intl?.tag}
          title={intl?.title}
          highlight={intl?.highlight}
          description={intl?.description}
        />

        {/* 🔥 PROGRAM CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {intl?.programs.map((item: any, index: number) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A8F96] to-[#0BB5B5] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                  <Icon size={20} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg  text-[#0b2a4a] mb-2 group-hover:text-[#0A8F96] transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#0A8F96]/10 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* 🌍 COUNTRIES (CHIPS STYLE) */}
        <div className="mt-16 text-center">
          <h4 className="text-lg  text-[#0b2a4a] mb-6">
            Global Partner Countries
          </h4>

          <div className="flex flex-wrap justify-center gap-3">
            {intl?.countries.map((country: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-[#0A8F96]/10 text-[#0A8F96] text-sm font-medium"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* 🔹 NOTE */}
        {intl?.note && (
          <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto text-sm md:text-base">
            {intl.note}
          </p>
        )}
      </div>
    </section>
  );
}
