"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

type ContactHeroProps = {
  data: {
    title: {
      normal: string;
      italic: string;
    };
    description: string;
    breadcrumb?: string[];
    image?: string;
  };
};

export default function ContactHero({ data }: ContactHeroProps) {
  return (
    <>
      {/* 🔹 BREADCRUMB */}
      {data.breadcrumb && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-wrap">
            {data.breadcrumb.map((item, index, arr) => (
              <span key={index}>
                {item}
                {index !== arr.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 🔥 HERO */}
      <section className="relative w-full min-h-[500px] md:h-[520px] overflow-hidden">
        {/* IMAGE */}
        <img
          src={data.image || "/img/contact.jpg"}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/85 to-transparent" />

        {/* CONTENT */}
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif mb-4 leading-tight"
            >
              {data.title.normal}{" "}
              <span className="italic text-[#D4A843]">{data.title.italic}</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 mb-6"
            >
              {data.description}
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-[#0A8F96] text-white px-8 py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg">
                <Mail size={18} /> Email Us
              </button>

              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
                <Phone size={18} /> Call Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
