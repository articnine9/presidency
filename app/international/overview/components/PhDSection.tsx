"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import CommonHeader from "@/app/components/CommonHeader";

import {
  Cpu,
  Briefcase,
  Palette,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function PhDSection({ data }: any) {
  const phd = data?.phd;

  const [activeIndex, setActiveIndex] = useState(0);

  // ICON MAP
  const icons: any = {
    engineering: Cpu,
    management: Briefcase,
    arts: Palette,
    sciences: GraduationCap,
  };

  return (
    <section className="bg-[#f5f7fa] py-20 md:py-28 max-md:py-14">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag={phd?.tag}
          title={phd?.title}
          highlight={phd?.highlight}
          description={phd?.description}
          align="center"
          primaryColor="#ff7a2f"
        />

        {/* DESKTOP GRID */}
        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {phd?.categories.map((item: any, index: number) => {
            const Icon =
              icons[item.icon as keyof typeof icons] || GraduationCap;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#dbe4ea]
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:shadow-lg
                  "
              >
                {/* LEFT BORDER */}
                <div
                  className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[4px]
                      bg-[#ff7a2f]
                    "
                />

                {/* TITLE */}
                <div className="mb-5 flex items-center gap-3">
                  <Icon
                    className="
                        h-5
                        w-5
                        text-[#ff7a2f]
                      "
                  />

                  <h3
                    className="
                        text-lg
                        font-semibold
                        leading-snug
                        text-[#183153]
                      "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* COURSE LIST */}
                <ul className="space-y-3">
                  {item.courses.map((course: any, i: number) => (
                    <li
                      key={i}
                      className="
                            flex
                            items-start
                            gap-2
                            text-sm
                            text-[#4b5563]
                          "
                    >
                      <CheckCircle2
                        className="
                              mt-[2px]
                              h-4
                              w-4
                              shrink-0
                              text-[#ff7a2f]
                            "
                      />

                      <span>
                        {typeof course === "string" ? course : course.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* HOVER */}
                <div
                  className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#ff7a2f]/5
                      to-transparent
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                />
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE ACCORDION */}
        <div className="mt-8 space-y-3 md:hidden">
          {phd?.categories.map((item: any, index: number) => {
            const Icon =
              icons[item.icon as keyof typeof icons] || GraduationCap;

            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#d9d4cd]
                    bg-[#fbfbfa]
                  "
              >
                {/* HEADER */}
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-3
                      px-4
                      py-4
                      text-left
                    "
                >
                  <div className="flex items-center gap-3">
                    {/* ICON */}
                    <div
                      className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-md
                          text-[#0A8F96]
                        "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* TITLE */}
                    <span
                      className="
                          text-[13px]
                          text-[#1E3557]
                        "
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* TOGGLE */}
                  {isActive ? (
                    <ChevronUp
                      className="
                          h-5
                          w-5
                          text-[#1E3557]
                        "
                    />
                  ) : (
                    <ChevronDown
                      className="
                          h-5
                          w-5
                          text-[#1E3557]
                        "
                    />
                  )}
                </button>

                {/* CONTENT */}
                <div
                  className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "max-h-[500px] border-t border-[#d9d4cd] bg-[#edf5fb]"
                          : "max-h-0"
                      }
                    `}
                >
                  <div className="space-y-3 px-4 py-4">
                    {item.courses.map((course: any, i: number) => (
                      <div
                        key={i}
                        className="
                              flex
                              items-start
                              gap-2
                            "
                      >
                        <CheckCircle2
                          className="
                                mt-[2px]
                                h-4
                                w-4
                                shrink-0
                                text-[#0A8F96]
                              "
                        />

                        <span
                          className="
                                text-[11px]
                                leading-5
                                text-[#1E3557]
                              "
                        >
                          {typeof course === "string" ? course : course.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* MOBILE RESEARCH BOX */}
          {phd?.research && (
            <div
              className="
                mt-5
                rounded-2xl
                bg-[#183B6B]
                px-5
                py-5
                text-white
                shadow-lg
              "
            >
              <h3
                className="
                  text-[22px]
                  leading-tight
                  text-white
                "
              >
                {phd?.research?.title}
              </h3>

              <p
                className="
                  mt-3
                  text-[11px]
                  leading-6
                  text-white/85
                "
              >
                {phd?.research?.description}
              </p>

              {/* FEATURES */}
              <div className="mt-5 space-y-3">
                {phd?.research?.features?.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="
                        flex
                        items-start
                        gap-3
                      "
                  >
                    <CheckCircle2
                      className="
                          mt-[2px]
                          h-4
                          w-4
                          shrink-0
                          text-[#ff7a2f]
                        "
                    />

                    <span
                      className="
                          text-[11px]
                          text-white/90
                        "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MOBILE NOTE */}
          <div
            className="
              rounded-2xl
              border
              border-[#0A8F96]
              bg-[#eef6f7]
              px-4
              py-4
            "
          >
            <p
              className="
                text-[11px]
                leading-6
                text-[#1E3557]
              "
            >
              Presidency University's Research & Innovation Council oversees
              research quality and supports scholars through publications,
              global collaborations, and innovation-driven initiatives.
            </p>
          </div>
        </div>

        {/* DESKTOP RESEARCH BOX */}
        {phd?.research && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-14
              hidden
              rounded-2xl
              bg-[#183b6b]
              p-8
              text-white
              md:p-10
              md:block
            "
          >
            <h3
              className="
                mb-4
                text-2xl
                font-semibold
              "
            >
              {phd?.research?.title}
            </h3>

            <p
              className="
                max-w-4xl
                leading-relaxed
                text-white/80
              "
            >
              {phd?.research?.description}
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {phd?.research?.features?.map((item: string, index: number) => (
                <div
                  key={index}
                  className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-white/90
                      md:text-base
                    "
                >
                  <CheckCircle2
                    className="
                        h-4
                        w-4
                        shrink-0
                        text-[#ff7a2f]
                      "
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
