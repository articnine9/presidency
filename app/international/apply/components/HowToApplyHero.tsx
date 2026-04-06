"use client";

import { motion } from "framer-motion";

type FaqHeroProps = {
  selectedProgram?: string | null;
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

export default function HowToApplyHero({
  data,
  selectedProgram,
}: FaqHeroProps) {
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
          src={data.image || "/img/faq.jpg"}
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
              {data.title.normal}{" "}
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

            {selectedProgram ? (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm md:text-base text-white ring-1 ring-white/25"
              >
                <span className="text-white/80">Selected programme:</span>
                <span className="font-semibold text-[#D4A843]">
                  {selectedProgram}
                </span>
              </motion.p>
            ) : null}

            {/* 🔥 CTA BUTTONS */}
            {data.buttons && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                {data.buttons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.link}
                    target={btn.link.startsWith("http") ? "_blank" : "_self"}
                    className={`inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium transition-all duration-300 sm:w-auto md:text-base ${
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
