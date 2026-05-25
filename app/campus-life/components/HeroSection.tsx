"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Download,
  Trees,
  GraduationCap,
  Clock3,
} from "lucide-react";

type SchoolHeroProps = {
  data: {
    title: {
      normal: string;
      italic: string;
    };
    description: string;
    breadcrumb?: string[];
    stats?: {
      label: string;
      value: string;
    }[];
    image?: string;
  };
};

export default function SchoolHero({ data }: SchoolHeroProps) {
  const icons = [Trees, GraduationCap, Clock3];

  return (
    <>
      {/* BREADCRUMB */}
      {data.breadcrumb && (
        <div className="bg-[#f5f7fa] py-3">
          <div
            className="
              mx-auto
              flex
              max-w-[1400px]
              flex-wrap
              px-4
              text-xs
              text-gray-600
              md:px-6
              md:text-sm
            "
          >
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
          overflow-hidden
          max-md:min-h-screen
        "
      >
        {/* IMAGE */}
        <img
          src={data.image || "/img/campus-life.jpg"}
          alt="Campus Life"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-black/45
            to-black/20

            max-md:bg-black/45
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[780px]
            max-w-[1400px]
            flex-col
            justify-center
            px-6
            pb-36
            pt-20
            lg:min-h-[720px]

            /* MOBILE */
            max-md:min-h-screen
            max-md:justify-end
            max-md:px-4
            max-md:pb-6
            max-md:pt-24
          "
        >
          {/* TEXT BLOCK */}
          <div
            className="
              max-w-2xl
              text-white

              max-md:max-w-full
            "
          >
            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                font-serif
                text-5xl
                leading-none
                md:text-6xl

                max-md:text-[38px]
                max-md:leading-[1.05]
              "
            >
              {data.title.normal}

              <br />

              <span
                className="
                  italic
                  text-[#4DB6C2]
                "
              >
                {data.title.italic}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-white/85

                max-md:mt-4
                max-md:max-w-full
                max-md:text-[13px]
                max-md:leading-5
              "
            >
              {data.description}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-4

                /* HIDE ON MOBILE */
                max-md:hidden
              "
            >
              {/* PRIMARY */}
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-[#0A8F96]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[#11B8C0]
                "
              >
                EXPLORE PROGRAMMES
                <ArrowRight size={16} />
              </button>

              {/* OUTLINE */}
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-white/60
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  text-white
                  backdrop-blur-sm
                  transition
                  hover:bg-white/10
                "
              >
                CONTACT THE OIA
                <Phone size={15} />
              </button>

              {/* LIGHT BUTTON */}
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-[#0F2D52]
                  transition
                  hover:bg-gray-100
                "
              >
                HOW TO APPLY
                <Download size={15} />
              </button>
            </motion.div>
          </div>

          {/* STATS */}
          {data.stats && (
            <div
              className="
                absolute
                bottom-10
                left-1/2
                z-20
                grid
                w-full
                -translate-x-1/2
                grid-cols-2
                gap-5
                px-6
                lg:grid-cols-4

                /* MOBILE */
                max-md:static
                max-md:mt-6
                max-md:translate-x-0
                max-md:grid-cols-1
                max-md:gap-3
                max-md:px-0
              "
            >
              {data.stats.map((stat, index) => {
                const Icon = icons[index] || Trees;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                    }}
                    className="
                        rounded-2xl
                        border
                        border-white/20
                        bg-white/10
                        px-8
                        py-7
                        text-center
                        text-white
                        shadow-xl
                        backdrop-blur-md

                        /* MOBILE CARD STYLE */
                        max-md:flex
                        max-md:items-center
                        max-md:gap-4
                        max-md:rounded-xl
                        max-md:px-4
                        max-md:py-3
                        max-md:text-left
                      "
                  >
                    {/* ICON */}
                    <div
                      className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#4DB6C2]/50
                          bg-[#4DB6C2]/15
                          text-[#4DB6C2]

                          md:hidden
                        "
                    >
                      <Icon size={16} />
                    </div>

                    <div>
                      <p
                        className="
                            text-4xl
                            font-semibold
                            text-[#D4A843]

                            max-md:text-lg
                          "
                      >
                        {stat.value}
                      </p>

                      <p
                        className="
                            mt-2
                            text-sm
                            text-white/85

                            max-md:mt-0.5
                            max-md:text-[11px]
                          "
                      >
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
