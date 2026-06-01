"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

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
      {/* BREADCRUMB */}
      {data.breadcrumb && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="mx-auto flex max-w-[1400px] flex-wrap px-4 text-xs text-gray-600 md:px-6 md:text-sm">
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

      {/* HERO */}
      <section
        className="
          relative
          w-full
          overflow-hidden

          min-h-[720px]

          sm:min-h-[480px]
          md:h-[520px]
        "
      >
        {/* IMAGE */}
        <img
          src={data.image || "/img/faq.jpg"}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-[#0b2a4a]/95
            via-[#0b2a4a]/70
            to-[#0b2a4a]/30

            md:bg-gradient-to-r
            md:from-[#0b2a4a]/95
            md:via-[#0b2a4a]/85
            md:to-transparent
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[720px]
            max-w-[1400px]
            items-end
            px-4
            pb-10
            pt-24

            sm:min-h-[480px]
            sm:items-center
            sm:px-6
            sm:py-10

            md:min-h-0
            md:py-0
          "
        >
          <div className="max-w-3xl text-white">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mb-5
                font-serif
                text-[42px]
                leading-[1.05]
                tracking-tight

                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              {data.title.normal}{" "}
              <span className="italic text-[#ff9d42]">{data.title.italic}</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mb-6
                max-w-md
                text-[13px]
                leading-7
                text-white/85

                sm:max-w-2xl
                sm:text-base

                md:text-lg
                lg:text-xl
              "
            >
              {data.description}
            </motion.p>

            {/* SELECTED PROGRAM */}
            {selectedProgram ? (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                  mb-6
                  flex
                  w-full
                  max-w-full
                  flex-wrap
                  items-center
                  gap-2
                  rounded-xl
                  bg-white/15
                  px-4
                  py-3
                  text-sm
                  text-white
                  ring-1
                  ring-white/20
                  backdrop-blur-md
                "
              >
                <span className="text-white/75">Selected programme:</span>

                <span className="font-semibold text-[#ff9d42]">
                  {selectedProgram}
                </span>
              </motion.p>
            ) : null}

            {/* BUTTONS */}
            {data.buttons && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-4
                "
              >
                {data.buttons && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="
      flex
      flex-col
      gap-3

      sm:flex-row
      sm:flex-wrap
      sm:gap-4
    "
                  >
                    {data.buttons.map((btn, index) => (
                      <a
                        key={index}
                        href={btn.link}
                        target={
                          btn.link.startsWith("http") ? "_blank" : "_self"
                        }
                        className={`
          ${index === 1 ? "hidden sm:flex" : "flex"}

          h-[54px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          px-6
          text-sm
          font-medium
          transition-all
          duration-300

          sm:w-auto
          md:text-base

          ${
            btn.type === "primary"
              ? `
                bg-[#0A8F96]
                text-white
                hover:bg-[#0BB5B5]
              `
              : `
                border
                border-white/40
                bg-white/10
                text-white
                backdrop-blur-md
                hover:bg-white/20
              `
          }
        `}
                      >
                        {btn.label}

                        {btn.type === "primary" ? (
                          <ArrowRight size={16} />
                        ) : (
                          <Download size={16} />
                        )}
                      </a>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
