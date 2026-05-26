"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { H2, H4 } from "@/app/components/Headings";

export default function CourseOutcomes({ data }: any) {
  const tabs = data?.tabs?.outcomes || {};
  const keys = Object.keys(tabs);

  const [active, setActive] = useState(keys[0]);

  if (!keys.length) return null;

  return (
    <section className="bg-[#fff] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center">
          {/* TAG */}
          <span
            className="
              inline-block
              rounded-md
              bg-[#FFF1E8]
              px-4 py-2
              text-xs
              font-medium
              text-[#F58233]
            "
          >
            Programme
          </span>

          {/* TITLE */}
          <H2 className="mt-5 text-[#183153]">
            Programme <span className="text-[#F58233]">Outcomes</span>
          </H2>
        </div>

        {/* TABS */}
        <div className="mt-10 flex justify-center">
          <div
            className="
              flex
              rounded-xl
              border border-[#F58233]/40
              bg-white
              p-1.5
              shadow-sm
            "
          >
            {keys.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                  rounded-lg
                  px-8 py-3
                  text-sm
                  font-medium
                  transition-all duration-300
                  ${
                    active === key
                      ? "bg-[#F58233] text-white shadow-md"
                      : "text-[#183153] hover:bg-[#F7F7F5]"
                  }
                `}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT CARD */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            mt-10
            rounded-2xl
            border border-gray-200
            bg-white
            p-6 md:p-8
            shadow-sm
          "
        >
          <div className="divide-y divide-gray-200">
            {tabs[active]?.map((item: any, index: number) => (
              <div
                key={index}
                className="
                  grid
                  grid-cols-12
                  gap-4
                  py-5
                "
              >
                {/* LEFT ID */}
                <div
                  className="
                    col-span-12
                    md:col-span-2
                    text-sm
                    font-semibold
                    text-[#F58233]
                  "
                >
                  {item.id}
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-span-12 md:col-span-10">
                  <H4 className="text-[#183153]">
                    {item.title}
                  </H4>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-gray-600
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
