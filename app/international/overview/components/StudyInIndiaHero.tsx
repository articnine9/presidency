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

export default function StudyInIndiaHero({ data }: FaqHeroProps) {
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
      <section className="relative w-full min-h-[420px] overflow-hidden sm:min-h-[480px] md:h-[520px]">
        {/* IMAGE */}
        <img
          src={
            data.image ||
            "https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          }
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/85 to-transparent" />

        {/* CONTENT */}
        <div className="relative mx-auto flex h-full min-h-[420px] max-w-[1400px] items-center px-4 py-10 sm:min-h-[480px] sm:px-6 md:min-h-0 md:py-0">
          <div className="max-w-3xl text-white">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {data.title.normal} <br />
              <span className="italic text-[#D4A843]">{data.title.italic}</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-base text-white/90 md:text-lg lg:text-xl"
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
