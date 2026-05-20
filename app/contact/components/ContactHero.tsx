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
      <section className="relative min-h-[420px] w-full overflow-hidden md:h-[420px]">
        {/* BACKGROUND IMAGE */}
        <img
          src={data.image || "/img/contact/hero-bg.webp"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-r
      from-[#081C33]/90
      via-[#081C33]/70
      to-[#081C33]/20
    "
        />

        {/* CONTENT */}
        <div
          className="
      relative z-10
      mx-auto
      flex
      h-full
      min-h-[420px]
      max-w-[1400px]
      items-center
      px-6
      md:px-12
    "
        >
          <div className="max-w-[720px]">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
          text-4xl
          md:text-6xl
          leading-tight
          font-semibold
          text-white
        "
            >
              {data.title.normal}{" "}
              <span className="italic text-[#00A8B5] font-light">
                {data.title.italic}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
          mt-6
          max-w-[620px]
          text-sm
          md:text-base
          leading-7
          text-white/80
        "
            >
              {data.description}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {/* EMAIL BUTTON */}
              <button
                className="
            inline-flex
            items-center
            gap-2
            rounded-md
            bg-[#00A8B5]
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition-all duration-300
            hover:bg-[#0095A1]
          "
              >
                EMAIL US
                <Mail size={16} />
              </button>

              {/* CALL BUTTON */}
              <button
                className="
            inline-flex
            items-center
            gap-2
            rounded-md
            border
            border-white
            bg-transparent
            px-6
            py-3
            text-sm
            font-medium
            text-white
            backdrop-blur-sm
            transition-all duration-300
            hover:bg-white/10
          "
              >
                CALL NOW
                <Phone size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
