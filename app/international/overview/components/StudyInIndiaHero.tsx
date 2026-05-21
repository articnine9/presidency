"use client";

import { motion } from "framer-motion";
import { ArrowRight, Headphones } from "lucide-react";

type HeroProps = {
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
      icon?: boolean;
    }[];
  };
};

export default function StudyInIndiaHero({ data }: HeroProps) {
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

      {/* 🔥 HERO SECTION */}
      <section className="relative w-full overflow-hidden h-screen">
        {/* BACKGROUND IMAGE */}
        <img
          src={
            data.image ||
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop"
          }
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1400px] mx-auto h-full flex items-center px-4 sm:px-6 lg:px-10 py-16">
          <div className="max-w-2xl text-white">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight font-bold"
            >
              {data.title.normal}
              <br />

              <span className="italic text-[#00B8C8] font-medium">
                {data.title.italic}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl"
            >
              {data.description}
            </motion.p>

            {/* BUTTONS */}
            {data.buttons && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                {data.buttons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.link}
                    target={btn.link.startsWith("http") ? "_blank" : "_self"}
                    className={`group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                      btn.type === "primary"
                        ? "bg-[#00B8C8] text-white hover:bg-[#00d5e8]"
                        : btn.type === "dark"
                          ? "bg-black/40 border border-white/40 text-white hover:bg-white/10"
                          : "bg-white text-[#0b2a4a] hover:bg-gray-100"
                    }`}
                  >
                    {btn.label}

                    {btn.icon &&
                      (btn.type === "dark" ? (
                        <Headphones className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      ))}
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
