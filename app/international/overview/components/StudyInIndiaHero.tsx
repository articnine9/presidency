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
          h-screen
          w-full
          overflow-hidden
        "
      >
        {/* IMAGE */}
        <img
          src={
            data.image ||
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop"
          }
          alt="Hero"
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
            bg-black/55

            max-md:bg-black/60
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-[1400px]
            items-center
            px-4
            py-16
            sm:px-6
            lg:px-10

            /* MOBILE */
            max-md:items-end
            max-md:pb-12
          "
        >
          <div
            className="
              max-w-2xl
              text-white
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
              transition={{
                duration: 0.6,
              }}
              className="
                font-serif
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                md:text-6xl

                /* MOBILE */
                max-md:text-[42px]
                max-md:leading-[1.1]
                max-md:font-medium
              "
            >
              {data.title.normal}

              <br />

              <span
                className="
                  italic
                  font-medium
                  text-[#00B8C8]
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
                delay: 0.2,
              }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-relaxed
                text-white/90
                sm:text-base
                md:text-lg

                /* MOBILE */
                max-md:mt-4
                max-md:text-[13px]
                max-md:leading-7
                max-md:text-white/85
              "
            >
              {data.description}
            </motion.p>

            {/* BUTTONS */}
            {data.buttons && (
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
                  delay: 0.3,
                }}
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-4

                  /* HIDE MOBILE */
                  max-md:hidden
                "
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
                        <Headphones className="h-4 w-4" />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
