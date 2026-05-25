"use client";

import { motion } from "framer-motion";

import CommonHeader from "@/app/components/CommonHeader";

import { Languages } from "lucide-react";

export default function LanguageElectives({ data }: any) {
  const languages = data?.languages;

  return (
    <section
      className="
        overflow-hidden
        bg-[#f8f8f8]
        py-20
        md:py-28
        max-md:py-14
      "
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 max-md:px-4">
        {/* DESKTOP VIEW */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            {/* HEADER */}
            <CommonHeader
              tag={languages?.tag}
              title={languages?.title}
              highlight={languages?.highlight}
              description=""
              align="left"
              primaryColor="#ff7a2f"
            />

            {/* CONTENT */}
            <p
              className="
                mt-6
                text-sm
                leading-relaxed
                text-[#4b5563]
                md:text-base
              "
            >
              {languages?.description}
            </p>

            {/* NOTE */}
            <p
              className="
                mt-6
                text-sm
                leading-relaxed
                text-[#4b5563]
                md:text-base
              "
            >
              {languages?.note}
            </p>
          </motion.div>

          {/* RIGHT GRID */}
          {/* RIGHT GRID */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="
    flex
    flex-col
    items-center
    justify-center
    gap-5
  "
          >
            {/* TOP ROW */}
            <div className="flex gap-5">
              {languages?.list
                ?.slice(0, 3)
                .map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                    }}
                    className="
            group
            relative
            flex
            h-[140px]
            w-[130px]
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-lg
            border
            border-[#0A8F96]
            bg-gradient-to-b
            from-white
            via-[#2dc4cb]
            to-[#0A8F96]
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
          "
                  >
                    {/* ICON */}
                    <div className="mb-4 flex items-center justify-center">
                      <Languages className="h-8 w-8 text-white" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-sm text-white">{item}</h3>

                    {/* HOVER */}
                    <div
                      className="
              absolute
              inset-0
              bg-white/5
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
            "
                    />
                  </motion.div>
                ))}
            </div>

            {/* BOTTOM ROW */}
            <div className="flex gap-5">
              {languages?.list?.slice(3).map((item: string, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className="
            group
            relative
            flex
            h-[140px]
            w-[130px]
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-lg
            border
            border-[#0A8F96]
            bg-gradient-to-b
            from-white
            via-[#2dc4cb]
            to-[#0A8F96]
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
          "
                >
                  {/* ICON */}
                  <div className="mb-4 flex items-center justify-center">
                    <Languages className="h-8 w-8 text-white" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm text-white">{item}</h3>

                  {/* HOVER */}
                  <div
                    className="
              absolute
              inset-0
              bg-white/5
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
            "
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden">
          {/* HEADER */}
          <CommonHeader
            tag={languages?.tag}
            title={languages?.title}
            highlight={languages?.highlight}
            description=""
            align="center"
            primaryColor="#0A8F96"
          />

          {/* DESCRIPTION */}
          <p
            className="
              mt-5
              text-[11px]
              leading-6
              text-[#5b6475]
            "
          >
            {languages?.description}
          </p>

          {/* LANGUAGE GRID */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {languages?.list?.map((item: string, index: number) => (
              <div
                key={index}
                className={`
                    relative
                    overflow-hidden
                    rounded-lg
                    border
                    border-[#0A8F96]/20
                    bg-gradient-to-b
                    from-white
                    via-[#26bcc3]
                    to-[#0A8F96]
                    px-3
                    py-4
                    text-center
                    shadow-sm

                    ${
                      index === languages?.list?.length - 1
                        ? "col-span-2 mx-auto w-[55%]"
                        : ""
                    }
                  `}
              >
                {/* ICON */}
                <div
                  className="
                      mb-2
                      flex
                      items-center
                      justify-center
                    "
                >
                  <Languages
                    className="
                        h-4
                        w-4
                        text-white
                      "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                      text-[11px]
                      text-white
                    "
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <div
            className="
              mt-5
              rounded-2xl
              border
              border-[#0A8F96]
              bg-[#f7fcfc]
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
              {languages?.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
