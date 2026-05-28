"use client";

import { motion } from "framer-motion";

import CommonHeader from "@/app/components/CommonHeader";

import { Globe, GraduationCap, Plane, Award, BookOpen } from "lucide-react";

export default function InternationalPrograms({ data }: any) {
  const international = data?.international;

  // ICON MAP
  const icons: any = {
    exchange: Globe,
    masters: GraduationCap,
    internship: Plane,
    dual: BookOpen,
    scholarship: Award,
  };

  return (
    <section
      className="
        overflow-hidden
        bg-[#fff]
        py-20
        md:py-28
        max-md:py-14
      "
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag={international?.tag}
          title={international?.title}
          highlight={international?.highlight}
          description={international?.description}
          align="center"
          primaryColor="#0A8F96"
        />

        {/* DESKTOP GRID */}
        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {international?.programs?.map((item: any, index: number) => {
            const Icon = icons[item.icon as keyof typeof icons] || Globe;

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
                    rounded-2xl
                    border
                    border-[#d9e7ec]
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:shadow-xl
                  "
              >
                {/* ICON */}
                <div
                  className="
                      mb-5
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#e8f7f8]
                    "
                >
                  <Icon
                    className="
                        h-6
                        w-6
                        text-[#0A8F96]
                      "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                      mb-4
                      text-xl

                      leading-snug
                      text-[#183153]
                    "
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                      text-sm
                      leading-relaxed
                      text-[#5b6475]
                      md:text-base
                    "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE VIEW */}
        <div className="mt-8 space-y-4 md:hidden">
          {international?.programs?.map((item: any, index: number) => {
            const Icon = icons[item.icon as keyof typeof icons] || Globe;

            return (
              <div
                key={index}
                className="
                    rounded-2xl
                    border
                    border-[#e7ddd6]
                    bg-[#fbfbfa]
                    px-4
                    py-4
                    shadow-sm
                  "
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#fff4ed]
                        text-[#ff7a2f]
                      "
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3
                      className="
                          text-[15px]
                          leading-snug
                          text-[#1E3557]
                        "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                          mt-3
                          text-[11px]
                          leading-6
                          text-gray-500
                        "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* GLOBAL MAP CARD */}
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-[#f0d8c7]
              bg-[#fffaf7]
            "
          >
            {/* TITLE */}
            <div className="px-4 pt-4 text-center">
              <h3
                className="
                  text-[16px]
                  text-[#1E3557]
                "
              >
                Our Global Partner Countries
              </h3>

              <p
                className="
                  mt-1
                  text-[9px]
                  text-gray-400
                "
              >
                Building strong academic partnerships across the globe.
              </p>
            </div>

            {/* MAP */}
            <div className="px-2 py-3">
              <img
                src="/img/study-in-india/global.jpg"
                alt="Global Partner Institutions"
                className="
                  h-full
                  w-full
                  rounded-xl
                  object-contain
                "
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              bg-[#0A8F96]
              px-5
              py-3
              text-[12px]
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:bg-[#0cb4bd]
            "
          >
            VIEW GLOBAL PARTNERS
          </button>
        </div>

        {/* DESKTOP MAP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
            mt-20
            hidden
            overflow-hidden
            rounded-3xl
            bg-[#eef4fb]
            md:block
          "
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-10 md:p-14">
              <h2
                className="
                  text-4xl
                  font-bold
                  leading-tight
                  text-[#183153]
                  md:text-5xl
                "
              >
                Our Global <br />
                <span className="text-[#0A8F96]">Partner Institutions</span>
              </h2>

              <div
                className="
                  mt-6
                  mb-8
                  h-1
                  w-24
                  rounded-full
                  bg-[#0A8F96]
                "
              />

              <p
                className="
                  text-base
                  leading-relaxed
                  text-[#4b5563]
                "
              >
                Partner institutions include universities in the{" "}
                <span
                  className="
                    text-[#0A8F96]
                  "
                >
                  USA, UK, Germany, France, Spain, Malaysia, Taiwan, Japan
                </span>{" "}
                and beyond.
              </p>

              <div
                className="
                  mt-8
                  border-t
                  border-[#d7e2ec]
                  pt-8
                "
              >
                <div className="mb-3 flex items-center gap-3">
                  <Globe
                    className="
                      h-5
                      w-5
                      text-[#0A8F96]
                    "
                  />

                  <span
                    className="
                      font-medium
                      text-[#183153]
                    "
                  >
                    Presidency University maintains active MoUs
                  </span>
                </div>

                <p className="text-[#4b5563]">
                  with institutions on{" "}
                  <span
                    className="

                      text-[#0A8F96]
                    "
                  >
                    six continents.
                  </span>
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="relative h-[450px] lg:h-full">
              <img
                src="/img/study-in-india/global.jpg"
                alt="Global Partner Institutions"
                className="
                  h-full
                  w-full
                  object-contain
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
