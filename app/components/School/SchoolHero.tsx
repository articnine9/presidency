"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Rocket, ArrowRight } from "lucide-react";
import { H1, H4 } from "@/app/components/Headings";

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
  const icons = [
    <BookOpen size={18} />,
    <GraduationCap size={18} />,
    <Rocket size={18} />,
  ];

  return (
    <>
      {/* 🔹 BREADCRUMB */}
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

      {/* ================= HERO ================= */}
      <section
        className="
          relative
          w-full
          overflow-hidden

          min-h-[860px]

          md:min-h-screen
        "
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={data.image || "/img/law.jpg"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* MOBILE OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#081C33]/95
            via-[#081C33]/55
            to-black/20

            md:hidden
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[860px]
            max-w-[1400px]
            flex-col
            justify-end
            px-4
            pb-8
            pt-28

            md:h-full
            md:min-h-screen
            md:justify-center
            md:px-14
            md:pb-0
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[560px]">
            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <H1 className="text-white tracking-tight">
                {data.title.normal}

                <br />

                <span className="italic font-light">{data.title.italic}</span>
              </H1>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mt-5
                max-w-[520px]
                text-[13px]
                leading-8
                text-white/80

                md:text-base
                md:leading-relaxed
              "
            >
              {data.description}
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7"
            >
              <Link
                href="/international/apply"
                className="
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0097A7]
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#00b7c9]

                  md:inline-flex
                  md:w-auto
                  md:rounded-md
                  md:px-6
                "
              >
                HOW TO APPLY
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* ================= MOBILE STATS ================= */}
          {data.stats && (
            <div
              className="
                mt-5
                flex
                flex-col
                gap-3

                md:hidden
              "
            >
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/10
                    px-4
                    py-4
                    backdrop-blur-md
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#00A8B5]/20
                      text-[#35C0C8]
                    "
                  >
                    {icons[index % icons.length]}
                  </div>

                  {/* TEXT */}
                  <div>
                    <H4
                      className="
                        leading-none
                        text-[#D4A843]
                      "
                    >
                      {stat.value}
                    </H4>

                    <p
                      className="
                        mt-1
                        text-[12px]
                        text-white/75
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ================= DESKTOP STATS ================= */}
          {data.stats && (
            <div className="mt-16 hidden flex-wrap gap-5 md:flex">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                  }}
                  className="
                    w-[180px]
                    rounded-xl
                    border border-white/20
                    bg-white/10
                    px-6
                    py-7
                    text-center
                    text-white
                    backdrop-blur-md
                  "
                >
                  <H4 className="text-4xl text-[#D4A843]">
                    {stat.value}
                  </H4>

                  <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
