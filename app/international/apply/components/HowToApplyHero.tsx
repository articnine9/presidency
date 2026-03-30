"use client";

import { motion } from "framer-motion";

type FaqHeroProps = {
  data: {
    title: {
      normal: string;
      italic: string;
    };
    description: string;
    breadcrumb?: string[];
    image?: string;
    buttons?: {
      label: string;
      link: string;
      type?: string;
    }[];
  };
};

export default function HowToApplyHero({ data }: FaqHeroProps) {
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
          src={data.image || "/img/faq.jpg"}
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

            {/* 🔥 CTA BUTTONS */}
            {data.buttons && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                {data.buttons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.link}
                    target={btn.link.startsWith("http") ? "_blank" : "_self"}
                    className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                      btn.type === "primary"
                        ? "bg-[#0A8F96] text-white hover:bg-[#0BB5B5] hover:shadow-lg"
                        : "border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                    }`}
                  >
                    {btn.label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
