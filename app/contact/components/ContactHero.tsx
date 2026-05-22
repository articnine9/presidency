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

          min-h-[760px]

          md:h-[420px]
          md:min-h-0
        "
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={data.image || "/img/contact/hero-bg.webp"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-[#081C33]/95
            via-[#081C33]/70
            to-[#081C33]/30

            md:bg-gradient-to-r
            md:from-[#081C33]/90
            md:via-[#081C33]/70
            md:to-[#081C33]/20
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[760px]
            max-w-[1400px]
            items-end
            px-5
            pb-10
            pt-24

            md:h-full
            md:min-h-0
            md:items-center
            md:px-12
            md:pb-0
            md:pt-0
          "
        >
          <div className="max-w-[760px]">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                text-[54px]
                font-semibold
                leading-[1.02]
                tracking-tight
                text-white

                md:text-6xl
              "
            >
              {data.title.normal}

              <span
                className="
                  mt-2
                  block
                  italic
                  font-light
                  text-[#00A8B5]
                "
              >
                {data.title.italic}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mt-8
                max-w-[620px]
                text-[15px]
                leading-9
                text-white/85

                md:text-base
                md:leading-7
              "
            >
              {data.description}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mt-10
                flex
                flex-col
                gap-4

                sm:flex-row
              "
            >
              {/* EMAIL BUTTON */}
              <button
                className="
                  flex
                  h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#00A8B5]
                  px-8
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#0095A1]

                  sm:w-auto

                  md:rounded-md
                "
              >
                EMAIL US
                <Mail size={17} />
              </button>

              {/* CALL BUTTON */}
              <button
                className="
                  flex
                  h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/5
                  px-8
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/10

                  sm:w-auto

                  md:rounded-md
                "
              >
                CALL NOW
                <Phone size={17} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
