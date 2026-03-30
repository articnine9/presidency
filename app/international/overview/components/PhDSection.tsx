"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import { CheckCircle } from "lucide-react";

export default function PhDSection({ data }: any) {
  const phd = data?.phd;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden text-white bg-[#1e4c8f]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e4c8f] via-[#1e4c8f] to-[#1e4c8f]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1e4c8f]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1e4c8f]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        {/* HEADER */}
        <CommonHeader
          tag={phd?.tag}
          title={phd?.title}
          highlight={phd?.highlight}
          primaryColor="#ffffff"
          secondaryColor="#ffffff"
          description={phd?.description}
          align="center"
          descriptionColor="#fff"
        />

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {phd?.features.map((item: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group  items-center  flex  gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300 shadow-lg"
            >
              {/* 🔥 ICON */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#0A8F96] to-[#0BB5B5] flex items-center justify-center shadow-md group-hover:scale-110 transition">
                <CheckCircle className="text-white w-5 h-5" />
              </div>

              {/* TEXT */}
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RESEARCH AREAS */}
        <div className="mt-20">
          <h3 className="text-xl md:text-2xl mb-10 text-center">
            Research Areas
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
            {phd?.fields.map((field: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group relative flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition duration-300"
              >
                {/* ✨ Glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#0A8F96]/20 to-[#0BB5B5]/10 blur-md" />

                {/* 🔵 DOT ICON */}
                <span className="relative w-2 h-2 rounded-full bg-[#0BB5B5] group-hover:scale-125 transition" />

                {/* TEXT */}
                <span className="relative text-sm md:text-base text-white/90 group-hover:text-white transition">
                  {field}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NOTE */}
        {phd?.note && (
          <p className="text-center text-white/70 mt-16 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {phd.note}
          </p>
        )}
      </div>
    </section>
  );
}
