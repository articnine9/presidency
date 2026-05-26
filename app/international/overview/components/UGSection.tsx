"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import CommonHeader from "@/app/components/CommonHeader";

import Link from "next/link";

import {
  Cpu,
  Monitor,
  Briefcase,
  Palette,
  Scale,
  Film,
  HeartPulse,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function UGSection({ data }: any) {
  const ug = data?.ug;

  const [activeIndex, setActiveIndex] = useState(0);

  // ICONS
  const icons: any = {
    engineering: Cpu,
    computing: Monitor,
    management: Briefcase,
    design: Palette,
    law: Scale,
    media: Film,
    health: HeartPulse,
    arts: GraduationCap,
  };

  return (
    <section className="bg-[#f8f8f8] py-20 md:py-28 max-md:py-14">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag={ug?.tag}
          title={ug?.title}
          highlight={ug?.highlight}
          description={ug?.description}
          align="center"
          primaryColor="#ff7a2f"
        />

        {/* DESKTOP GRID */}
        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {ug?.categories.map((item: any, index: number) => {
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

                        leading-snug
                        text-[#183153]
                      "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* COURSES */}
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

                      {course.link ? (
                        <Link
                          href={course.link}
                          className="
                                transition-colors
                                hover:text-[#ff7a2f]
                              "
                        >
                          {course.name}
                        </Link>
                      ) : (
                        <span>
                          {typeof course === "string" ? course : course.name}
                        </span>
                      )}
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
          {ug?.categories.map((item: any, index: number) => {
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
                          text-[#0A8F96]
                        "
                    />
                  ) : (
                    <ChevronDown
                      className="
                          h-5
                          w-5
                          text-[#0A8F96]
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

                        {course.link ? (
                          <Link
                            href={course.link}
                            className="
                                  text-[12px]
                                  leading-5
                                  text-[#1E3557]
                                "
                          >
                            {course.name}
                          </Link>
                        ) : (
                          <span
                            className="
                                  text-[12px]
                                  leading-5
                                  text-[#1E3557]
                                "
                          >
                            {typeof course === "string" ? course : course.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* MOBILE NOTE */}
          {ug?.note && (
            <div
              className="
                mt-4
                rounded-2xl
                border
                border-[#0A8F96]
                bg-[#eef6f7]
                px-4
                py-4
              "
            >
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0A8F96]
                    text-[#0A8F96]
                  "
                >
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <div>
                  <h4
                    className="
                      text-[14px]
                      text-[#0A8F96]
                    "
                  >
                    Note
                  </h4>

                  <p
                    className="
                      mt-2
                      text-[11px]
                      leading-6
                      text-[#1E3557]
                    "
                  >
                    {ug.note}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP NOTE */}
        {ug?.note && (
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="
              mx-auto
              mt-14
              hidden
              max-w-4xl
              text-center
              text-sm
              leading-relaxed
              text-[#4b5563]
              md:block
              md:text-base
            "
          >
            {ug.note}
          </motion.p>
        )}
      </div>
    </section>
  );
}
